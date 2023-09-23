import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { Alert, AlertColor, Button, CircularProgress, Snackbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Register.css';
import { isEmpty } from 'lodash';
import { SnackbarContext } from '../../contexts/SnackbarContext';

const Register = () => {

    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const [validPassword2, setValidPassword2] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { showSnackbar } = useContext(SnackbarContext);

    useEffect(() => {
        const USERNAME_REGEX = /^[A-Za-z0-9_]{6,}$/;
        setValidUsername(USERNAME_REGEX.test(username));
    }, [username]);

    useEffect(() => {
        const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email]);

    useEffect(() => {
        const PWD_REGEX = /^[A-Za-z0-9_]{8,}$/;
        setValidPassword(PWD_REGEX.test(password));
        setValidPassword2(!isEmpty(password) && !isEmpty(password2) && password === password2);

    }, [password, password2]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validUsername) {
            showSnackbar('Username must be at least 6 characters.', 'warning')
            return;
        }

        if (!validPassword) {
            showSnackbar('Passwords must be at least 8 characters.', 'warning')
            return;
        }

        if (!validPassword2) {
            showSnackbar('Passwords do not match.', 'warning')
            return;
        }
        try {
            setIsSubmitting(true);
            const response = await axios.post('http://localhost:8000/api/register', {
                email,
                password,
                username,
            });

            if (response.status === 200) {
                setUsername("");
                setEmail("");
                setPassword("");
                setPassword2("");
                navigate('/login', { state: { registrationSuccess: true } });
            }

        } catch (err: any) {
            if (!err.response) {
                showSnackbar("No Server Response", "warning");
            } else if (err.response?.status === 409) {
                showSnackbar("User is already registered", "warning");
            } else {
                showSnackbar("Registration Failed", "warning");
            }
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <form id="authForm" className='shadow mb-3' onSubmit={handleSubmit}>
            <h2 id="headerTitle">Register</h2>
            <div>
                <div className="row">
                    <label>Username <FontAwesomeIcon icon={faCheck} className={validUsername ? "d-inline" : "d-none"} /></label>
                    <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="row">
                    <label>Email <FontAwesomeIcon icon={faCheck} className={validEmail ? "d-inline" : "d-none"} /></label>
                    <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="row">
                    <label>Password <FontAwesomeIcon icon={faCheck} className={validPassword ? "d-inline" : "d-none"} /></label>
                    <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="row">
                    <label>Repeat password <FontAwesomeIcon icon={validPassword2 ? faCheck : faTimes} className={!isEmpty(password2) ? "d-inline" : "d-none"} /></label>
                    <input type="password" placeholder="Enter your password" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                </div>
                <div id="button" className="row">
                    <Button variant="contained" color="primary" type='submit' disabled={isSubmitting}>
                        {isSubmitting ? <CircularProgress size="sm" color='secondary' /> : 'Register'}
                    </Button>
                </div>
                <div className='row pb-4'>
                    Already have an account?
                    <a href="/login" role='button' className='text-center' onClick={(e) => {
                        e.preventDefault();
                        navigate('/login');
                    }}
                    >
                        Login
                    </a>
                </div>
            </div>
        </form>
    );
}

export default Register;