// import React from 'react';
import { useState, useEffect } from 'react';
import { Typography, Button, Stack, Box, useMediaQuery } from '@mui/material';
// import axios from 'axios';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import sortingBg from '../../images/sorting_bg.png';
import { SortByNewest, SortingDropdown } from '../../Components/DropdownMenus';

const sortByNewest = ['Newest', 'Oldest'];

const Sorting = (props) => {
    const [sortingItems, setSortingItems] = useState([]);
    useEffect(() => {
        setSortingItems([
            {
                name: 'Type',
                items: [
                    { name: 'Deposit', checked: false },
                    { name: 'Withdrawal', checked: false },
                    { name: 'Buy', checked: false },
                    { name: 'Sell', checked: false },
                    { name: 'Trade', checked: false },
                ],
            },
            {
                name: 'Wallet',
                items: props?.wallets,
            },

            {
                name: 'Currency',
                items: [
                    { name: 'BTC', checked: false },
                    { name: 'USDT', checked: false },
                    { name: 'BNB', checked: false },
                    { name: 'ETH', checked: false },
                ],
            },

            {
                name: 'Date',
                items: [
                    { name: 'Start date', checked: false },
                ],
            },
        ]);
    }, [props.wallets]);
    const setChecked = (parentId, itemId) => {
        console.log(parentId, 'parent id', itemId, 'itemId');

        let newArray = sortingItems.map((item, i) => {
            if (parentId === i) {
                let subItem = item.items.map((child, index) => {
                    if (itemId === index) {
                        return { ...child, checked: true };
                    } else {
                        return child;
                    }
                });
                return { name: item.name, items: subItem };
            } else {
                return item;
            }
        });
        console.log(newArray, 'updated array');
        setSortingItems(newArray);
    };
    const sortingDisplay = useMediaQuery('(min-width: 1000px)');

    return (
        <>
            <Stack
                direction={'row'}
                justifyContent={{ xs: 'flex-end', sm: 'space-between' }}
                alignItems={'center'}
            >
                <Typography
                    color="text.darkblue"
                    sx={{
                        display: { xs: 'none', sm: 'unset' },
                        fontFamily: 'Gmarket',
                        fontWeight: 800,
                        fontSize: { xs: '1.2rem', md: '1.875rem' },
                        textTransform: 'uppercase',
                    }}
                >
                    Transactions
                </Typography>

                <Stack direction={'row'} alignItems={'center'} justifyContent={{ xs: 'center' }}>
                    <Typography
                        sx={{ fontSize: { xs: '.5rem', sm: '.9rem', md: 'initial' } }}
                        color="black"
                    >
                        Sort by
                    </Typography>

                    <SortByNewest categories={sortByNewest} />

                    <Button
                        sx={{
                            fontSize: { xs: '.5rem', sm: '.9rem', md: 'initial' },
                            padding: { xs: '.2em .4em', sm: '0.7em 0.8em' },
                            textTransform: 'capitalize',
                        }}
                        variant="btn1"
                    >
                        Add Transactions
                    </Button>
                    <Button
                        sx={{
                            padding: { xs: '.2em .4em', sm: '0.7em 0.8em' },
                            fontSize: { xs: '.5rem', sm: '.9rem', md: 'initial' },
                            textTransform: 'capitalize',
                            marginLeft: '.3rem',
                        }}
                        variant="btn4"
                        disabled
                    >
                        Add Wallet
                    </Button>
                </Stack>
            </Stack>
            {sortingDisplay ? (
                <Box
                    sx={{
                        background: '#F9FCFF',
                        borderRadius: '15px',
                        border: '1px solid #D8F0FF',
                        my: 5,
                    }}
                >
                    <Stack direction={'row'} justifyContent={'space-evenly'}>
                        {sortingItems?.map((item, i) => {
                            return (
                                <SortingDropdown
                                    key={i}
                                    index={i}
                                    sortItem={item}
                                    setChecked={setChecked}
                                />
                            );
                        })}
                    </Stack>
                </Box>
            ) : null}
        </>
    );
};

export default Sorting;
