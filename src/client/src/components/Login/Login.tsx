import React, { FormEvent, useContext, useEffect, useState } from 'react';
import { Alert, AlertColor, Button, Snackbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { SnackbarContext } from '../../contexts/SnackbarContext';
import axios from 'axios';
import { UserContext } from '../../contexts/UserContext';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const location = useLocation();
    const registrationSuccess = location.state?.registrationSuccess;
    const product = location.state?.product;
    const { showSnackbar } = useContext(SnackbarContext);
    const { isAuthenticated, login } = useContext(UserContext);

    useEffect(() => {
        if (registrationSuccess) {
            showSnackbar('Registration success', "success");
        }
    }, [registrationSuccess]);

    useEffect(() => {
        if (product != null && isAuthenticated) {
            navigate(`/products/${product}`)
        }
    }, [product]);


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        try {
            setIsSubmitting(true);
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password,
            });

            if (response.status == 200) {
                const expiryDuration = 60 * 60 * 1000;
                const expiryDate = new Date(Date.now() + expiryDuration);
                const formattedExpiryDate = expiryDate.toUTCString();
                document.cookie = `token=${response.data.token}; path=/; expires=${formattedExpiryDate}; Secure; SameSite=None`;
                login();
                if (product != null) {
                    navigate(`/products/${product}`)
                } else {
                    navigate('/', { state: { loginSuccessful: true } });
                }
            }

        } catch (err: any) {
            if (!err.response) {
                showSnackbar("No Server Response", "warning");
            } else if (err.response?.status === 400) {
                showSnackbar("Login Failed", "warning");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form id="docForm" className='shadow' onSubmit={handleSubmit}>
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