import React from 'react';
import Slide from '@mui/material/Slide';
import { Avatar, Box, Dialog, Grid, InputBase, Stack, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';

// import bg from '../../images/AddWallet/bg.png';
import walletcard from '../../images/AddWallet/walletcard.png';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function WalletsDialog({ handleWallet, wallet, handleAddWallet }) {
    return (
        <div>
            <Dialog
                open={wallet}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleWallet}
                sx={{
                    '& .MuiPaper-root': {
                        bgcolor: 'red',
                        // background: `url(${bg})`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        borderRadius: '50px',
                        maxWidth: '900px',
                        px: { xs: 3, sm: 7, md: 10 },
                        py: { xs: 5, sm: 7, md: 10 },
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Box
                    sx={{
                        boxSizing: 'border-box',
                        py: 1,
                    }}
                >
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            fontSize: { xs: '17px', sm: '22px' },
                            lineHeight: '22px',
                            textTransform: 'uppercase',
                            color: '#FFFFFF',
                        }}
                    >
                        Add wallet
                    </Typography>
                    <Stack
                        direction="row"
                        alignItems="center"
                        sx={{
                            border: '1px solid #fff',
                            borderRadius: '10px',
                            color: '#fff',
                            px: { xs: 1, sm: 2 },
                            py: { xs: 0, sm: 1 },
                            my: { xs: 2, sm: 3, md: 5 },
                        }}
                    >
                        <SearchIcon sx={{ fontSize: { xs: '26px', sm: '32px' } }} />
                        <InputBase
                            sx={{
                                width: '90%',
                                fontSize: '15px',
                                '& input': {
                                    color: '#fff',
                                    '&::placeholder': { color: '#fff' },
                                },
                            }}
                            placeholder="Search for your integration or paste your public address, HD wallet key, or ENS "
                        />
                    </Stack>
                    <Box
                        sx={{
                            boxSizing: 'border-box',
                            px: { xs: 2, sm: 0 },
                            overflow: 'auto',
                            '&::-webkit-scrollbar': {
                                width: '1px',
                            },
                            '&::-webkit-scrollbar-track': {
                                '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#ffffff',
                                outline: '2px solid #ffffff',
                                borderRadius: '10px',
                            },
                        }}
                    >
                        <Grid
                            container
                            rowSpacing={2}
                            columnSpacing={2}
                            sx={{ maxHeight: '50vh !important', px: { xs: 0, sm: 1, md: 2 } }}
                        >
                            <Grid item xs={6} sm={4} md={3}>
                                <Stack
                                    direction="row"
                                    gap={{ xs: 1, sm: 2 }}
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{
                                        background: `url(${walletcard})`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        width: '100%',
                                        // px: { xs: 0, sm: 1, md: 2 },
                                        py: 1,
                                        pr: 1,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        handleAddWallet();
                                        handleWallet();
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: {
                                                xs: '20px',
                                                sm: '30px',
                                                md: '35px',
                                                lg: '45px',
                                            },
                                            height: {
                                                xs: '20px',
                                                sm: '30px',
                                                md: '35px',
                                                lg: '45px',
                                            },
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: { xs: '8px', sm: '12px' },
                                            lineHeight: '18px',
                                            color: '#F1F0F0',
                                        }}
                                    >
                                        Metamask
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} sm={4} md={3}>
                                <Stack
                                    direction="row"
                                    gap={{ xs: 1, sm: 2 }}
                                    justifyContent="center"
                                    alignItems="center"
                                    sx={{
                                        background: `url(${walletcard})`,
                                        backgroundSize: '100% 100%',
                                        backgroundPosition: 'center center',
                                        backgroundRepeat: 'no-repeat',
                                        width: '100%',
                                        // px: { xs: 0, sm: 1, md: 2 },
                                        py: 1,
                                        pr: 1,
                                        cursor: 'pointer',
                                    }}
                                    onClick={() => {
                                        handleAddWallet();
                                        handleWallet();
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: {
                                                xs: '20px',
                                                sm: '30px',
                                                md: '35px',
                                                lg: '45px',
                                            },
                                            height: {
                                                xs: '20px',
                                                sm: '30px',
                                                md: '35px',
                                                lg: '45px',
                                            },
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            fontFamily: 'Poppins',
                                            fontStyle: 'normal',
                                            fontWeight: '500',
                                            fontSize: { xs: '8px', sm: '12px' },
                                            lineHeight: '18px',
                                            color: '#F1F0F0',
                                        }}
                                    >
                                        Coinbase
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Dialog>
        </div>
    );
}
