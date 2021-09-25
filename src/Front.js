import React from "react";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import { Container, Grid } from "@material-ui/core";
import online from "./images/online.png";
import { useAuth } from "./Context/AuthContext";
import { useHistory, Redirect, Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import "./Front.css";
import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "center",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.main,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

function Front() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<div className="front">
				<div className="container">
					<div className="row">
						<div className="col-sm">
							<div className="col">
								<div className="adjust">
									<img src={online} alt="img" height="500px" width="550px" />
								</div>
							</div>
						</div>
						<div className="col-sm">
							<div className="content">
								<h1>Devsera </h1>
								<h1>Explore all Full Stack  Courses in one place</h1>
								<h2>
									Learn Full Stack Devevlopment the right way!
								</h2>
							</div>
							<br></br>

							<Button variant="contained" color="secondary" ><Link to="/Mycourse" style={{ textDecoration: "none", color: "white" }}>Start your Web Development Journey! </Link></Button>

							{/* <Button>
                    <Link to="/updateProfile">Update Profile</Link>
                </Button> */}

						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Front;
