import { createSlice } from '@reduxjs/toolkit';

const filterTransactionSlice = createSlice({
    name: 'filterTransactionSlice',
    initialState: { filterQuery: [] },
    reducers: {
        setFilterQuery: (state, action) => {
            const { name, checked } = action.payload;
            const exists = state.filterQuery.some(item => item.name === name );
            if (!exists) {
                state.filterQuery = [...state.filterQuery, action.payload];
            }
            console.log(state.filterQuery, 'filter query', action.payload);
        },
    },
});

export const { setFilterQuery } = filterTransactionSlice.actions;

export default filterTransactionSlice.reducer;
