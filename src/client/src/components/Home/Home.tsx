import React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { purple, blue } from '@mui/material/colors';
const showcase = require('../../assets/showcase.gif');

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
            <div className="app-header center-container text-center">
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