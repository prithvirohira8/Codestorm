import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "./Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import professor from "./images/professor.jpg";
import "./SignUp.css";
import app from "./firebase";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Teachers_login() {
	const [currentUser, setCurrentUser] = useState();
	const classes = useStyles();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [loading, setLoading] = useState(false);
	const { teachers_login } = useAuth();
	const history = useHistory();
	const [task, setTask] = useState(false);

	if (task) {
		console.log("Hello");
		const student_info_ref = app.database().ref("Students/" + currentUser.uid);
		const student_info = [];

		student_info_ref.on("value", (snapshot) => {
			student_info.push(snapshot.val());
		});

		setTimeout(() => {
			if (student_info[0].Occupation == "student") {
				alert("Access to teachers dashboard is denied!");
				history.push("/");
			} else {
				setLoading(false);
				history.push("/teachers_dashboard ");
				window.location.reload();
			}
		}, 1000);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);

		try {
			await teachers_login(emailRef.current.value, passwordRef.current.value);
			await changecurrentUser();
			setTask(true);
		} catch (e) {
			console.log(e);
			alert("Failed to login");
			setLoading(false);
		}
	}

	function changecurrentUser() {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
		});
		return unsubscribe;
		console.log(currentUser.uid);
	}

	return (
		<>
			<section>
				<div className="imgBx">
					<img src={professor} />
				</div>
				<div className="contentBx">
					<div className="formBx">
						<h2>Teacher Login</h2>
						<form onSubmit={handleSubmit} className={classes.root}>
							<TextField
								id="outlined-basic"
								label="Email"
								variant="outlined"
								required
								inputRef={emailRef}
							/>
							<br />
							<TextField
								id="outlined-basic"
								label="PassWord"
								variant="outlined"
								required
								inputRef={passwordRef}
							/>
							<br />
							<Button
								type="submit"
								disabled={loading}
								variant="contained"
								color="secondary"
							>
								Login
							</Button>
							<Button color="primary">
								<Link to="/forgot-password"> Forgot-Password </Link>
							</Button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
