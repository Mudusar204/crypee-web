import React from 'react';

import { Box, Button, Container, Grid, Typography, useTheme } from '@mui/material';

import heroright from '../../images/heroright.png';
import cointracker from '../../images/cointracker.png'
import herobg from '../../images/herobg.png';
import Header from '../../Components/Header';
import Navigation from '../../Components/Navigation';

const Herosection = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                background: `url(${herobg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
            }}
            py={1}
        >
            {/* <Header /> */}
            <Navigation/>
            <Box>
                <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 8 }, py: 5 }}>
                    <Grid
                        container
                        spacing={2}
                        alignItems="center"
                        justifyContent="center"
                        sx={{ minHeight: '50vh' }}
                    >
                        <Grid item xs={12} md={6}>
                            <Box height="100%">
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 700,
                                        fontSize: { lg: '50px', sm: '35px', xs: '20px',md:'35px' },
                                        color: `${theme.palette.text.darkblue}`,
                                        textTransform: 'uppercase',
                                        mb: 0.5,
                                    }}
                                >
                                    Crypto & NFT  Taxes <br/> done fast
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { md: '16px', xs: '13px' },
                                        mb: 3,
                                        fontFamily: 'Gmarket',
                                        color: `${theme.palette.text.lightbrown}`,
                                    }}
                                >
                                    Easily sync wallets and generate tax forms trusted by 1 million+
                                    users
                                </Typography>
                                <Button
                                    variant="btn1"
                                    sx={{
                                        padding: { md: '0.7rem 2rem', xs: '0.5rem 1rem' },
                                    }}
                                >
                                    Try it free
                                </Button>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12} height="100%">
                            <Box textAlign="end">
                                <img src={cointracker} alt="heroright" width="90%" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Herosection;
