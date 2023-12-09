import React, { useState } from 'react';
import { Avatar, Box, Button, Container, Grid, Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import bg from '../../images/dashboard/assertsbg.png';
import nft from '../../images/wallets/linknft.png';
import eth from '../../images/wallets/eth.png';
import obot from '../../images/wallets/obot.png';
import gns from '../../images/wallets/gns.png';
import usdt from '../../images/wallets/usdt.png';
import WalletsDialog from './WalletsDialog';
import AddWalletDialog from './AddWalletDialog';

const data = [
    {
        img: eth,
        name: 'ETH',
        subName: '174 Transactions',
        value: 'PKR755.20 ',
        subValue: '0.00176896 DEP',
    },
    {
        img: obot,
        name: 'ETH',
        subName: '174 Transactions',
        value: 'PKR755.20 ',
        subValue: '0.00176896 DEP',
    },
    {
        img: gns,
        name: 'ETH',
        subName: '174 Transactions',
        value: 'PKR755.20 ',
        subValue: '0.00176896 DEP',
    },
    {
        img: usdt,
        name: 'ETH',
        subName: '174 Transactions',
        value: 'PKR755.20 ',
        subValue: '0.00176896 DEP',
    },
    {
        img: eth,
        name: 'ETH',
        subName: '174 Transactions',
        value: 'PKR755.20 ',
        subValue: '0.00176896 DEP',
    },
    {
        img: obot,
        name: 'ETH',
        subName: '174 Transactions',
        value: 'PKR755.20 ',
        subValue: '0.00176896 DEP',
    },
    {
        img: gns,
        name: 'ETH',
        subName: '174 Transactions',
        value: 'PKR755.20 ',
        subValue: '0.00176896 DEP',
    },
];

export default function Walletslist() {
    const [wallet, setwallet] = useState(false);
    const [addWallet, setAddWallet] = useState(false);
    const handleWallet = () => {
        setwallet((preState) => !preState);
    };
    const handleAddWallet = () => {
        setAddWallet((preState) => !preState);
    };
    return (
        <Box>
            <AddWalletDialog
                handleWallet={handleWallet}
                AddWallet={addWallet}
                handleAddWallet={handleAddWallet}
            />
            <WalletsDialog
                wallet={wallet}
                handleWallet={handleWallet}
                handleAddWallet={handleAddWallet}
            />
            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 } }}>
                <Stack direction="row" gap={5} pt={0}>
                    <Button
                        variant="btn2"
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '24px',
                            p: { xs: '5px 15px', sm: '10px 20px' },
                        }}
                    >
                        Sync wallet
                    </Button>
                    <Button
                        variant="btn1"
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '24px',
                            p: { xs: '5px 15px', sm: '10px 20px' },
                        }}
                        onClick={() => handleWallet()}
                    >
                        Add wallet
                    </Button>
                </Stack>
                <Box
                    sx={{
                        background: `url(${bg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center center',
                        width: '100%',
                        my: { xs: 3, md: 5 },
                        px: { xs: 3, sm: 5, md: 7 },
                        py: { xs: 5, sm: 7, md: 10 },
                    }}
                >
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        flexWrap="wrap"
                        gap={2}
                        mb={5}
                    >
                        <Stack direction="row" gap={{ xs: 2, md: 5 }} flexWrap="wrap">
                            <Box>
                                <Box
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: '600',
                                        fontSize: { xs: '14px', sm: '17px' },
                                        lineHeight: '18px',
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Ethereum Wallet ...0e85ea
                                </Box>
                                <Box
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: '400',
                                        fontSize: '10px',
                                        lineHeight: '18px',
                                        color: '#FFFFFF',
                                    }}
                                >
                                    Updated 17 hours ago
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '500',
                                    fontSize: '15px',
                                    lineHeight: '18px',
                                    color: '#0D6BA8',
                                    display: 'flex',
                                    gap: 1,
                                    alignItems: 'start',
                                }}
                            >
                                <img src={nft} alt="" /> NFT center
                            </Box>
                        </Stack>
                        <Box
                            sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '15px',
                                lineHeight: '18px',
                                color: '#F1F0F0',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            PKR528,325.22 <ArrowDropDownIcon />
                        </Box>
                    </Stack>
                    <Grid container spacing={5}>
                        {data.map((item, i) => (
                            <Grid key={i} item xs={12} md={6}>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    width={{ xs: '100%', md: '80%' }}
                                >
                                    <Stack direction="row" gap={1}>
                                        <Avatar
                                            src={item.img}
                                            sx={{
                                                width: { xs: 30, sm: 40 },
                                                height: { xs: 30, sm: 40 },
                                            }}
                                        />
                                        <Box>
                                            <Box
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: '600',
                                                    fontSize: '14px',
                                                    lineHeight: '18px',
                                                    color: '#F1F0F0',
                                                }}
                                            >
                                                {item.name}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '10px',
                                                    lineHeight: '18px',
                                                    color: '#F1F0F0',
                                                }}
                                            >
                                                {item.subName}
                                            </Box>
                                        </Box>
                                    </Stack>
                                    <Box>
                                        <Box
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: { xs: '12px', sm: '15px' },
                                                lineHeight: '18px',
                                                color: '#F1F0F0',
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            {item.value} <ArrowDropDownIcon />
                                        </Box>
                                        <Box
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: { xs: '12px', sm: '15px' },
                                                lineHeight: '18px',
                                                color: '#F1F0F0',
                                            }}
                                        >
                                            {item.subValue}
                                        </Box>
                                    </Box>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}
