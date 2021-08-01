import React from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';

function Home_page() {
    return (
        <div>
            <Navbar signup={<Button>Sign Up</Button>} login={<Button>Log In</Button>} />
            <h2>This is the Home Page</h2>
        </div>

    )
}

export default Home_page;