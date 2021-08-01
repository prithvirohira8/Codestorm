import React, { useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from './Context/AuthContext';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Login() {

    const classes = useStyles();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);

        try {
            await login(emailRef.current.value, passwordRef.current.value);
            setLoading(false);
            history.push('/dashboard ')
            window.location.reload();
        } catch {
            alert("Failed to login");
            setLoading(false);
        }



    }


    return (
        <>

            <form onSubmit={handleSubmit} className={classes.root} >
                <TextField id="outlined-basic" label="Email" variant="outlined" required inputRef={emailRef} />
                <br />
                <TextField id="outlined-basic" label="PassWord" variant="outlined" required inputRef={passwordRef} />
                <br />
                <Button type='submit' disabled={loading} variant="contained" color="secondary">
                    Login
                </Button>
                <Button color="primary">
                    <Link to='/forgot-password'> Forgot-Password </Link>
                </Button>


            </form>


        </>
    );
}