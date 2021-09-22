import React from "react";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import { useAuth } from "./Context/AuthContext";
import { useHistory, Redirect } from "react-router-dom";
import Front from "./Front";
import Card from "./Cards";
import Feature from "./Feature";

function Home_page() {
	return (
		<div>
			<Navbar
				signup={<Button>Students Sign Up</Button>}
				teachers_signup={<Button>Teachers Sign Up</Button>}
				students_login={<Button>Students Log In</Button>}
				teachers_login={<Button>Teachers Log In</Button>}
			/>
			<Front />
			<Card />
			<Feature />
		</div>
	);
}
export default Home_page;
