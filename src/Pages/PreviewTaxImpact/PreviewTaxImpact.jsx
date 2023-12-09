import React from 'react';

import { Box, Button, Container, Typography, useTheme } from '@mui/material';

import getbg from '../../images/getbg.png';
import Navigation from '../../Components/Navigation';

const PreviewTaxImpact = () => {
    const theme = useTheme();
    return (
        <Box sx={{ background: `url(${getbg})`, height: 'auto', backgroundSize: 'cover' }}>
            <Navigation />

            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 }, py: 3 }}>
                <Typography
                    sx={{
                        fontSize: { md: '30px', sm: '25px', xs: '20px' },
                        fontWeight: 800,
                        fontFamily: 'Orbitron',
                        color: `${theme.palette.text.darkblue}`,
                        textTransform: 'uppercase',
                    }}
                >
                    Preview Tax Impact
                </Typography>
                <Box mt={3} mb={6}>
                    <Button variant="btn1">beta</Button>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: { md: '17px', sm: '13px', xs: '11px' },
                            fontWeight: 400,
                            fontFamily: 'Poppins',
                            mt: 2,
                            color: `${theme.palette.text.lightbrown}`,
                        }}
                    >
                        If you are considering executing a set of transaction(s), use CoinTracker to
                        preview the tax impact beforehand:
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { md: '17px', sm: '13px', xs: '11px' },
                            fontWeight: 400,
                            fontFamily: 'Poppins',
                            mt: 2,
                            color: `${theme.palette.text.lightbrown}`,
                        }}
                    >
                        1 . Add manual transacion(s) capturing the set of transactions you are
                        considering executing
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { md: '17px', sm: '13px', xs: '11px' },
                            fontWeight: 400,
                            fontFamily: 'Poppins',
                            mt: 2,
                            color: `${theme.palette.text.lightbrown}`,
                        }}
                    >
                        2 . Wait for your cost basis to finish recomputing (reload the page until
                        the banner is gone)
                    </Typography>{' '}
                    <Typography
                        sx={{
                            fontSize: { md: '17px', sm: '13px', xs: '11px' },
                            fontWeight: 400,
                            fontFamily: 'Poppins',
                            mt: 2,
                            color: `${theme.palette.text.lightbrown}`,
                        }}
                    >
                        3 . View your list of transaction including the newly added transactions
                    </Typography>{' '}
                    <Typography
                        sx={{
                            fontSize: { md: '17px', sm: '13px', xs: '11px' },
                            fontWeight: 400,
                            fontFamily: 'Poppins',
                            mt: 2,
                            color: `${theme.palette.text.lightbrown}`,
                        }}
                    >
                        4 . For each of the new transactions, observe the chip next to it indicating
                        the capital gain or loss that is incurred
                    </Typography>
                    <Box
                        my={2}
                        sx={{
                            background:
                                'linear-gradient(180deg, rgba(11, 123, 196, 0.2) 0%, rgba(91, 172, 222, 0.2) 100%)',
                            padding: '1.5rem',
                            maxWidth: '691px',
                            width: '100%',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: { md: '17px', sm: '13px', xs: '11px' },
                                fontWeight: 600,
                                fontFamily: 'Poppins',
                                my: 1,
                                color: `${theme.palette.text.darkblue}`,
                            }}
                        >
                            For example
                        </Typography>
                        <Button variant="btn1">+$55.0 gain</Button>
                        <Typography
                            sx={{
                                fontSize: { md: '14px', sm: '12px', xs: '10px' },
                                fontWeight: 400,
                                fontFamily: 'Poppins',
                                mt: 1.5,
                                color: `${theme.palette.text.lightbrown}`,
                            }}
                        >
                            Indicates there is a capital gain on the transaction and will increase
                            your tax liability
                        </Typography>

                        <Box mt={4}>
                            <Button variant="btn1">-$55.0 gain</Button>
                            <Typography
                                sx={{
                                    fontSize: { md: '14px', sm: '12px', xs: '10px' },
                                    fontWeight: 400,
                                    fontFamily: 'Poppins',
                                    mt: 1.5,
                                    color: `${theme.palette.text.lightbrown}`,
                                }}
                            >
                                Indicates there is a capital loss on the transaction and will reduce
                                your tax liability
                            </Typography>
                        </Box>
                    </Box>
                    <Typography
                        sx={{
                            fontSize: { md: '17px', sm: '13px', xs: '11px' },
                            fontWeight: 400,
                            fontFamily: 'Poppins',
                            mt: 2,
                            color: `${theme.palette.text.lightbrown}`,
                        }}
                    >
                        5 . Once finished, delete the new transactions you have added to restore
                        your portfolio to its original state
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default PreviewTaxImpact;
