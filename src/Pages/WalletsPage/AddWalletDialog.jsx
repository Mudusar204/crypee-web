import React from 'react';
import {
    Box,
    Button,
    Dialog,
    IconButton,
    InputBase,
    Slide,
    Stack,
    // TextField,
    Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ClearIcon from '@mui/icons-material/Clear';

import bg from '../../images/AddWallet/bg.png';
import chainIcon from '../../images/AddWallet/CoinBaseWallet.svg';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function AddWalletDialog({ handleAddWallet, AddWallet, handleWallet }) {
    return (
        <Box>
            <Dialog
                open={AddWallet}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleAddWallet}
                sx={{
                    '& .MuiPaper-root': {
                        background: `url(${bg})`,
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center center',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        borderRadius: '50px',
                        maxWidth: '500px',
                        px: { xs: 4, sm: 5, md: 5 },
                        py: { xs: 5, sm: 5, md: 5 },
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Box
                    sx={{
                        overflow: 'auto',
                        '&::-webkit-scrollbar': {
                            width: '1px',
                        },
                        '&::-webkit-scrollbar-track': {
                            '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: '#ffffff',
                            outline: '2px solid white',
                            borderRadius: '10px',
                        },
                        pr: 1,
                    }}
                >
                    <Stack
                        direction="row"
                        gap={2}
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Stack direction="row" gap={3} alignItems="center">
                            <IconButton
                                onClick={() => {
                                    handleWallet();
                                    handleAddWallet();
                                }}
                            >
                                <ArrowBackIosNewIcon sx={{ color: '#047DCB', fontSize: '28px' }} />
                            </IconButton>
                            <Stack direction="row" gap={1} alignItems="center">
                                <img src={chainIcon} alt="" />
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: '18px',
                                        lineHeight: '18px',
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Add Coinbase Wallet
                                </Typography>
                            </Stack>
                        </Stack>
                        <IconButton onClick={() => handleAddWallet()}>
                            <ClearIcon sx={{ color: '#047DCB', fontSize: '28px' }} />
                        </IconButton>
                    </Stack>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: { xs: '9px', sm: '12px' },
                            lineHeight: '17px',
                            color: '#FFFFFF',
                            my: 3,
                        }}
                    >
                        We are only requesting view permissions. This does not give us access to
                        your private keys nor the ability move your funds.
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: { xs: '10px', sm: '12px' },
                            lineHeight: '17px',
                            color: '#FFFFFF',
                            my: 2,
                        }}
                    >
                        Public addresses & xPubs
                    </Typography>
                    <InputBase
                        multiline
                        maxRows={2}
                        minRows={2}
                        placeholder="Public your addresses & xPubs here"
                        sx={{
                            border: '1px solid #FFFFFF',
                            width: '100%',
                            color: '#fff',
                            p: '12px 18px',
                        }}
                    />
                    <Button
                        variant="btn1"
                        sx={{
                            width: '226px',
                            height: '52px',
                            fontSize: '16px',
                            my: 3,
                            display: 'flex',
                            mx: 'auto',
                        }}
                    >
                        Add Coinbase Wallet
                    </Button>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '17px',
                            color: '#0D80C9',
                            my: 1,
                        }}
                    >
                        How to add your Coinbase wallet
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            fontSize: '12px',
                            lineHeight: '18px',
                            color: '#ffffff',
                            mb: 2,
                        }}
                    >
                        Export your public addresses & xPubs from Coinbase Wallet to add Supported
                        chains to CoinTracker, including Arbitrum, Avalanche, Bitcoin, BNB Chain,
                        Dogecoin, Ethereum, Fantom, Litecoin, Optimism, Polygon, and Solana.To add
                        your public addresses & xPubs to CoinTracker:
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '12px',
                            lineHeight: '17px',
                            color: '#0D80C9',
                            my: 1,
                        }}
                    >
                        Mobile or browser extension
                    </Typography>
                    <Box
                        component="ol"
                        sx={{
                            listStylePosition: 'inside',
                            p: '0px',
                            color: '#fff',
                            '& li': {
                                mb: 2,
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '12px',
                                lineHeight: '18px',
                            },
                        }}
                    >
                        <li>
                            In Coinbase Wallet, switch to/click on the Settings tab (gear icon in
                            bottom right).
                        </li>
                        <li>
                            On the Export public addresses screen, copy your public addresses and
                            xPubs to your clipboard.Note: If you don&apos;t see the Export public
                            addresses option, please update to the latest version of Coinbase
                            Wallet, or follow these steps to add your public addresses individually.
                        </li>
                        <li>Paste the above into CoinTracker.</li>
                        <li>
                            Submitting may take a moment while CoinTracker adds all of your
                            addresses. Addresses for all supported blockchains (including Ethereum,
                            Bitcoin, Polygon, Litecoin, Dogecoin, and Solana) will be added, so you
                            do not have to repeat these steps for every blockchain.
                        </li>
                    </Box>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '12px',
                            lineHeight: '17px',
                            color: '#0D80C9',
                            mt: 3,
                        }}
                    >
                        Special instructions for BCH, ETC, XLM, or XRP transactions.
                    </Typography>
                </Box>
            </Dialog>
        </Box>
    );
}
