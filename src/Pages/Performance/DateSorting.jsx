import { Typography, Button, Stack, ButtonGroup, Box, Grid } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import pastdayBg from '../../images/pastday_bg.png';
import netFiatBg from '../../images/netFiat_bg.png';
import costBasisBg from '../../images/costBasis_bg.png';
import returnBg from '../../images/return_bg.png';
// import portfolio from '../../images/portfolio_img.png';
import { UnrealizedPerformanceDropdown } from '../../Components/DropdownMenus';
import Profile from '../DashboardPage/Profile';
import { DateRange, Share } from '@mui/icons-material';

const balanceDetails = [
    {
        img: returnBg,
        title: 'Unrealized Return',
        price: ' 0.00',
    },
    {
        img: pastdayBg,
        title: 'Past Day',
        price: ' 0.00',
    },
    {
        img: costBasisBg,
        title: 'Cost Basis',
        price: ' 0.00',
    },
    {
        img: netFiatBg,
        title: 'Net Fiat Invested',
        price: ' 0.00',
    },
];

const performances = ['Unrealized Performance', 'Total Performance'];

const DateSorting = () => {
    return (
        <>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={{ xs: 'center', md: 'space-between' }}
                alignItems={'center'}
            >
                <Typography
                    color="text.darkblue"
                    sx={{
                        fontFamily: 'Orbitron, sans-serif',
                        fontWeight: 800,
                        fontSize: { xs: '1.687rem', md: '1.875rem' },
                        textTransform: 'uppercase',
                    }}
                >
                    Performance
                </Typography>

                <Stack
                    width={{ xs: '100%', md: 'unset' }}
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-around'}
                    gap={0.5}
                >
                    <ButtonGroup
                        sx={{
                            width: { xs: '140px', sm: 'unset' },
                            height: { xs: '26px', sm: 'unset' },
                        }}
                        disabled
                    >
                        <Button
                            sx={{ fontSize: { xs: '7.4px', sm: '13px' } }}
                            endIcon={<DateRange />}
                        >
                            Date
                        </Button>
                        <Button sx={{ fontSize: { xs: '7.4px', sm: '13px' } }}>
                            All Time <ArrowDropDownIcon />
                        </Button>
                        <Button sx={{ fontSize: { xs: '7.4px', sm: '13px' } }} endIcon={<Share />}>
                            Share
                        </Button>
                    </ButtonGroup>

                    <UnrealizedPerformanceDropdown performances={performances} />
                </Stack>
            </Stack>

            <Grid
                container
                sx={{ margin: '65px 0px', flexWrap: 'wrap' }}
                direction={'row'}
                align="center"
                justifyContent={'space-evenly'}
            >
                {balanceDetails.map((item, i) => {
                    return (
                        <Grid sx={{ my: '1em' }} key={i} item md={2.5} sm={6} xs={12}>
                            <Box
                                sx={{
                                    backgroundImage: `url(${item.img})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100% 100%',
                                    width: '200px',
                                    height: '200px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: 'white',
                                }}
                            >
                                <Box>
                                    <Typography
                                        textAlign={'center'}
                                        width={'152px'}
                                        sx={{ fontSize: { md: '12px', xs: '10px' } }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        textAlign={'center'}
                                        width={'152px'}
                                        sx={{
                                            fontSize: { fontWeight: 700, md: '20px', xs: '15px' },
                                        }}
                                    >
                                        <sup style={{ fontSize: '10px' }}>PKR</sup> {item.price}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>

            <Box sx={{ my: '63px', textAlign: 'center' }}>
                {/* <img width={'90%'} src={portfolio} alt="" /> */}
                <Profile />
            </Box>
        </>
    );
};

export default DateSorting;
