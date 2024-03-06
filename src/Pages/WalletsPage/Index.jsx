import React, { useContext, useEffect, useState } from 'react';
import WalletsCard from './WalletsCard';
import Walletslist from './Walletslist';
import Navigation from '../../Components/Navigation';
import { REACT_APP_BASE_URL } from '../../config';
import useMakeToast from '../../hooks/makeToast';
import { Box } from '@mui/material';
import { DataContext } from '../../utils/ContextAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/slices/commonSlice';

// ===================syncwallet===============
export const syncWallet = async (exchange,dispatch) => {
    try {
        dispatch(setLoading(true));
    
        const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
        const response = await fetch(
            `${REACT_APP_BASE_URL}/api/data/syncWallet?exchangeId=${exchange?.id}`,
            {
                method: 'GET',
                headers: {
                    Authorization: localStorageData?.user?.token,
                },
            },
        );

        const result = await response.json();
        dispatch(setLoading(false));

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
    const dispatch = useDispatch();

    return (
        <>
            <Box mx={{ lg: 7, xs: 2, md: 4, sm: 3 }}>
                <Navigation />
                <WalletsCard />
                <Walletslist />
            </Box>
        </>
    );
};

export default Index;
