import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from './Context/AuthContext';
import { useHistory } from 'react-router';
import { auth } from "./firebase";
import firebase from './firebase';


const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function Signup() {
    const [currentUser, setCurrentUser] = useState();
    const { signup } = useAuth();
    const classes = useStyles();
    const NameRef = useRef();
    const LastnameRef = useRef();
    const shortdescRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [loading, setLoading] = useState(false);
    const [task, setTask] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            alert("Password does not Match");
            setLoading(false);
            return;
        }

        try {
            await signup(emailRef.current.value, passwordRef.current.value);
            await changecurrentUser();
            setTask(true);
        } catch (e) {
            console.log(e)
            alert("Failed to create account");
        }
    }

    function changecurrentUser() {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        })
        return unsubscribe;
    }

    if (task) {
        const StudentRef = firebase.database().ref('Teachers')
        const Studentinfo = {
            Name: NameRef.current.value,
            LastName: LastnameRef.current.value,
            shortdescRef: shortdescRef.current.value,
            Email: emailRef.current.value,
            Occupation: "teacher"
        }
        StudentRef.child(currentUser.uid).set(Studentinfo)
        history.push('/teachers_dashboard')
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className={classes.root} >
                    <TextField id="outlined-basic" label="Name" variant="outlined" required inputRef={NameRef} />
                    <br />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" required inputRef={LastnameRef} />
                    <br />
                    <TextField id="outlined-basic" label="shortdesc" variant="outlined" required inputRef={shortdescRef} />
                    <br />
                    <TextField id="outlined-basic" label="Email" variant="outlined" required inputRef={emailRef} />
                    <br />
                    <TextField id="outlined-basic" label="Password" variant="outlined" required inputRef={passwordRef} />
                    <br />
                    <TextField id="outlined-basic" label="ConfirmPassword" variant="outlined" required inputRef={passwordConfirmRef} />
                    <br />
                    <Button type='submit' disabled={loading} variant="contained" color="secondary">
                        SignUp
                    </Button>
                </form>
            </div>
        </>
    );
}
