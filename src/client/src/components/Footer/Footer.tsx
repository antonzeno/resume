import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer() {
    return (
        <AppBar position="static" className='bg-dark' sx={{ marginTop: 'auto' }}>
            <Container maxWidth="xl">
                <Typography variant="body1" align="center" sx={{ py: 2, color: 'white' }}>
                    &copy; Made with ❤️ by Anton Z. All Rights Reserved.
                </Typography>
            </Container>
        </AppBar>
    );
}

export default Footer;
