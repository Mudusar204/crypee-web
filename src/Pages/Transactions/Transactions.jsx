import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import usdtIcon from '../../images/usdt_icon.png'
import ethIcon from '../../images/eth_icon.png'
import Navigation from '../../Components/Navigation';
import Sorting from './Sorting';
import History from './History';
import { url } from '../../utils/utils';
import sendIcon from '../../images/send_icon.png';
import receiveIcon from '../../images/receive_icon.png'

const transactionDetails = [
    {
        transaction: { icon: receiveIcon, status: 'Receive', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {},
        incoming: {
            icon: usdtIcon,
            coin: '+95.8USDT',
            inUsd: '($26,739.19)',
            address: '0x3b9...e85ea',
            costBasis: '$26,739.83',
        },
        fee: {},
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
    {
        transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
        outgoing: {
            icon: ethIcon,
            coin: '-0.051ETH',
            inUsd: '($23,456.45)',
            address: '0x3b9...e85ea',
            costBasis: '$19,009.65',
            gain: '$4446.80 gain',
        },
        incoming: {},
        fee: {
            fee: '-0.00069211ETH',
            inUsd: '($318.32)',
            address: '0x3b9...e85ea',
            costBasis: '$0.00',
        },
    },
];

const Transactions = () => {
    // transaction: { icon: receiveIcon, status: 'Receive', theDate: 'March 1, 2022 1:55PM' },
    // outgoing: {
    //     icon: ethIcon,
    //     coin: '-0.051ETH',
    //     inUsd: '($23,456.45)',
    //     address: '0x3b9...e85ea',
    //     costBasis: '$19,009.65',
    //     gain: '$4446.80 gain',
    // },
    // incoming: {
    //     icon: usdtIcon,
    //     coin: '+95.8USDT',
    //     inUsd: '($26,739.19)',
    //     address: '0x3b9...e85ea',
    //     costBasis: '$26,739.83',
    // },
    // fee: {
    //     fee: '-0.00069211ETH',
    //     inUsd: '($318.32)',
    //     address: '0x3b9...e85ea',
    //     costBasis: '$0.00',
    // },
    // const [records, setRecords] = useState([]);
    // const getData = async () => {
    //     const { data: deposit } = await axios.get(`${url}/exchanges/binance/txRecord/deposit`);
    //     const { data: withdraw } = await axios.get(`${url}/exchanges/binance/txRecord/withdraw`);
    //     setRecords([...deposit, ...withdraw]);
    // };
    // useEffect(() => {
    //     getData();
    // }, []);
    const [records, setRecords] = useState(transactionDetails);

    return (
        <>
            <Navigation />
            <Container maxWidth="xl">
                <Box px={{ xs: 0, md: 10 }}>
                    <Sorting />
                    <History forTransactionsPage={true} historyDetails={records} />
                </Box>
            </Container>
        </>
    );
};

export default Transactions;
