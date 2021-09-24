import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "./Context/AuthContext";
import { useHistory } from "react-router";
import { auth } from "./firebase";
import firebase from "./firebase";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Signup() {
	const [currentUser, setCurrentUser] = useState();
	const { signup, changecurrentUser } = useAuth();
	const classes = useStyles();
	const NameRef = useRef();
	const LastnameRef = useRef();
	const YearRef = useRef();
	const AgeRef = useRef();
	const CollegeRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [loading, setLoading] = useState(false);
	const [task, setTask] = useState(false);
	const history = useHistory();

	var x = 10;
	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			alert("Password does not Match");
			setLoading(false);
			return;
		}

		try {
			await signup(emailRef.current.value, passwordRef.current.value);
			await changecurrentUser();
			setTask(true);
		} catch (e) {
			console.log(e);
			alert("Failed to create account");
		}
	}

    if (task) {
        const StudentRef = firebase.database().ref('Students')
        const Studentinfo = {
            Name: NameRef.current.value,
            LastName: LastnameRef.current.value,
            Year: YearRef.current.value,
            Age: AgeRef.current.value,
            College: CollegeRef.current.value,
            Email: emailRef.current.value,
            Occupation: "student"
        }
        StudentRef.child(currentUser.uid).set(Studentinfo)
        const MycoursesRef = firebase.database().ref('Students/'+currentUser.uid)
        const MyCourseinfo = {
            Course_Name: "",
            Date_Enrolled: ""
        }
        MycoursesRef.child('MyCourses').set(MyCourseinfo);
        history.push('/students_dashboard');
    }

	if (task) {
		const StudentRef = firebase.database().ref("Students");
		const Studentinfo = {
			Name: NameRef.current.value,
			LastName: LastnameRef.current.value,
			Year: YearRef.current.value,
			Age: AgeRef.current.value,
			College: CollegeRef.current.value,
			Email: emailRef.current.value,
			Occupation: "student",
		};
		StudentRef.child(currentUser.uid).set(Studentinfo);
		history.push("/students_dashboard");
	}

	return (
		<>
			<div className="teacher">
				<div className="container3">
					<form onSubmit={handleSubmit} className={classes.root}>
						<TextField
							id="outlined-basic"
							label="Name"
							variant="standard"
							required
							inputRef={NameRef}
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="Last Name"
							variant="standard"
							required
							inputRef={LastnameRef}
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="Year"
							variant="standard"
							required
							inputRef={YearRef}
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="Age"
							variant="standard"
							required
							inputRef={AgeRef}
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="College"
							variant="standard"
							required
							inputRef={CollegeRef}
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="Email"
							variant="standard"
							required
							inputRef={emailRef}
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="Password"
							variant="standard"
							required
							inputRef={passwordRef}
						/>
						<br />
						<TextField
							id="outlined-basic"
							label="ConfirmPassword"
							variant="standard"
							required
							inputRef={passwordConfirmRef}
						/>
						<br />
						<Button
							type="submit"
							disabled={loading}
							variant="contained"
							color="secondary"
						>
							SignUp
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}
