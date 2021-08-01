import React from 'react';
import Navbar from './Navbar';
import Button from '@material-ui/core/Button';
import { useAuth } from './Context/AuthContext';
import { useHistory } from 'react-router-dom';

function Home_page() {
    const { googleLogin } = useAuth();
    const history = useHistory();

    async function handleLogin() {
        try {
            await googleLogin();
            alert("ho gaya");
            history.push('/dashboard');
        }
        catch {
            alert("Failed");
        }
    }
    return (
        <div>
            <Navbar signup={<Button>Sign Up</Button>} login={<Button>Log In</Button>} />
            <h2>This is the Home Page</h2>
            <Button onClick={handleLogin} color="secondary">Sign In With Google</Button>
        </div>

    )
}

export default Home_page;