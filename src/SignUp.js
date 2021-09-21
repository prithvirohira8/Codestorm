import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "./Context/AuthContext";
import { useHistory } from "react-router";
import professor from "./images/professor.jpg";
import "./SignUp.css";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Signup() {
	const classes = useStyles();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const [loading, setLoading] = useState(false);
	const { signup } = useAuth();
	const history = useHistory();

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
			history.push("/login");
		} catch {
			alert("Failed to create account");
		}
		setLoading(false);
	}

	return (
		<>
			<section>
				<div className="imgBx">
					<img src={professor} />
				</div>
				<div className="contentBx">
					<div className="formBx">
						<h2>Teacher SignUp</h2>
						<form onSubmit={handleSubmit} className={classes.root}>
							<div className="inputBx">
								<span>Username</span>
								<input type="text" name="" />
							</div>
							<div className="inputBx">
								<span>Password</span>
								<input type="password" name="" />
							</div>
							<div className="inputBx">
								<p>
									Don't have an account?
									<Button
										type="submit"
										fullWidth
										variant="contained"
										color="primary"
										className={classes.submit}
									>
										Sign Up
									</Button>
								</p>
							</div>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
