import React, { useContext, useEffect, useState } from 'react';
import { Avatar, Box, Button, Container, Grid, Stack } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import bg from '../../images/dashboard/assertsbg.png';
import nft from '../../images/wallets/linknft.png';
import eth from '../../images/wallets/eth.png';
import obot from '../../images/wallets/obot.png';
import gns from '../../images/wallets/gns.png';
import usdt from '../../images/wallets/usdt.png';
import WalletsDialog from './WalletsDialog';
import AddWalletDialog from './AddWalletDialog';
import { getExchanges, fetchData, syncWallet } from './Index';
import { setWalletData } from '../../redux/slices/userWalletData';
import { useDispatch } from 'react-redux';
import useMakeToast from '../../hooks/makeToast';
import { DataContext } from '../../utils/ContextAPI';
import { AddwalletDropdown } from '../../Components/DropdownMenus';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../config';
import moment from 'moment/moment';
import imgs from '../../images/exchangeImgs/binance.png';
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
    const dispatch = useDispatch();
    const makeToast = useMakeToast();
    const [wallet, setwallet] = useState(false);
    const [addWallet, setAddWallet] = useState(false);
    const [syncData, setsyncData] = useState(null);
    const [walletData, setwalletData] = useState([]);
    const [profile, setProfile] = useState();
    const { setLoader } = useContext(DataContext);

    // const handleSyncWalletClick = async () => {
    //     try {
    //         setLoader(true);
    //         const result = await syncWallet();
    //         setsyncData(result);
    //         if (result) {
    //             makeToast('Wallet synced successfully', 'success', 3);
    //         } else {
    //             makeToast('Error syncing wallet', 'error', 3);
    //         }
    //         setLoader(false);
    //     } catch (error) {
    //         setLoader(false);
    //         makeToast(`Error syncing wallet: ${error.message}`, 'error', 3);
    //         console.error('Error syncing wallet:', error.message);
    //     }
    // };
    // ==========syncExchange===============
    const handleSyncExchangeClick = async () => {
        try {
            setLoader(true);
            const result = await getExchanges();
            if (result) {
                makeToast(`Wallet exchanges synced successfully: ${result.message}`, 'success', 3);
                setwalletData(result.data);
                localStorage.setItem('walletdata', JSON.stringify(result?.data));
                dispatch(setWalletData(result?.data));
            } else {
                makeToast('Error Sync Exchanges', 'error', 3);
            }
            setLoader(false);
        } catch (error) {
            setLoader(false);
            makeToast(`Error syncing exchanges: ${error.message}`, 'error', 3);
            console.error('Error syncing exchanges:', error.message);
        }
    };

    const handleWallet = () => {
        setwallet((preState) => !preState);
    };
    const handleAddWallet = () => {
        setAddWallet((preState) => !preState);
    };

    // =================profile====================
    const fetchProfile = async () => {
        try {
            setLoader(true);
            const refreshToken = localStorage.getItem('persistMe')
                ? JSON.parse(localStorage.getItem('persistMe'))
                : null;
            let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getPortfolio`, {
                headers: {
                    Authorization: refreshToken?.user?.token,
                },
            });
            // console.log(response.data.data, 'response.data');
            setProfile(response.data?.data);

            setLoader(false);
        } catch (error) {
            setLoader(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProfile();
        handleSyncExchangeClick();
    }, []);

    function getLastSyncDate(savedDate) {
        const diff = moment(new Date()).diff(moment(savedDate));

        // Get the duration in days, hours, or minutes
        const duration = moment.duration(diff);
        console.log(duration, 'duration');
        // Get the difference in days, hours, or minutes
        const days = duration.days();
        const hours = duration.hours();
        const minutes = duration.minutes();

        // Construct the output string based on the difference
        let output;
        if (days > 0) {
            output = days + ' day' + (days > 1 ? 's' : '') + ' ago';
        } else if (hours > 0) {
            output = hours + ' hour' + (hours > 1 ? 's' : '') + ' ago';
        } else if (minutes > 0) {
            output = minutes + ' minute' + (minutes > 1 ? 's' : '') + ' ago';
        } else {
            output = 'Just now';
        }
        return output;
    }

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
            <Box>
                <Stack direction="row" gap={5} pt={0}>
                    <Button
                        variant="btn2"
                        sx={{
                            fontFamily: 'Gmarket',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '16px',
                            lineHeight: '24px',
                            p: { xs: '5px 15px', sm: '10px 20px' },
                        }}
                        onClick={syncWallet}
                    >
                        Sync Wallet
                    </Button>
                    <AddwalletDropdown />
                </Stack>
                <Box
                    sx={{
                        boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                        background: 'white',
                        borderRadius: '15px',
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
                        <Box
                            sx={{
                                fontFamily: 'Gmarket',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: { xs: '14px', sm: '17px' },
                                lineHeight: '18px',
                                color: ' var(--Text-Black, #333)',
                            }}
                        >
                            Your Exchanges
                        </Box>
                        <Box
                            sx={{
                                fontFamily: 'Gmarket',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '15px',
                                lineHeight: '18px',
                                color: 'var(--Text-Black, #333)',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {profile?.balance}
                        </Box>
                    </Stack>
                    <Box>
                        <Grid
                            container
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '20px',
                            }}
                            spacing={5}
                        >
                            <Grid
                                xs={12}
                                md={4}
                                sx={{ background: 'whitesmoke', borderRadius: '10px', px: 2 }}
                            >
                                {walletData?.length > 0 ? (
                                    walletData.map((item, i) => {
                                        console.log(item, 'exchange');
                                        return (
                                            <Stack
                                                direction="row"
                                                justifyContent="space-between"
                                                alignItems="center"
                                                width={{ xs: '100%' }}
                                                mt={'10px'}
                                            >
                                                <Stack
                                                    direction="row"
                                                    style={{ alignItems: 'center' }}
                                                    gap={1}
                                                >
                                                    <Box>
                                                        <img
                                                            style={{ borderRadius: '50%' }}
                                                            src={require(`../../images/exchangeImgs/${item.name}.png`)}
                                                            height={50}
                                                            width={50}
                                                            alt=""
                                                        />
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            fontFamily: 'Gmarket',
                                                            fontStyle: 'normal',
                                                            fontWeight: '400',
                                                            fontSize: '14px',
                                                            color: ' var(--Text-Black, #333)',
                                                        }}
                                                    >
                                                        <p
                                                            style={{
                                                                fontSize: '16px',
                                                                fontWeight: '600',
                                                            }}
                                                        >
                                                            {item.name}
                                                        </p>
                                                        <p style={{ marginTop: '-10px' }}>
                                                            {item?.allAssets?.length}
                                                        </p>
                                                    </Box>
                                                </Stack>
                                                <Box
                                                    sx={{
                                                        fontFamily: 'Gmarket',
                                                        fontStyle: 'normal',
                                                        fontWeight: '400',
                                                        fontSize: '14px',
                                                        color: ' var(--Text-Black, #333)',
                                                    }}
                                                >
                                                    <p
                                                        style={{
                                                            fontSize: '16px',
                                                            fontWeight: '600',
                                                        }}
                                                    >
                                                        {item.balance}
                                                    </p>
                                                    <p style={{ marginTop: '-10px' }}>
                                                        {getLastSyncDate(item?.lastSync)}
                                                    </p>
                                                </Box>
                                            </Stack>
                                        );
                                    })
                                ) : (
                                    <Grid item xs={12}>
                                        <Box
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: { xs: '12px', sm: '15px' },
                                                lineHeight: '18px',
                                                color: ' var(--Text-Black, #333)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                my: { xs: 3, sm: 5, md: 7 },
                                                textAlign: 'center',
                                            }}
                                        >
                                            Wallet exchanges not found
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>
                            <Grid
                                xs={12}
                                sm={12}
                                md={7.8}
                                sx={{ background: 'whitesmoke', borderRadius: '10px', px: 2 }}
                            ></Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
