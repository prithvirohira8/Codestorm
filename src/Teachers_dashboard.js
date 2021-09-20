import React, { useState } from 'react';
import { useAuth } from './Context/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import About from './About';
import Contact from './Contact'
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


export default function Teachers_dashboard() {
    const classes = useStyles();
    const { logout, currentUser } = useAuth();
    const history = useHistory();
    const [button, setButton] = useState("");
    async function handleLogout() {
        try {
            await logout();
            history.push('/');
        }
        catch {
            alert('Failed to Logout');
        }
    }
    function getData(val) {
        setButton(val);
    }
    return (
        <>
            <Navbar
                logout={<Button onClick={handleLogout}>Log Out</Button>} updateProfile={<Button><Link to='/updateProfile'>Update Profile</Link></Button>}
                getData={getData} />
            {
                button === "About" ? <About /> : ""
            }
            {
                button === "Contact" ? <Contact /> : ""
            }
            <div>
                {
                    <h1>Teachers Dashboard</h1>      
                }
                
            </div>
        </>
    );
}