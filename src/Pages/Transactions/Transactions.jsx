import { Box, Container } from '@mui/material';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import usdtIcon from '../../images/usdt_icon.png';
import ethIcon from '../../images/eth_icon.png';
import Navigation from '../../Components/Navigation';
import Sorting from './Sorting';
import History from './History';
// import { url } from '../../utils/utils';
// import sendIcon from '../../images/send_icon.png';
import receiveIcon from '../../images/receive_icon.png';
import { REACT_APP_BASE_URL } from '../../config';
import useMakeToast from '../../hooks/makeToast';
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

// ===================Transaction===============
export const addTransaction = async () => {
    try {
        const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
        const response = await fetch(`${REACT_APP_BASE_URL}/api/data/getTransactions`, {
            method: 'GET',
            headers: {
                Authorization: localStorageData?.user?.token,
            },
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};
const Transactions = () => {
const [records, setRecords] = useState([]);
const makeToast = useMakeToast();

useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const result = await addTransaction();
        makeToast(result?.message, 'success', 3);
        setRecords(result.data);
      } catch (error) {
        makeToast(error.message, 'error', 3);
        console.error('Error fetching data:', error.message);
      }
    };
  
    const handlePageFocus = () => {
      fetchTransactions();
    };
  
    window.addEventListener('focus', handlePageFocus);
    return () => {
      window.removeEventListener('focus', handlePageFocus);
    };
  }, []); 
  

    return (
        <>
           <Box  mx={{lg:7,xs:2,md:4,sm:3}}>
           <Navigation />
           <Sorting />
           <History forTransactionsPage={true} historyDetails={records} />
           </Box>
               
            
        </>
    );
};

export default Transactions;
