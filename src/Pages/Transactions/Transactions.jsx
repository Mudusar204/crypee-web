import { useContext, useEffect, useState } from 'react';
import { Box, Container } from '@mui/material';
import axios from 'axios';
// import usdtIcon from '../../images/usdt_icon.png';
// import ethIcon from '../../images/eth_icon.png';
import Navigation from '../../Components/Navigation';
import Sorting from './Sorting';
import History from './History';
// import { url } from '../../utils/utils';
// import sendIcon from '../../images/send_icon.png';
// import receiveIcon from '../../images/receive_icon.png';
import { REACT_APP_BASE_URL } from '../../config';
import useMakeToast from '../../hooks/makeToast';
import { DataContext } from '../../utils/ContextAPI';
import { useSelector } from 'react-redux';
// const transactionDetails = [
//     {
//         transaction: { icon: receiveIcon, status: 'Receive', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {},
//         incoming: {
//             icon: usdtIcon,
//             coin: '+95.8USDT',
//             inUsd: '($26,739.19)',
//             address: '0x3b9...e85ea',
//             costBasis: '$26,739.83',
//         },
//         fee: {},
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
//     {
//         transaction: { icon: receiveIcon, status: 'Send', theDate: 'March 1, 2022 1:55PM' },
//         outgoing: {
//             icon: ethIcon,
//             coin: '-0.051ETH',
//             inUsd: '($23,456.45)',
//             address: '0x3b9...e85ea',
//             costBasis: '$19,009.65',
//             gain: '$4446.80 gain',
//         },
//         incoming: {},
//         fee: {
//             fee: '-0.00069211ETH',
//             inUsd: '($318.32)',
//             address: '0x3b9...e85ea',
//             costBasis: '$0.00',
//         },
//     },
// ];

// ===================Transaction===============
export const addTransaction = async (limit, page, type, currency, wallet, date) => {
    try {
        // const type = ['Deposits', 'Withdrawals'];
        // const wallet = ['Wallet1', 'Wallet2'];
        // const currency = ['BTC', 'ETH'];
        // const date = [{ from: 'Mon Feb 05 2024', to: 'Mon Feb 10 2024' }];
        const queryString = [
            `limit=${limit}`,
            `page=${page}`,
            ...type.map((value) => `type=${encodeURIComponent(value)}`),
            ...wallet.map((value) => `wallet=${encodeURIComponent(value)}`),
            ...currency.map((value) => `currency=${encodeURIComponent(value)}`),
            `from=${encodeURIComponent(date[0]?.from)}`,
            `to=${encodeURIComponent(date[0]?.to)}`,
        ].join('&');
        const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
        const response = await fetch(
            `${REACT_APP_BASE_URL}/api/data/getTransactions?${queryString}`,
            {
                method: 'GET',
                headers: {
                    Authorization: localStorageData?.user?.token,
                },
            },
        );

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};
const Transactions = () => {
    const queryData = useSelector((state) => state.filterTransactionSlice.filterQuery);
    // console.log(queryData, '=================query data');

    const [records, setRecords] = useState([]);
    const [page, setPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const makeToast = useMakeToast();
    const { setLoader } = useContext(DataContext);

    const [wallets, setWallets] = useState([]);
    const [currency, setCurrency] = useState([]);

    useEffect(() => {
        try {
            const getExchanges = async () => {
                const refreshToken = localStorage.getItem('persistMe')
                    ? JSON.parse(localStorage.getItem('persistMe'))
                    : null;
                let exchanges = await axios.get(`${REACT_APP_BASE_URL}/api/avlExchanges`, {
                    headers: {
                        Authorization: refreshToken?.user?.token,
                    },
                });
                setWallets(exchanges.data.data);
            };
            getExchanges();
        } catch (error) {}
    }, []);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const typeFilters = queryData
                    .filter((filter) => filter.query === 'Type')
                    .map((filter) => filter.name);
                const currencyFilters = queryData
                    .filter((filter) => filter.query === 'Currency')
                    .map((filter) => filter.name);
                const walletFilters = queryData
                    .filter((filter) => filter.query === 'Wallet')
                    .map((filter) => filter.name);
                const dateFilters = queryData
                    .filter((filter) => filter.query === 'Date')
                    .map((filter) => ({ from: filter.from, to: filter.to }));

                // console.log(
                //     typeFilters,
                //     'type',
                //     currencyFilters,
                //     'currency',
                //     walletFilters,
                //     'wallet filter',
                //     dateFilters,
                //     'date filters',
                // );
                const result = await addTransaction(
                    rowsPerPage,
                    page,
                    typeFilters,
                    currencyFilters,
                    walletFilters,
                    dateFilters,
                );
                makeToast(result?.message, 'success', 3);
                setTotalPages(result?.data?.numberOfPages);
                setRecords(result?.data?.transactions);
            } catch (error) {
                makeToast(error.message, 'error', 3);
                console.error('Error fetching data:', error.message);
            }
        };

        fetchTransactions();
    }, [page, rowsPerPage, queryData]);

    return (
        <>
            <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
                <Navigation />
                <Sorting wallets={wallets} />
                <History
                    forTransactionsPage={true}
                    historyDetails={records}
                    // historyDetails={transactionDetails}
                    // total pages count remain to pass as params
                    totalPages={totalPages}
                    page={page}
                    setPage={setPage}
                    rowsPerPage={rowsPerPage}
                    setRowsPerPage={setRowsPerPage}
                />
            </Box>
        </>
    );
};

export default Transactions;
