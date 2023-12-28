import { configureStore } from '@reduxjs/toolkit';
import userDetails from '../redux/slices/userSlice';
import  walletDetails from '../redux/slices/userWalletData'


export default configureStore({
    reducer: {
        users: userDetails,
        wallet: walletDetails,
    },
});
