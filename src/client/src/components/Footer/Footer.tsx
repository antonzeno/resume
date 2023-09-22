import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <AppBar position="static" className='bg-light text-dark' sx={{ marginTop: 'auto' }}>
            <Container maxWidth="xl" className='d-flex justify-content-between'>
                <Typography variant="body1" align="left" sx={{ py: 2 }}>
                    &copy; Made with ❤️ by Anton Z. All Rights Reserved.
                </Typography>
                <Typography variant="body1" align="right" sx={{ py: 2 }}>
                    <a href="https://www.linkedin.com/in/antonzeno" target='_blank' className='mx-1'><FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '26px', color: '#0E76A8' }} /></a>
                    <a href="https://github.com/antonzeno" target='_blank' className='mx-1'><FontAwesomeIcon icon={faGithub} style={{ fontSize: '26px', color: 'grey' }} /></a>
                </Typography>
            </Container>
        </AppBar>
    );
}

export default Footer;
