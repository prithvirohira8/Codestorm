import React, { useEffect } from 'react';
import { useAuth } from './Context/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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


export default function Dashboard() {
    const classes = useStyles();
    const { logout, googleLogin } = useAuth();
    const history = useHistory();

    // useEffect(() => {
    //     window.location.reload();
    // }, []);


    async function handleLogout() {
        try {
            await logout();
            history.push('/');
        }
        catch {
            alert('Failed to Logout');
        }
    }



    return (
        <>
            <Navbar logout={<Button onClick={handleLogout}>Log Out</Button>} updateProfile={<Button><Link to='/updateProfile'>Update Profile</Link></Button>} />



        </>
    );
}