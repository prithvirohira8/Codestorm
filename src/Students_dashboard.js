import React, { useState, useEffect } from 'react';
import { useAuth } from './Context/AuthContext';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import app from './firebase';

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

export default function Students_dashboard() {
    const { logout, currentUser } = useAuth();
    const history = useHistory();
    const [button, setButton] = useState("");
    const [ref, setRef] = useState();
    const [loading, setLoading] = useState(false);
    const [Name, setName] = useState("");
    const [Lname, setLname] = useState("");
    const [Age, setAge] = useState("");
    const [College, setCollege] = useState("");
    const [Email, setEmail] = useState("");


    async function handleLogout() {
        try {
            await logout();
            history.push('/');
        }
        catch {
            alert('Failed to Logout');
        }
    }

    const student_info_ref = app.database().ref('Students/'+currentUser.uid)
    const student_info = []
    student_info_ref.on('value',(snapshot) => {
        student_info.push(snapshot.val())
    })
    console.log(student_info)
    setTimeout(() => {
        setName(student_info[0].Name)
        setLname(student_info[0].LastName)
        setAge(student_info[0].Age)
        setCollege(student_info[0].College)
        setEmail(student_info[0].Email)
    }, 500);
    

    return (    
        <>
            <Navbar
                logout={<Button onClick={handleLogout}>Log Out</Button>}
                updateProfile={<Button><Link to='/updateProfile'>Update Profile</Link></Button>}
            />

            <div>
            <h1>Students Dashboard</h1>
            <h2>Name: {Name}</h2>
            <h2>Last Name: {Lname}</h2>
            <h2>Age: {Age}</h2>
            <h2>College: {College}</h2>
            <h2>Email: {Email}</h2>

            </div>

        </>
    );
}