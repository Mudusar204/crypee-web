import { Typography, Button, Stack, Box, useMediaQuery } from '@mui/material';

// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import sortingBg from '../../images/sorting_bg.png';
import { SortByNewest, SortingDropdown } from '../../Components/DropdownMenus';

const sortingItems = [
    {
        name: 'Type',
        items: ['Type 1', 'Type 2', 'Type 3', 'Type 4'],
    },
    {
        name: 'Wallet',
        items: ['Wallet 1', 'Wallet 2', 'Wallet 3'],
    },

    {
        name: 'Currency',
        items: ['Currency 1', 'Currency 2', 'Currency 3'],
    },
    {
        name: 'Sync Method',
        items: ['Sync Method 1', 'Sync Method 2', 'Sync Method 3'],
    },
    {
        name: 'Status',
        items: ['Status 1', 'Status 2', 'Status 3'],
    },
    {
        name: 'Date',
        items: ['Date 1', 'Date 2', 'Date 3'],
    },
    {
        name: 'Tag',
        items: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
];

const sortByNewest = ['Newest', 'Oldest'];

const Sorting = () => {
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
                        fontFamily: 'Orbitron, sans-serif',
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
                        color="text.darkblue"
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
                        display: { xs: 'none', md: 'block' },
                        backgroundImage: `url(${sortingBg})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100% 100%',
                        minHeight: '76px',
                        textAlign: 'center',
                        my: '1em',
                    }}
                >
                    <Stack direction={'row'} justifyContent={'space-evenly'}>
                        {sortingItems?.map((item, i) => {
                            return <SortingDropdown key={i} items={item} />;
                        })}
                    </Stack>
                </Box>
            ) : null}
        </>
    );
};

export default Sorting;
