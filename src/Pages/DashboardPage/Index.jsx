import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Profile from './Profile';
import cryptocard from '../../images/dashboard/cryptocard.png';
import dashboardbg from '../../images/dashboard/dashboardbg.png';
import YourAssets from './YourAssets';
import Navigation from '../../Components/Navigation';

export default function Index() {
    return (
        <>
            <Navigation />
            <Box
                sx={{
                    background: `url(${dashboardbg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center center',
                    width: '100%',
                }}
            >
                <Box px={{ xs: 1, sm: 1, md: 11 }}>
                    <Grid container spacing={{ xs: 3, md: 5 }}>
                        <Grid item xs={12} md={7.5}>
                            <Profile />
                        </Grid>
                        <Grid item xs={12} md={4.5}>
                            <Box>
                                <Stack direction="row" justifyContent="end" gap={4} mb={5}>
                                    <Button
                                        variant="btn2"
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        Add wallet
                                    </Button>
                                    <Button
                                        variant="btn1"
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                        }}
                                    >
                                        Tax Center
                                    </Button>
                                </Stack>
                                <Box
                                    sx={{
                                        background: `url(${cryptocard})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center center',
                                        width: '100%',
                                        py: 5,
                                        px: { xs: 4, sm: 6, md: 4 },
                                    }}
                                >
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography
                                            sx={{
                                                fontFamily: 'Orbitron',
                                                fontStyle: 'normal',
                                                fontWeight: '800',
                                                fontSize: '14px',
                                                lineHeight: '22px',
                                                textAlign: 'center',
                                                textTransform: 'uppercase',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            Crypto taxes
                                        </Typography>
                                        <Typography
                                            sx={{
                                                width: 'max-content',
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '13px',
                                                lineHeight: '16px',
                                                textAlign: 'center',
                                                color: '#FFFFFF',
                                                borderBottom: '1px solid #FFFFFF',
                                            }}
                                        >
                                            See details
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" mt={5}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            Tax year
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            Gains
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            Income
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" mt={5}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                                textAlign: 'center !important',
                                            }}
                                        >
                                            2023
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            +PKR4****
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            PKR0.00
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" mt={5}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            2022
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            +PKR4****
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            PKR0.00
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" justifyContent="space-between" mt={5}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '15px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            2021
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '400',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                                textAlign: 'center',
                                            }}
                                        >
                                            +PKR4****
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '700',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#FFFFFF',
                                            }}
                                        >
                                            PKR0.00
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 15 } }}>
                    <YourAssets />
                </Container>
            </Box>
        </>
    );
}
