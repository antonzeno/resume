import React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple, blue } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';

const showcase = require('../../assets/showcase.gif');

const Home = () => {
    const navigate = useNavigate();

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        padding: 10,
        paddingRight: 25,
        paddingLeft: 25,
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[700],
        },
    }));

    return (
        <>
            <div className="app-header center-container text-center">
                <div className="container">
                    <div className="small fw-bold">DocBuilder Hub</div>
                    <h1 className='fw-bold'>Create Your RÉSUMÉ and More</h1>
                    <p>Crafting professional documents has never been easier. Whether it's resumes, certificates, cover letters, or invoices, our Document Builder is designed to meet your needs. Let us handle the details while you focus on your expertise.</p>
                    <ColorButton variant="contained" onClick={() => navigate('/products')}>Get Started</ColorButton>
                    <p>It's free to try.</p>
                </div>
            </div>

            <img
                src={showcase}
                alt="Showcase"
                style={{ width: '100vw', height: '100%', objectFit: 'cover', overflow: 'hidden' }}
                className='m-0'
            />
        </>);
}

export default Home;