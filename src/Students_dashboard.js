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
	const [courses, setcourses] = useState();
	const [Student_Profile, setStudent_Profile] = useState();
	const [StudentCourse, setStudentCourse] = useState();
	const [render, Setrender] = useState();
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
						<Link to="/updateProfile">Update Profile</Link>
					</Button>
				}
			/>
			{explore ? (
				<>
					<h1>jhkj</h1>

					{StudentCourse &&
						Object.values(StudentCourse[0]).map((course, id) => (
							<div>
								<h2>{course.VideoTitle}</h2>
								<h3>{course.VideoDescription}</h3>
								<h3>{course.VideoLink}</h3>
							</div>
						))}

					<Button
						onClick={(e) => {
							setExplore(false);
						}}
						variant="contained"
						color="secondary"
					>
						go back
					</Button>
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
										<h2>Name: {info.Name}</h2>
										<h2>Last Name: {info.LastName}</h2>
										<h2>Age: {info.Age}</h2>
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
										<h2>Course Name: {info.Course_Name}</h2>
										<h3>Date of Enrollment: {info.Date_Enrolled}</h3>
										<Button
											onClick={(e) => {
												setcourse_name(info.Course_Name);
												setExplore(true);
												console.log(course_name);
												// student_course_information();
												//student_course_information();
											}}
											variant="contained"
											color="secondary"
										>
											Explore
										</Button>
										<br />
									</div>
								) : (
									""
								)}
							</div>
						))}
				</>
			)}
		</>
	);
}
