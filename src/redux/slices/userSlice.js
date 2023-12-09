import { createSlice } from '@reduxjs/toolkit';

const userDetails = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUserData: (state, action) => {
            return { ...action.payload };
        },
    },
});

export const { setUserData } = userDetails.actions;

export default userDetails.reducer;
