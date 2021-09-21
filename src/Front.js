import React from "react";
import Navbar from "./Navbar";
import Button from "@material-ui/core/Button";
import { Container, Grid } from "@material-ui/core";
import online from "./images/online.png";
import { useAuth } from "./Context/AuthContext";
import { useHistory, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import "./App.css";

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
			<div className="container">
				<div className="row">
					<div className="col-sm">
						<div className="col">
							<div className="adjust">
								<img src={online} alt="img" height="500px" width="650px" />
							</div>
						</div>
					</div>
					<div className="col-sm">
						<div className="content">
							<h1>Explore all FullStack Courses in one place</h1>
							<h2>
								Learn new skills from comfort of your home anytime anywhere
							</h2>
						</div>
					</div>
				</div>
			</div>
			{/* <Container maxWidth="lg">
				<Grid item xs={12}>
					<Grid container direction="column" spacing={0}>
						<Grid item xs={12} sm={12} lg={6}>
							<div className="container">
								<div className="avatar">
									<img src={online} alt="img" />
								</div>
							</div>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={12}>
					<Grid container justify="flex-end">
						<Grid item xs={12} sm={12} lg={6}>
							<div className="content">
								<h1>
									<strong>
										Explore all the full stack development courses in one place
									</strong>
								</h1>
								<h2>
									Learn new skills from comfort of your home or anywhere anytime
								</h2>
							</div>
							<div>
								<Button
									aria-controls="customized-menu"
									aria-haspopup="true"
									variant="contained"
									color="primary"
									onClick={handleClick}
								>
									Login
								</Button>
								<StyledMenu
									id="customized-menu"
									anchorEl={anchorEl}
									keepMounted
									open={Boolean(anchorEl)}
									onClose={handleClose}
								>
									<StyledMenuItem>
										<ListItemIcon>
											<SendIcon fontSize="small" />
										</ListItemIcon>
										<ListItemText primary="Teacher" />
									</StyledMenuItem>
									<StyledMenuItem>
										<ListItemIcon>
											<DraftsIcon fontSize="small" />
										</ListItemIcon>
										<ListItemText primary="Student" />
									</StyledMenuItem>
								</StyledMenu>
							</div>
						</Grid>
					</Grid>
				</Grid>
			</Container> */}
		</>
	);
}

export default Front;
