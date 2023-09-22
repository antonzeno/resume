import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('submitted');
    }

    return (
        <form id="authForm" className='shadow' onSubmit={handleSubmit}>
            <h2 id="headerTitle">Login</h2>
            <div>
                <div className="row">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="row">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div id="button" className="row">
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </div>
                <div className='row pb-4'>
                    Don't have an account?
                    <a role='button' className='text-center' onClick={() => navigate('/register')}>Register</a>
                </div>
            </div>
        </form>
    );
}

export default Register;