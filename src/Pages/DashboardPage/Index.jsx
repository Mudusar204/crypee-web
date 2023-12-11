import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Profile from './Profile';
import cryptocard from '../../images/dashboard/cryptocard.png';
import dashboardbg from '../../images/dashboard/dashboardbg.png';
import YourAssets from './YourAssets';
import Navigation from '../../Components/Navigation';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { styled } from '@mui/styles';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const rtransactiondata = [
    {
        title1: 'Received',
        title2: '15 mins ago',
        title1value: '$20,012.64',
        title2value: '$2.242.31',
        icon1: <ArrowDownwardIcon />,
        style: {
            background: '#D8EDFF',
            width: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 1,
            borderRadius: '3px',
        },
    },
    {
        title1: 'Send',
        title2: '15 mins ago',
        title1value: '$20,012.64',
        title2value: '$2.242.31',
        icon1: <ArrowUpwardIcon />,
        style: {
            background: '#D8EDFF',
            width: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 1,
            borderRadius: '3px',
        },
    },
    {
        title1: 'Traded',
        title2: '20 mins ago',
        title1value: '$20,012.64',
        title2value: '$2.242.31',
        icon1: <CompareArrowsIcon />,
        style: {
            background: '#D8EDFF',
            width: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 1,
            borderRadius: '3px',
        },
    },
    {
        title1: 'Received Gift',
        title2: 'Feb 21 2020',
        title1value: '$20,012.64',
        title2value: '$$2.242.31',
        icon1: <CardGiftcardIcon/>,
        style: {
            background: '#D8EDFF',
            width: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            py: 1,
            borderRadius: '3px', 
        },
    },
];

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
                <Container
                    sx={{
                        borderRadius: '15px',
                        background: 'white',
                        boxSizing: 'border-box',
                        boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                        my:6
                    }}
                >
                    <Grid container spacing={{ xs: 3, md: 5 }} px={3} py={3}>
                        <Grid item xs={12} md={8.5}>
                            <Profile/>
                        </Grid>
                        <Grid item xs={12} md={3.5}>
                            <Box>
                                <Stack direction="row" justifyContent="center" gap={5} mb={5}>
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
                                        background: 'white',
                                        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '15px',
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
                                                fontSize: '11px',
                                                lineHeight: '22px',
                                                textAlign: 'center',
                                                textTransform: 'uppercase',
                                                color: '#333',
                                            }}
                                        >
                                            Crypto taxes
                                        </Typography>
                                        <Typography
                                            sx={{
                                                width: 'max-content',
                                                fontFamily: 'Gmarket Sans TTF',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                textAlign: 'center',
                                                color: '#333',
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
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#333',
                                            }}
                                        >
                                            Tax year
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#333',
                                            }}
                                        >
                                            Cap.gains
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                color: '#333',
                                            }}
                                        >
                                            Tax.Income
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
                                                color: '#333',
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
                                                color: '#333',
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
                                                color: '#333',
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
                                                color: '#333',
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
                                                color: '#333',
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
                                                color: '#333',
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
                                                color: '#333',
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
                                                color: '#333',
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
                                                color: '#333',
                                            }}
                                        >
                                            PKR0.00
                                        </Typography>
                                    </Stack>
                                </Box>

                                {/* -----recent-------- */}
                                <Box
                                    sx={{
                                        my:3,
                                        background: 'white',
                                        boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '15px',
                                        py: 1,
                                        px: { xs: 4, sm: 6, md: 4 },
                                    }}
                                >
                                    <Stack direction="row" justifyContent="space-between" py={3}>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Orbitron',
                                                fontStyle: 'normal',
                                                fontWeight: '800',
                                                fontSize: '11px',
                                                lineHeight: '22px',
                                                textAlign: 'center',
                                                textTransform: 'uppercase',
                                                color: '#333',
                                            }}
                                        >
                                            Recent Transactions
                                        </Typography>
                                        <Typography
                                            sx={{
                                                width: 'max-content',
                                                fontFamily: 'Gmarket Sans TTF',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '14px',
                                                lineHeight: '16px',
                                                textAlign: 'center',
                                                color: '#333',
                                                borderBottom: '1px solid #FFFFFF',
                                            }}
                                        >
                                            See details
                                        </Typography>
                                    </Stack>
                                    {rtransactiondata.map((transaction,index)=>
                                       <Box key={index} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                       <Box display={'flex'} gap='10px' my={1}>
                                           <Box sx={transaction.style}>{transaction.icon1}</Box>
                                           <Stack>
                                               <Typography fontSize={'13px'} fontWeight={500}>{transaction.title1}</Typography>
                                               <Typography fontSize={'10px'} fontWeight={300}>{transaction.title2}</Typography>
                                           </Stack>
                                       </Box>
                                       <Stack>
                                           <Typography fontSize={'13px'} fontWeight={700}>{transaction.title1value}</Typography>
                                           <Typography fontSize={'10px'} fontStyle={'normal'} fontWeight={300}>{transaction.title2value}</Typography>
                                       </Stack>
                                   </Box>
                                    )}
                                  
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>


                 
                </Container>
                <Container  sx={{
                    boxShadow:"0px 0px 60px 0px rgba(0, 0, 0, 0.05)",
                    background:'white',
                    borderRadius:'15px',
                    width: '100%',
                    py: { xs: 5, md: 5 },
                    px: { xs: 2, sm: 5, md: 3 },
                    my: { xs: 5, md: 8 },
                }} >
                    <YourAssets />
                </Container>
            </Box>
        </>
    );
}
