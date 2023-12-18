import {
    Typography,
    Button,
    Stack,
    ButtonGroup,
    Box,
  
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import pastdayBg from '../../images/pastday_bg.png';
// import netFiatBg from '../../images/netFiat_bg.png';
// import costBasisBg from '../../images/costBasis_bg.png';
// import returnBg from '../../images/return_bg.png';
// import portfolio from '../../images/portfolio_img.png';
import { SortByNewest, UnrealizedPerformanceDropdown } from '../../Components/DropdownMenus';
import Profile from '../DashboardPage/Profile';
import { DateRange, Share } from '@mui/icons-material';

// import costbasis from '../../images/costbasis.png';
// import upicon from '../../images/upicon.png';
// import note from '../../images/note.png';
// import dollar from '../../images/dollar.png';


// const balanceDetails = [
//     {
//         img: returnBg,
//         title: 'Unrealized Return',
//         price: ' 0.00',
//         icon: upicon,
//     },
//     {
//         img: pastdayBg,
//         title: 'Past Day',
//         price: ' 0.00',
//         icon: note,
//     },
//     {
//         img: costBasisBg,
//         title: 'Cost Basis',
//         price: ' 0.00',
//         icon: costbasis,
//     },
//     {
//         img: netFiatBg,
//         title: 'Net Fiat Invested',
//         price: ' 0.00',
//         icon: dollar,
//     },
// ];

const performances = ['Unrealized Performance', 'Total Performance'];
const sortByNewest = ['Newest', 'Oldest'];

const Pastdatesorting = () => {

    return (
        <>
            <Stack
                direction={'row'}
                justifyContent={{ xs: 'flex-end', sm: 'space-between' }}
                alignItems={'center'}
                py={5}
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
                            border: '2px  solid #0B7BC3',
                            color: '#0B7BC3',
                            background: 'white',
                        }}
                        variant="btn4"
                    >
                        Add Wallet
                    </Button>
                </Stack>
            </Stack>

            <Box display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                <Box display={'flex'} justifyContent={'center'} gap={'10px'}>
                    <ButtonGroup
                        sx={{
                            width: { xs: '140px', sm: 'unset' },
                            height: { xs: '26px', sm: 'unset' },
                        }}
                    >
                        <Button
                            sx={{ fontSize: { xs: '7.4px', sm: '13px' }, color: '#0B7BC3' }}
                            endIcon={<DateRange />}
                        >
                            Date
                        </Button>
                        <Button sx={{ fontSize: { xs: '7.4px', sm: '13px' }, color: '#0B7BC3' }}>
                            All Time <ArrowDropDownIcon />
                        </Button>
                        <Button
                            sx={{ fontSize: { xs: '7.4px', sm: '13px' }, color: '#0B7BC3' }}
                            endIcon={<Share />}
                        >
                            Share
                        </Button>
                    </ButtonGroup>

                    <UnrealizedPerformanceDropdown performances={performances} />
                </Box>
            </Box>

            {/* ===========portfolio================ */}
            <Box
                my={5}
                sx={{ background: 'white', borderRadius: '15px' }}
                boxShadow={'0px 0px 60px 0px rgba(0, 0, 0, 0.05)'}
                py={5}
                px={5}
            >
                <Profile />
            </Box>

        </>
    );
};

export default Pastdatesorting;
