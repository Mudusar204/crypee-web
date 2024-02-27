import { configureStore } from '@reduxjs/toolkit';
import userDetails from '../redux/slices/userSlice';
import  walletDetails from '../redux/slices/userWalletData'
import filterTransactionSlice from './slices/filterTransectionSlice';

export default configureStore({
    reducer: {
        users: userDetails,
        wallet: walletDetails,
        filterTransactionSlice
    },
});
