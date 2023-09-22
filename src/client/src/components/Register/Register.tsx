import React, { useState } from 'react';
import { Button } from '@mui/material';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = () => {
        console.log('submitted');
    }

    return (
        <form id="authForm" className='shadow' onSubmit={handleSubmit}>
            <h2 id="headerTitle">Register</h2>
            <div>
                <div className="row">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="row">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="row">
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                </div>
                <div id="button" className="row">
                    <Button variant="contained" color="primary">
                        Register
                    </Button>
                </div>
                <div className='row pb-4'>
                    Already have an account?
                    <a role='button' className='text-center' onClick={() => navigate('/login')}>Login</a>
                </div>
            </div>
        </form>
    );
}

export default Register;