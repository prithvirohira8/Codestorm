import React from "react";
import SignUp from "./SignUp";
import Students_login from "./Students_login";
import Teachers_login from "./Teachers_login";
import Teachers_Signup from "./Teachers_Signup";
import Course_Dashboard from "./Course_Dashboard";
import Students_dashboard from "./Students_dashboard";
import Teachers_dashboard from "./Teachers_dashboard";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import { AuthProvider } from "./Context/AuthContext";
import Home_page from "./Home_page";
import Courses from "./Courses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Forum from "./Forum/Forum";

function App() {
	return (
		<Router>
			<AuthProvider>
				<Switch>
					<Route exact path="/" component={Home_page} />
					<PrivateRoute
						exact
						path="/students_dashboard"
						component={Students_dashboard}
					/>
					<PrivateRoute
						exact
						path="/teachers_dashboard"
						component={Teachers_dashboard}
					/>
					<PrivateRoute exact path="/updateProfile" component={UpdateProfile} />
					<Route exact path="/course_dashboard" component={Course_Dashboard} />
					<Route exact path="/forgot-password" component={ForgotPassword} />
					<Route exact path="/courses" component={Courses} />
					<Route exact path="/students_signup" component={SignUp} />
					<Route exact path="/teachers_signup" component={Teachers_Signup} />
					<Route exact path="/students_login" component={Students_login} />
					<Route exact path="/teachers_login" component={Teachers_login} />
					<Route exact path="/forum" component={Forum} />
				</Switch>
			</AuthProvider>
		</Router>
	);
}

export default App;
