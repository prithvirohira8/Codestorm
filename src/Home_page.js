import React from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import { useAuth } from './Context/AuthContext';
import { useHistory, Redirect } from 'react-router-dom';

function Home_page() {
    return (
        <div>
            <Navbar signup={<Button>Sign Up</Button>} students_login={<Button>Students Log In</Button>} teachers_login={<Button>Teachers Log In</Button>} />
            <h2>This is the Home Page</h2>
        </div>
    )
}
export default Home_page;