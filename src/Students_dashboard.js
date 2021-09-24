import React, { useState, useEffect } from "react";
import { useAuth } from "./Context/AuthContext";
import { useHistory, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import full from "./images/full.png";
import "./Login.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import app from "./firebase";
import firebase from "./firebase";
import ReactPlayer from 'react-player';
import Forum from './Forum/Forum';
import './anchor.css';
import FooterNew from './FooterNew';
import './Footer.css'



import Quiz from 'react-quiz-component';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function Students_dashboard() {
	const { logout, currentUser } = useAuth();
	const history = useHistory();
	const [button, setButton] = useState("");
	const [ref, setRef] = useState();
	const [loading, setLoading] = useState(false);
	const [Name, setName] = useState("");
	const [Lname, setLname] = useState("");
	const [Age, setAge] = useState("");
	const [College, setCollege] = useState("");
	const [Email, setEmail] = useState("");
	const [course_name, setcourse_name] = useState("");
	const [explore, setExplore] = useState();
	const [Student_Profile, setStudent_Profile] = useState();
	const [StudentCourse, setStudentCourse] = useState();
	// const [upvote, setUpvote] = useState(false);

	async function handleLogout() {
		try {
			await logout();
			history.push("/");
		} catch {
			alert("Failed to Logout");
		}
	}

	const student_info = [];
	const student_course_info = [];
	const studentinformation = async () => {
		const student_info_ref = app.database().ref("Students/" + currentUser.uid);
		await student_info_ref.once("value").then((snapshot) => {
			student_info.push(snapshot.val());
			setStudent_Profile(student_info);
			setLoading(true);
		});
		
	};

	// async function delete_course() {
	// 	const student_info_ref = app.database().ref('Students/' + currentUser.uid + '/MyCourses');
	// 	const delete_course = [];
	// 	await student_info_ref.once('value').then((snapshot) => {
	// 		delete_course.push(snapshot.val());
	// 	})

	// 	const course_keys = Object.keys(delete_course[0])

	// 	Object.values(delete_course[0]).map((course, id) => {
	// 		if (course.Course_Name == course_name) {
	// 			const course_ref_delete = app.database().ref('Students/' + currentUser.uid + '/MyCourses/' + course_keys[id]);
	// 			course_ref_delete.remove();
	// 		}
	// 	})
	// }


	async function upvote_course(info) {
		
		var course_ref = firebase.database().ref('Courses/' + info.Course_Name + '/Course_Details');
		console.log("Course Ref is "+course_ref)
		var course_ref_info = [];
		await course_ref.once('value').then((snapshot) => {
			course_ref_info = (snapshot.val());
		})

		console.log(course_ref_info)
		var x = course_ref_info.no_of_likes;
		course_ref.update({
			no_of_likes: x + 1
		})

		var student_info_ref = [];
		var student_ref = app.database().ref("Students/" + currentUser.uid);
		await student_ref.once("value").then((snapshot) => {
			student_info_ref = (snapshot.val());
		});
		console.log(student_info_ref)
		var course_keys =[]
		Object.keys(student_info_ref).map((number) => {
			if(number!='Age'&&number!='College'&&number!='Email'&&number!='LastName'&&number!='Mycourses'&&number!='name'){
				course_keys.push(number)
			}
		})
		for(let id in course_keys){
			student_ref = app.database().ref("Students/" + currentUser.uid+"/"+course_keys[id])
			await student_ref.once("value").then((snapshot) => {
				if(snapshot.val().Course_Name==info.Course_Name){
					console.log("It works")
					student_ref.update({
						Upvote_Status: true
					})
				}
			});
		}
	}

	async function downvote_course(info) {
		var course_ref = firebase.database().ref('Courses/' + info.Course_Name + '/Course_Details');
		console.log("Course Ref is "+course_ref)
		var course_ref_info = [];
		await course_ref.once('value').then((snapshot) => {
			course_ref_info = (snapshot.val());
		})

		console.log(course_ref_info)
		var x = course_ref_info.no_of_likes;
		course_ref.update({
			no_of_likes: x - 1
		})

		var student_info_ref = [];
		var student_ref = app.database().ref("Students/" + currentUser.uid);
		await student_ref.once("value").then((snapshot) => {
			student_info_ref = (snapshot.val());
		});
		console.log(student_info_ref)
		var course_keys =[]
		Object.keys(student_info_ref).map((number) => {
			if(number!='Age'&&number!='College'&&number!='Email'&&number!='LastName'&&number!='Mycourses'&&number!='name'){
				course_keys.push(number)
			}
		})
		for(let id in course_keys){
			student_ref = app.database().ref("Students/" + currentUser.uid+"/"+course_keys[id])
			await student_ref.once("value").then((snapshot) => {
				if(snapshot.val().Course_Name==info.Course_Name){
					console.log("It works")
					student_ref.update({
						Upvote_Status: false
					})
				}
			});
		}
	}

	const student_course_information = async () => {
		const course_info_ref = app.database().ref("Courses/" + course_name);
		await course_info_ref.once("value").then((snapshot) => {
			student_course_info.push(snapshot.val());
			setStudentCourse(student_course_info);

			console.log(StudentCourse);
		});
	};

	useEffect(() => {
		studentinformation();
	}, []);

	useEffect(() => {
		student_course_information();
	}, [course_name]);

	return (
		<>
			<Navbar
				logout={<Button onClick={handleLogout}>Log Out</Button>}
				updateProfile={
					<Button>
						<Link to="/updateProfile">Update Password</Link>
					</Button>
				}
			/>
			<Link to={`/forum/${course_name}`} >
				<Button variant="contained" color="secondary" >Go to Forum</Button>
			</Link>
			{explore ? (
				<>
					<h1>Course Material</h1>

					{StudentCourse &&
						Object.values(StudentCourse[0]).map((course, id) => (
							<div>
								<Card sx={{ minWidth: 275 }}>
									<CardContent>
										<Typography variant="h5" component="div">
											{course.VideoTitle}
										</Typography>
										<Typography variant="body2">
											{course.VideoDescription}
										</Typography>
									</CardContent>
									<CardActions>
										<ReactPlayer width="480px" height="240px" controls url={course.VideoLink} />
									</CardActions>
									<br></br>
									<br></br>
								</Card>
							</div>
						))
					}
					<br></br>
					<Button onClick={(e) => { setExplore(false); }} variant="contained" color="secondary">Go Back</Button>
					<br></br>

				</>
			) : (
				<>
					{loading &&
						Object.values(Student_Profile).map((info, id) => (
							<section>
								<div className="imgBx">
									<div className="photo">
										<img src={full} />
									</div>
								</div>
								<div className="contentBx">
									<div className="formBx">
										<h1>Students Dashboard</h1>
										<h2>Hey {info.Name} {info.LastName}!</h2>
										<h2>Age: {info.Age}</h2>
										<br></br>
										<h2>College: {info.College}</h2>
										<h2>Email: {info.Email}</h2>
									</div>
								</div>
							</section>
						))}

					{loading &&
						Object.values(Student_Profile[0]).map((info, id) => (
							<div>
								{info.Course_Name ? (
									<div>
										<Card sx={{ minWidth: 275 }}>
											<CardContent>
												<Typography variant="h5" component="div">
													{info.Course_Name}
												</Typography>
												<Typography variant="h5" component="div">
													Date of Enrollment: {info.Date_Enrolled}
												</Typography>
												{!info.Upvote_Status ? 
												<Button variant="contained" color="secondary" onClick={() => {upvote_course(info)}}>Upvote</Button> : 
												<Button variant="contained" color="secondary" onClick={() => {downvote_course(info)}}>Downvote</Button>} <br></br> <br></br> 
												<Link to={`/students_dashboard/${info.Course_Name}`}>
													<Button variant="contained" color="secondary" >Explore</Button>
												</Link>
											</CardContent>
											<CardActions>
												
											</CardActions>
										</Card>
										<br />
									</div>
								) : (
									""
								)}
							</div>
						))}
				</>
			)}
			<FooterNew />
		</>
	);
}

