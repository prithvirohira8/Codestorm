import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useAuth } from "./Context/AuthContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function UpdateProfile() {
	const classes = useStyles();
	const emailRef = useRef();
	const passwordRef = useRef();
	const passwordConfirmRef = useRef();
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	const { currentUser, updateEmail, updatePassword } = useAuth();

	function handleSubmit(e) {
		e.preventDefault();
		if (passwordRef.current.value !== passwordConfirmRef.current.value) {
			alert("Password does not Match");
			return;
		}

		const promises = [];
		setLoading(true);
		if (emailRef.current.value !== currentUser.email) {
			promises.push(updateEmail(emailRef.current.value));
		}
		if (passwordRef.current.value) {
			promises.push(updatePassword(passwordRef.current.value));
		}

		Promise.all(promises)
			.then(() => {
				history.push("/login");
			})
			.catch(() => {
				alert("Failed to update");
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<>
			<div className="teacher">
				<div className="container3">
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
						<TextField
							id="outlined-basic"
							label="ConfirmPassword"
							variant="outlined"
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
							Update Profile
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}
