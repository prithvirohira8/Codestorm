import React from "react";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import { useAuth } from "./Context/AuthContext";
import { useHistory, Redirect } from "react-router-dom";
import Front from "./Front";
import Card from "./Cards";
import Feature from "./Feature";

function Home_page() {
	const { googleLogin, currentUser } = useAuth();
	const history = useHistory();

	async function handleLogin() {
		try {
			await googleLogin();
			alert("ho gaya");
			history.push("/dashboard");
		} catch {
			alert("Failed");
		}
	}
	return (
		<>
			<div>
				{currentUser ? <Redirect to="/dashboard" /> : ""}
				<Navbar
					signup={<Button>Teacher</Button>}
					login={<Button>Student</Button>}
					googleLogin={
						<Button onClick={handleLogin} color="secondary">
							Sign In With Google
						</Button>
					}
				/>
				<Front />
				<Card />
				<Feature />
			</div>
		</>
	);
}

export default Home_page;
