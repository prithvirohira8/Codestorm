import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import firebase from './firebase';
import Button from '@material-ui/core/Button';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Alert from '@mui/material/Alert';
import { useAuth } from './Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';
import "./Learn_More.css";
import "./Courses.css";

export default function Courses() {
	const [courses, setcourses] = useState();
	const [course_id, setcourse_id] = useState();
	const [course_description, setcourse_description] = useState(false);
	const [courseName, setcourseName] = useState();
	const { currentUser } = useAuth();
	const history = useHistory();
	const undefined = async () => {
		const Courses_Ref = firebase.database().ref("Courses");
		const courseList = [];
		Courses_Ref.once("value").then((snapshot) => {
			const courses = snapshot.val();
			for (let id in courses) {
				courseList.push({ id, ...courses[id] });
			}
			setcourses(courseList);
		});
	};

	useEffect(() => {
		undefined();
	}, []);

	return (
		<>
			<Navbar />

			{course_description ? (
				<>
					<h2>{courses[course_id].Course_Details.Name}</h2>
					<h6>{courses[course_id].Course_Details.Description}</h6>
					{console.log(courses[course_id])}
					{courses &&
						Object.values(courses[course_id]).map((course, id) => (
							<>
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
							</>
						))}


                    &nbsp;
					&nbsp;
					<Button
						onClick={() => {
							setcourse_description(false);
						}}
						variant="contained"
						color="secondary"
					>
						Go Back
					</Button>

					&nbsp;
					&nbsp;
					<Button
						onClick={() => {
							var student_id_ref = firebase.database().ref("Students");
							const student_id = [];

							student_id_ref.on("value", (snapshot) => {
								const ids = snapshot.val();
								for (let id in ids) {
									student_id.push(id);
								}
								console.log(student_id);
							});
							if (currentUser == null) {
								history.push("/students_login");
							} else {
								student_id_ref = firebase.database().ref("Students/" + currentUser.uid);
								const current = new Date();
								const date = `${current.getDate()}/${current.getMonth() + 1
									}/${current.getFullYear()}`;
								const student_course_data = {
									Course_Name: courses[course_id].Course_Details.Name,
									Date_Enrolled: date,
								};
								student_id_ref.push(student_course_data);
								{ window.alert('You have successfully enrolled for the course') }
								setcourse_description(false);
							}
						}}
						variant="contained"
						color="secondary"
					>
						Enroll Now
					</Button>
					<br></br>
					<br></br>
				</>
			) : (
				courses &&
				courses.map((course, id) => (
					<div className="container1">
						<div className="row1">
							<div className="card1">
								<div className="card-header1">
									<h2>Course Name: {course.Course_Details.Name}</h2>
								</div>
								<div className="card-body1">
									<h5>Description: {course.Course_Details.Description}</h5>
									<h5>
										Users enrolled: {course.Course_Details.no_of_students}
									</h5>
									<h5>Likes: {course.Course_Details.no_of_likes}</h5>

									<Button
										className="btn1"
										onClick={() => {
											setcourse_id(id);
											setcourse_description(true);
										}}
										variant="contained"
										color="secondary"
									>
										Learn More
									</Button>
								</div>
							</div>

							<br />
							<br />
						</div>
					</div>
				))
			)}
		</>
	);
}
