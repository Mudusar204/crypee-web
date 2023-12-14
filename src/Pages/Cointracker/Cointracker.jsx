import React from 'react';

import { Box, Button, Container, Grid, Typography } from '@mui/material';

import trackerbg from '../../images/trackerbg.png';
import signinbg from './../../images/signinbg.png';
import logo2 from './../../images/logo2.png';
import Header from '../../Components/Header';

const Cointracker = () => {
    return (
        <Box
            sx={{
                background: `url(${signinbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                backgroundPosition: 'top center',
            }}
        >
            <Header />
            <Container maxWidth="lg">
                <Box pt={{ md: 15, xs: 4 }}>
                    <Grid container spacing={{ md: 0, xs: 2 }}>
                        <Grid item md={6} xs={12} mx="auto">
                            <Box
                                sx={{
                                    background: `url(${trackerbg})`,
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    height: 'auto',
                                    padding: {
                                        md: '3rem 6rem ',
                                        sm: '3rem 4rem ',
                                        xs: '2rem 2rem',
                                    },
                                    // padding: '3rem 6rem',
                                }}
                            >
                                <Box textAlign="center">
                                    <Box
                                        component="img"
                                        src={logo2}
                                        alt="logo2"
                                        maxWidth="137px"
                                        width="100%"
                                    />
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 800,
                                        fontSize: '30px',
                                        textAlign: 'center',
                                        color: '#ffffff',
                                        mt: 3,
                                    }}
                                >
                                    Log in
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 400,
                                        fontSize: '13px',
                                        textAlign: 'center',
                                        color: '#ffffff',
                                        mt: 1,
                                    }}
                                >
                                    Faster with fingerprint or face recognition
                                    <br />
                                    Log in quickly and securely using this device’s fingerprint or
                                    facial recognition.
                                </Typography>
                                <Box mt={4}>
                                    <Button variant="btn1" fullWidth sx={{ py: 2 }}>
                                        Continue
                                    </Button>
                                </Box>
                                <Box mt={4}>
                                    <Button variant="btn3" fullWidth sx={{ py: 2 }}>
                                        Remind me later
                                    </Button>
                                </Box>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        textAlign: 'center',
                                        color: '#ffffff',
                                        mt: 3,
                                    }}
                                >
                                    Not on this device
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 400,
                                        fontSize: '11px',
                                        textAlign: 'center',
                                        color: '#ffffff',
                                        mt: 3,
                                    }}
                                >
                                    When you create a crypee(Tax Software) account, you agree to the
                                    Terms and Privacy Policy.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Cointracker;
