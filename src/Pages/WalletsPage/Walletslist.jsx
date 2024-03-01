import React, { useContext, useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
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
    const [walletAssets, setWalletAssets] = useState([]);
    const [profile, setProfile] = useState();
    const [activeExchangeAssets, setActiveExchangeAssets] = useState('');
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
    const handleSyncSingleExchangeClick = async () => {
        try {
            setLoader(true);
            const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
            const response = await fetch(
                `${REACT_APP_BASE_URL}/api/data/getExchangeAssets?exchange=${activeExchangeAssets}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: localStorageData?.user?.token,
                    },
                },
            );

            const result = await response.json();
            setWalletAssets(result.data);
            console.log(result, 'result single exchange assets');
            setLoader(false);
        } catch (error) {
            setLoader(false);
            console.log('Error syncing exchanges:', error.message);
            makeToast(`Error syncing exchanges: ${error.message}`, 'error', 3);
        }
    };
    useEffect(() => {
        handleSyncSingleExchangeClick();
    }, [activeExchangeAssets]);

    const handleSyncExchangeClick = async () => {
        try {
            setLoader(true);
            const result = await getExchanges();
            if (result) {
                makeToast(`Wallet exchanges synced successfully: ${result.message}`, 'success', 3);
                setwalletData(result.data);
                setActiveExchangeAssets(result.data[0]?.name);
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
    // Get active Exchange Rcored
    useEffect(() => {});

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
                        my: { xs: 3, md: 5 },
                        px: { xs: 3, sm: 5, md: 7 },
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
                                color: '#333',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            {profile?.balance}
                        </Box>
                    </Stack>
                    <Box>
                        <Grid container spacing={{ xs: 2, sm: 4 }}>
                            <Grid item xs={12} md={4}>
                                <Box
                                    sx={{
                                        background: 'whitesmoke',
                                        borderRadius: '10px',
                                        p: { xs: 2, sm: 3 },
                                        height: '100%',
                                    }}
                                >
                                    {walletData?.length > 0 ? (
                                        walletData.map((item, i) => {
                                            console.log(item, 'exchange');
                                            return (
                                                <Stack
                                                    direction="row"
                                                    key={i}
                                                    sx={{
                                                        justifyContent: 'space-between',
                                                        alignItems: 'center',
                                                        py: { xs: 1, md: 1.5 },
                                                        cursor: 'pointer',
                                                        borderBottom:
                                                            i !== walletData?.length - 1 &&
                                                            '1px solid #fff',
                                                    }}
                                                    onClick={() =>
                                                        setActiveExchangeAssets(item.name)
                                                    }
                                                >
                                                    <Stack
                                                        direction="row"
                                                        sx={{
                                                            alignItems: 'center',
                                                            gap: { xs: 1, sm: 1.5 },
                                                        }}
                                                    >
                                                        <Box>
                                                            <img
                                                                style={{
                                                                    width: '25px',
                                                                }}
                                                                src={require(`../../images/exchangeImgs/${item.name}.png`)}
                                                                alt=""
                                                            />
                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                fontFamily: 'Gmarket',
                                                                fontStyle: 'normal',
                                                                fontWeight: '400',
                                                                fontSize: '12px',
                                                                color: ' var(--Text-Black, #333)',
                                                            }}
                                                        >
                                                            <Box
                                                                sx={{
                                                                    fontWeight: '600',
                                                                    fontSize: '14px',
                                                                }}
                                                            >
                                                                {item.name}
                                                            </Box>
                                                            <Box>
                                                                {item?.allAssets?.length} assets
                                                            </Box>
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
                                                        <Box
                                                            sx={{
                                                                fontSize: '14px',
                                                                fontWeight: '600',
                                                            }}
                                                        >
                                                            {item?.balance
                                                                ? (+item?.balance)?.toFixed(4)
                                                                : item?.balance}
                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                fontSize: { xs: '9px', sm: '10px' },
                                                            }}
                                                        >
                                                            {getLastSyncDate(item?.lastSync)}
                                                        </Box>
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
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Box
                                    sx={{
                                        background: 'whitesmoke',
                                        borderRadius: '10px',
                                        p: { xs: 2, sm: 3 },
                                        height: '100%',
                                    }}
                                >
                                    <Stack
                                        direction="row"
                                        sx={{
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Box>
                                            <Box
                                                sx={{
                                                    fontWeight: '600',
                                                    fontFamily: 'Gmarket',
                                                    fontSize: {
                                                        xs: '12px',
                                                        sm: '15px',
                                                        md: '18px',
                                                    },
                                                }}
                                            >
                                                Kraken
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontWeight: '600',
                                                    fontFamily: 'Gmarket',
                                                    fontSize: {
                                                        xs: '14px',
                                                        sm: '18px',
                                                        md: '22px',
                                                    },
                                                }}
                                            >
                                                USDT 0.02
                                            </Box>
                                        </Box>
                                        <Button
                                            variant="btn2"
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontStyle: 'normal',
                                                fontWeight: '600',
                                                fontSize: { xs: '12px', sm: '14px' },
                                                p: { xs: '5px 15px', sm: '7px 20px' },
                                                height: 'max-content',
                                            }}
                                            // onClick={syncWallet}
                                        >
                                            Sync kraken
                                        </Button>
                                    </Stack>
                                    {/* Data Table */}

                                    <TableContainer>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Name</TableCell>
                                                    <TableCell align="right">Holdings</TableCell>
                                                    <TableCell align="right">
                                                        Transactions
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {walletAssets.map((item, i) => (
                                                    <TableRow
                                                        key={i}
                                                        sx={{
                                                            '&:last-child td, &:last-child th': {
                                                                border: 0,
                                                            },
                                                        }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            <Stack direction={'row'} gap={2}>
                                                                <img
                                                                    style={{
                                                                        width: '25px',
                                                                    }}
                                                                    src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${item?.coinId}.png`}
                                                                    alt=""
                                                                />
                                                                <Box>{item.symbol}</Box>
                                                            </Stack>
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            <Box>
                                                                <Box>{item?.amount}</Box>
                                                            </Box>
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            {item.totalTransaction} Transactions
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
