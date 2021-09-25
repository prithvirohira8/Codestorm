import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "./Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import study from "./images/study.jpg";
import "./Login.css";
import { app } from "./firebase";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Students_login() {
	const classes = useStyles();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [loading, setLoading] = useState(false);
	const { students_login } = useAuth();
	const history = useHistory();
	const [currentUser, setCurrentUser] = useState();

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);

		try {
			await students_login(emailRef.current.value, passwordRef.current.value);
			setLoading(false);
			history.push("/students_dashboard");
			window.location.reload();
		} catch {
			alert("Failed to login");
			setLoading(false);
		}
	}

	// function changecurrentUser(){
    //     const unsubscribe = auth.onAuthStateChanged(user => {
    //         setCurrentUser(user);
    //         setLoading(false);
    //     })
    //     return unsubscribe;
    // }

	return (
		<>
			<section>
				<div className="imgBx">
					<img src={study} />
				</div>
				<div className="contentBx">
					<div className="formBx">
						<h2>Student Login</h2>
						<form onSubmit={handleSubmit} className={classes.root}>
							{/* <TextField id="outlined-basic" label="Email" variant="outlined" required inputRef={emailRef} /> */}
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
								type="password"
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
