import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "./Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./SignUp.css";
import study from "./images/study.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Login() {
	const classes = useStyles();
	const emailRef = useRef();
	const passwordRef = useRef();
	const [loading, setLoading] = useState(false);
	const { login } = useAuth();
	const history = useHistory();

	async function handleSubmit(e) {
		e.preventDefault();
		setLoading(true);

		try {
			await login(emailRef.current.value, passwordRef.current.value);
			setLoading(false);
			history.push("/dashboard ");
			window.location.reload();
		} catch {
			alert("Failed to login");
			setLoading(false);
		}
	}

	return (
		<>
			<section>
				<div className="imgBx">
					<img src={study} />
				</div>
				<div className="contentBx">
					<div className="formBx">
						<h2>Student SignUp</h2>
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
