import React from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
function Contact() {
    return (
        <div>
            <Navbar signup={<Button>Sign Up</Button>} login={<Button>Log In</Button>} />
            <h1>This is the Contact Page</h1>
        </div>

    )
}

export default Contact;