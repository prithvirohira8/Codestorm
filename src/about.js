import React from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
export default function About() {
    return (
        <div>
            <Navbar signup={<Button>Sign Up</Button>} login={<Button>Log In</Button>} />
            <h1>This is the About Page</h1>
        </div>

    )
}
