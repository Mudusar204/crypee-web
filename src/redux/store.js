import { configureStore } from '@reduxjs/toolkit';
import userDetails from '../redux/slices/userSlice';

export default configureStore({
    reducer: {
        users: userDetails,
    },
});
