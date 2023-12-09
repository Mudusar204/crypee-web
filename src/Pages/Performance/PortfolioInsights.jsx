import { Typography, Box, Button, Stack, LinearProgress } from '@mui/material';

import portfolioInsightsBg from '../../images/portfolio_insights_bg.png';
import { AssetsDropdown } from '../../Components/DropdownMenus';

const assetsCategories = ['All time', 'Most Recent', 'Oldest'];

const insightDetails = [
    {
        title: 'Tax Loss Harvesting',
        description: 'You currently dont have opportunities to harvest tax losses.',
        btnText: 'See Insights',
    },
    {
        title: 'Tax Impact',
        description:
            'If you are considering executing a transaction, use CoinTracker to preview the tax impact.',
        btnText: 'Preview Impact',
    },
    {
        title: 'Funds on Exchanges',
        description: 'You keep 0% of your assets on exchanges.Their current value is 0.00 PKR.',
        btnText: 'Learn More',
    },
];

const coinDiversityDetails = [
    {
        val: '1',
        progressVal: 100,
    },
    {
        val: '0.8',
        progressVal: 80,
    },
    {
        val: '0.6',
        progressVal: 60,
    },
    {
        val: '0.4',
        progressVal: 40,
    },
    {
        val: '0.2',
        progressVal: 20,
    },
    {
        val: '0',
        progressVal: 0,
    },
];

const PortfolioInsights = () => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography
                    color={'text.darkblue'}
                    align="center"
                    sx={{ my: 4, fontSize: '22px', fontWeight: 600 }}
                >
                    Portfolio Insights
                </Typography>

                <Stack direction={'row'} flexWrap={'wrap'} gap={4.2} justifyContent={'center'}>
                    {insightDetails.map((item, i) => {
                        return (
                            <Box
                                key={i}
                                sx={{
                                    backgroundImage: `url(${portfolioInsightsBg})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100% 100%',
                                    width: { xs: '280px', md: '240px' },
                                    padding: '1.3rem 1rem',
                                    borderRadius: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: '0.687rem', fontWeight: 600, color: 'white' }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    color="text.white"
                                    sx={{
                                        fontSize: '0.687rem',
                                        textAlign: 'center',
                                        mt: '20px',
                                        py: '1rem',
                                    }}
                                >
                                    {item.description}
                                </Typography>

                                <Box
                                    sx={{
                                        textAlign: 'center',
                                    }}
                                >
                                    <Button
                                        variant="btn1"
                                        sx={{ fontSize: '0.67rem', fontWeight: 600 }}
                                    >
                                        {item.btnText}
                                    </Button>
                                </Box>
                            </Box>
                        );
                    })}
                </Stack>
            </Box>
            <Stack
                sx={{ mt: '3em' }}
                direction={{ xs: 'column', md: 'row' }}
                justifyContent={'space-around'}
                alignItems={'center'}
            >
                <Box
                    sx={{
                        mt: '2em',
                        width: {
                            xs: '95%',
                            sm: '90%',
                            md: '495px',
                        },
                        height: {
                            xs: '186px',
                            sm: '307px',
                        },
                        backgroundColor: '#e8f3f9',
                        border: '2px solid #5BACDE',
                        borderRadius: '1em',
                    }}
                >
                    <Typography
                        color={'text.darkblue'}
                        sx={{
                            padding: '1em 2em',
                            fontSize: { xs: '12px', sm: '20px' },
                            fontWeight: 600,
                        }}
                    >
                        Coin Diversity
                    </Typography>
                    <Box>
                        {coinDiversityDetails.map((item, i) => {
                            return (
                                <Stack
                                    key={i}
                                    justifyContent={'flex-end'}
                                    direction={'row'}
                                    alignItems={'baseline'}
                                    sx={{ py: '.3em', px: { xs: '1.5em', sm: '2.7em' } }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {
                                                xs: '9px',
                                                sm: 'unset',
                                                marginRight: '1em',
                                            },
                                        }}
                                    >
                                        {item.val}%
                                    </Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={item.progressVal}
                                        sx={{
                                            width: '90%',
                                            height: { xs: '4.3px', sm: '7px' },
                                            bgcolor: 'lightblue',
                                        }}
                                    />
                                </Stack>
                            );
                        })}
                    </Box>
                </Box>

                <Box sx={{ width: { md: '25%' }, mt: '2em' }}>
                    <Typography
                        color={'text.darkblue'}
                        sx={{
                            textAlign: { xs: 'center', md: 'unset' },
                            fontSize: '20px',
                            fontWeight: 600,
                        }}
                    >
                        Your Assets
                    </Typography>
                    <Typography
                        color={'text.darkblue'}
                        sx={{
                            fontSize: '15px',
                            margin: '0.812em 0 2.06em 0',
                            textAlign: { xs: 'center', md: 'unset' },
                        }}
                    >
                        Add some wallets or transactions to display the summary
                    </Typography>
                    <Box sx={{ textAlign: { xs: 'center', md: 'unset' } }}>
                        <AssetsDropdown categories={assetsCategories} />
                    </Box>
                </Box>
            </Stack>
        </>
    );
};

export default PortfolioInsights;
