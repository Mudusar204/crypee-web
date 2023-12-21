import React from 'react';

import { Box, Container, Typography, useTheme } from '@mui/material';

import getbg from '../../images/getbg.png';
import Header from '../../Components/Header';

const Aboutus = () => {  
    const theme = useTheme();
    return (
        <Box sx={{ background: `url(${getbg})`, height: 'auto', backgroundSize: 'cover' }}>
            <Header/>

            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 }, py: 3 }}>
                <Typography
                   py={2.5}
                   sx={{
                       fontSize: { md: '20px', sm: '15px', xs: '14px' },
                       fontWeight: 800,
                       fontFamily: 'Gmarket',
                       color: `${theme.palette.text.darkblue}`,
                       textTransform: 'uppercase',
                   }}
                >
                    About Us
                </Typography>

                <Box>
                    <Box width={{ xs: '100%', sm: '100%', md: '770px', lg: '750px' }}>
                        <Typography
                            sx={{
                                fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                                fontWeight: 400,
                                fontFamily: 'Gmarket',
                                color: `${theme.palette.text.lightbrown}`,
                                lineHeight: '22.5px',
                            }}
                        >
                            Welcome to Crypee, where we are changing the game for cryptocurrency
                            users. Our goal is simple: we want to make it easy for you to grow your
                            cryptocurrency wealth, handle your taxes, and optimize your investments.
                        </Typography>
                    </Box>
                    <Typography
                        my={2}
                        sx={{
                            fontSize: { md: '20px', sm: '15px', xs: '14px' },
                            fontWeight: 800,
                            fontFamily: 'Gmarket',
                            color: `${theme.palette.text.darkblue}`,
                            textTransform: 'uppercase',
                        }}
                    >
                        Our Story
                    </Typography>
                    <Box width={{ xs: '100%', sm: '100%', md: '770px', lg: '780px' }}>
                        <Typography
                            sx={{
                                fontSize: { lg: '14px', sm: '13px', xs: '12px', md: '14px' },
                                    fontWeight: 400,
                                    fontFamily: 'Gmarket',
                                    color: `${theme.palette.text.lightbrown}`,
                                    lineHeight: '22.5px',
                            }}
                        >
                            At Crypee, we are a group of cryptocurrency enthusiasts who wanted to
                            avoid the confusing and daunting experience that comes with managing
                            cryptocurrencies. We realized that there we are not any easy-to-use
                            tools out there, so we decided to create them ourselves.
                            <br></br> Our journey started with a vision – to build a platform that
                            simplifies everything about cryptocurrency for you. We have worked
                            tirelessly to make it happen. Today, we are excited to offer you a set
                            of tools that will help you manage your cryptocurrency like a pro.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Aboutus;
