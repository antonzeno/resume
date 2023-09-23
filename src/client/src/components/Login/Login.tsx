import React, { useContext, useEffect, useState } from 'react';
import { Alert, AlertColor, Button, Snackbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { SnackbarContext } from '../../contexts/SnackbarContext';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const registrationSuccess = location.state?.registrationSuccess;
    const { message, severity, isSnackbarOpen, showSnackbar, hideSnackbar } = useContext(SnackbarContext);

    useEffect(() => {
        if (registrationSuccess) {
            showSnackbar('Registration success', "success");
        }
    }, [registrationSuccess]);

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
                    <a href="/register" role='button' className='text-center' onClick={(e) => {
                        e.preventDefault();
                        navigate('/register');
                    }}
                    >
                        Register
                    </a>
                </div>
            </div>
        </form>
    );
}

export default Login;