import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from './Context/AuthContext';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Signup() {

    const classes = useStyles();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
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
            history.push('/login')
        } catch {
            alert("Failed to create account");
        }
        setLoading(false);


    }


    return (
        <>

            <form onSubmit={handleSubmit} className={classes.root} >
                <TextField id="outlined-basic" label="Email" variant="outlined" required inputRef={emailRef} />
                <br />
                <TextField id="outlined-basic" label="PassWord" variant="outlined" required inputRef={passwordRef} />
                <br />
                <TextField id="outlined-basic" label="ConfirmPassword" variant="outlined" required inputRef={passwordConfirmRef} />
                <br />
                <Button type='submit' disabled={loading} variant="contained" color="secondary">
                    SignUp
                </Button>
            </form>


        </>
    );
}