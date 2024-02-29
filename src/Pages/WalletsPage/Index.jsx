import React, { useContext, useEffect, useState } from 'react';
import WalletsCard from './WalletsCard';
import Walletslist from './Walletslist';
import Navigation from '../../Components/Navigation';
import { REACT_APP_BASE_URL } from '../../config';
import useMakeToast from '../../hooks/makeToast';
import { Box } from '@mui/material';
import { DataContext } from '../../utils/ContextAPI';

// ===================syncwallet===============
export const syncWallet = async () => {
    try {
        const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
        const response = await fetch(`${REACT_APP_BASE_URL}/api/data/syncWallet`, {
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
// ===============get my exchanges=========================
export const getExchanges = async () => {
    try {
        const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
        const response = await fetch(`${REACT_APP_BASE_URL}/api/data/getMyExchanges`, {
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

const Index = () => {
    const [data, setData] = useState(null);
    const makeToast = useMakeToast();
    const { setLoader } = useContext(DataContext);

    // useEffect(() => {
    //     const syncWalletState = async () => {
    //         try {
    //             setLoader(true);
    //             const result = await getExchanges();
    //             setData(result);
    //             makeToast(result?.message, 'success', 3);
    //             setLoader(false);
    //         } catch (error) {
    //             setLoader(false);
    //             makeToast(error.message, 'error', 3);
    //             console.error('Error setting data:', error.message);
    //         }
    //     };
    //     syncWalletState()
    // }, [ ]);
    return (
        <>
            <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
                <Navigation />
                <WalletsCard data={data} />
                <Walletslist data={data} />
            </Box>
        </>
    );
};

export default Index;
