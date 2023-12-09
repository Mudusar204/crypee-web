import { Box, Container, Grid } from '@mui/material';
import React from 'react';

import wcard1 from '../../images/wallets/wcard1.png';
import wcard2 from '../../images/wallets/wcard2.png';
import wcard3 from '../../images/wallets/wcard3.png';
import wcard4 from '../../images/wallets/wcard4.png';

export default function WalletsCard() {
    return (
        <Box sx={{ px: { xs: 5, sm: 10 }, my: { xs: 5, md: 10 } }}>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        fontFamily: 'Orbitron',
                        fontStyle: 'normal',
                        fontWeight: '800',
                        fontSize: { xs: '25px', md: '30px' },
                        lineHeight: '22px',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        color: '#0B7BC4',
                        my: { xs: 5, md: 10 },
                    }}
                >
                    Wallets
                </Box>
                <Grid container rowSpacing={{ xs: 6, sm: 10 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                background: `url(${wcard1})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center center',
                                width: '100%',
                                pt: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    mb: 3,
                                }}
                            >
                                EXCHANGES
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '11px',
                                    lineHeight: '18px',
                                    textAlign: 'center',
                                    color: '#585858',
                                    pb: 6,
                                }}
                            >
                                None added
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            mt={{ xs: 0, sm: -2 }}
                            ml={{ xs: 0, sm: -2 }}
                            sx={{
                                background: `url(${wcard2})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center center',
                                width: '100%',
                                py: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    mb: 3,
                                }}
                            >
                                CRYPTO WALLETS
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '11px',
                                    lineHeight: '14px',
                                    textAlign: 'center',
                                    width: '50%',
                                    mx: 'auto',
                                    color: '#585858',
                                    pb: 1,
                                }}
                            >
                                Ethereum Wallet ...0e85ea Updated 16 hours ago
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '11px',
                                    lineHeight: '14px',
                                    textAlign: 'center',
                                    color: '#585858',
                                    pb: 2,
                                }}
                            >
                                PKR 304450
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            ml={{ xs: 0, md: -4 }}
                            sx={{
                                background: `url(${wcard3})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center center',
                                width: '100%',
                                pt: 3,
                            }}
                        >
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    mb: 3,
                                }}
                            >
                                IMPORTED WALLETS
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '11px',
                                    lineHeight: '18px',
                                    textAlign: 'center',
                                    color: '#585858',
                                    pb: 6,
                                }}
                            >
                                None added
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            mt={{ xs: 0, sm: -2 }}
                            ml={{ xs: 0, sm: -2, md: -5 }}
                            sx={{
                                background: `url(${wcard4})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center center',
                                width: '100%',
                                py: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: '12px',
                                    lineHeight: '18px',
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    mb: 3,
                                }}
                            >
                                OTHER TRANSACTIONS
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '400',
                                    fontSize: '11px',
                                    lineHeight: '14px',
                                    textAlign: 'center',
                                    width: '50%',
                                    mx: 'auto',
                                    color: '#585858',
                                    pb: 1,
                                }}
                            >
                                Other transactions
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '600',
                                    fontSize: '11px',
                                    lineHeight: '14px',
                                    textAlign: 'center',
                                    color: '#585858',
                                    pb: 4,
                                }}
                            >
                                PKR 0.00
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
