import React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple, blue } from '@mui/material/colors';
const showcase = require('../../assets/showcase.gif');

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});


const Home = () => {

    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        padding: 10,
        paddingRight: 25,
        paddingLeft: 25,
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));

    return (
        <>
            <div className="app-header d-flex align-items-center justify-content-center  text-center">
                <div className="container">
                    <div className="small fw-bold">Online Resume creator.</div>
                    <h1 className='fw-bold'>RÉSUMÉ</h1>
                    <p>Crafting the perfect resume isn't everyone's cup of tea. <br />That's perfectly fine. Introducing our Resume Writer, designed just for you. Let us do the heavy lifting while you focus on what you do best.</p>
                    <ColorButton variant="contained">Create your RÉSUMÉ</ColorButton>
                    <p>Its free to try.</p>

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