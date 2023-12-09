import {
    Box,
    Button,
    Grid,
    InputBase,
    Paper,
    Tab,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tabs,
    Typography,
    tableCellClasses,
    useMediaQuery,
} from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import ReportTaxBg from '../../images/Taxes/taxReportBg.png';
import GainText from '../../images/Taxes/gainBg.png';
import careercard from '../../images/careercard.png';

const taxAbleIncome = [
    {
        income: 'Airdrops',
        amount: 'PKR 0.00',
        other: 'Gifts',
        otherAmount: 'PKR 0.00',
    },
    {
        income: 'Forks',
        amount: 'PKR 0.00',
        other: 'Donations',
        otherAmount: 'Coming soon',
    },
    {
        income: 'Mining',
        amount: 'PKR 0.00',
        other: 'Net future gains',
        otherAmount: 'PKR 0.00',
    },
    {
        income: 'Staking',
        amount: 'PKR 0.00',
        other: 'Margin fees',
        otherAmount: 'PKR 0.00',
    },
    {
        income: 'Payments',
        amount: 'PKR 0.00',
    },
    {
        income: 'Interest',
        amount: 'PKR 0.00',
    },
    {
        income: 'other',
        amount: 'PKR 0.00',
    },
    {
        income: 'Total income',
        amount: 'PKR 0.00',
    },
];

const tabsStyles = {
    '& .Mui-selected': {
        color: '#585858 !important ',
        borderBottom: '2px solid #000',
    },
    '& .MuiTabs-indicator': {
        position: 'relative',
    },
    backgroundColor: '#ffffff',
    mb: '1.5rem',
};

const tabStyles = {
    fontSize: { xs: '7px', md: '13px' },
    color: '#585858 !important',
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
}
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TaxAbleIcome = () => {
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:600px)');
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        fontFamily: 'Poppins',
        fontSize: matches ? '14px' : '8px',

        color: `${theme.palette.text.white}`,
        fontWeight: 500,
        [`&.${tableCellClasses.head}`]: {
            border: 0,
        },
        [`&.${tableCellClasses.body}`]: {
            border: 0,
        },
    }));
    const StyledTableCell2 = styled(TableCell)(({ theme }) => ({
        fontFamily: 'Poppins',
        fontSize: matches ? '14px' : '7px',
        color: `${theme.palette.text.lightbrown}`,
        fontWeight: 500,
        [`&.${tableCellClasses.head}`]: {
            border: 0,
        },
        [`&.${tableCellClasses.body}`]: {
            border: 0,
        },
    }));
    return (
        <>
            <Grid container sx={{ mt: 2, justifyContent: 'space-between' }}>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                        background:
                            'linear-gradient(180deg, rgba(11, 123, 196, 0.1) 0%, rgba(91, 172, 222, 0.1) 100%)',
                        borderRadius: '17px',
                        border: '2px solid #4FA9E3',
                        mt: 5,
                        pb: 5,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: '10px', md: '17px' },
                            fontWeight: 700,
                            fontFamily: 'Poppins',
                            textAlign: 'center',
                            color: `${theme.palette.text.darkblue}`,
                            my: 2,
                        }}
                    >
                        Taxable income
                    </Typography>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead
                                sx={{
                                    background: 'linear-gradient(180deg, #4FA9E3 0%, #A1DAFD 100%)',
                                    borderRadius: '0px',
                                }}
                            >
                                <TableRow>
                                    <StyledTableCell>Taxable income</StyledTableCell>
                                    <StyledTableCell align="left">Amount</StyledTableCell>
                                    <StyledTableCell align="left">
                                        Other transactions
                                    </StyledTableCell>
                                    <StyledTableCell align="right">Amount</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {taxAbleIncome.map((item, i) => (
                                    <TableRow
                                        key={i}
                                        sx={{
                                            '&:last-child td, &:last-child th': {
                                                border: 0,
                                            },
                                        }}
                                    >
                                        <StyledTableCell2 component="th" scope="row">
                                            {item.income}
                                        </StyledTableCell2>
                                        <StyledTableCell2 align="left" sx={{ fontWeight: 600 }}>
                                            {item.amount}
                                        </StyledTableCell2>
                                        <StyledTableCell2 align="left">
                                            {item.other}
                                        </StyledTableCell2>
                                        <StyledTableCell2 align="right" sx={{ fontWeight: 600 }}>
                                            {item.otherAmount}
                                        </StyledTableCell2>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} md={5} mt={5}>
                    <Typography
                        fontSize="17px"
                        fontWeight={600}
                        color={theme.palette.text.darkblue}
                    >
                        Tax summary by wallet
                    </Typography>
                    <Tabs
                        component={Paper}
                        elevation
                        sx={tabsStyles}
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab sx={{ ...tabStyles }} label="Exchanges" {...a11yProps(0)} />
                        <Tab sx={{ ...tabStyles }} label="Crypto wallets" {...a11yProps(1)} />
                        <Tab sx={{ ...tabStyles }} label="Imported wallets" {...a11yProps(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <InputBase
                            placeholder="No exchanges to show."
                            sx={{
                                border: '2px solid #0B7BC3',
                                padding: '20px',
                                borderRadius: '10px',
                                width: '80%',
                                background:
                                    'linear-gradient(180deg, rgba(11, 123, 196, 0.05) 0%, rgba(91, 172, 222, 0.05) 100%)',
                            }}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <InputBase
                            placeholder="No exchanges to show."
                            sx={{
                                border: '2px solid #0B7BC3',
                                padding: '20px',
                                borderRadius: '10px',
                                width: '80%',
                            }}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <InputBase
                            placeholder="No exchanges to show."
                            sx={{
                                border: '2px solid #0B7BC3',
                                padding: '20px',
                                borderRadius: '10px',
                                width: '80%',
                            }}
                        />
                    </TabPanel>

                    <Box
                        sx={{
                            backgroundImage: `url(${ReportTaxBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '100% 100%',
                            backgroundPosition: 'center',
                            py: { xs: 3, md: 4 },
                            px: { xs: 1.8, sm: 2, md: 2 },
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: `url(${GainText})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                p: { xs: 1.5, md: 2.7 },
                                width: { xs: '50%', sm: '35%', md: '200px' },
                                borderRadius: '7px',
                                mt: { xs: '3px', md: '1px' },
                            }}
                        >
                            <Typography
                                fontSize={{ xs: '7px', md: '14px' }}
                                fontFamily={'Poppins'}
                                color={theme.palette.text.white}
                            >
                                Tax reports
                            </Typography>
                        </Box>
                        <Typography
                            sx={{
                                fontSize: { xs: '7px', md: '12px' },
                                fontFamily: 'Poppins',
                                color: `${theme.palette.text.white}`,
                                fontWeight: 400,
                                p: 1.5,
                            }}
                        >
                            Review the tax checklist and transaction history below before
                            downloading tax reports
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: { xs: '9px', md: '15px' },
                                fontFamily: 'Poppins',
                                color: `${theme.palette.text.white}`,
                                p: 1.5,
                                fontWeight: 600,
                            }}
                        >
                            CSV reports
                        </Typography>

                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={1.5}
                        >
                            <Box
                                sx={{
                                    background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
                                    width: '35%',
                                    borderRadius: '3px',
                                    p: 2,
                                    minHeight: { xs: '100px', md: '115px' },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: '6px', md: '10px' },
                                        fontFamily: 'Poppins',
                                        color: `${theme.palette.text.white}`,
                                        fontWeight: 600,
                                        textAlign: 'center',
                                    }}
                                >
                                    Transaction History CSV
                                </Typography>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mt={2}
                                >
                                    <Button
                                        variant="btn1"
                                        sx={{ fontSize: '8px', p: { xs: '1px', md: '5px' } }}
                                    >
                                        Download
                                    </Button>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
                                    // opacity: 0.2,
                                    // position: 'relative',
                                    borderRadius: '3px',
                                    p: 2,
                                    width: '50%',
                                    minHeight: { xs: '100px', md: '115px' },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: '6px', md: '10px' },
                                        fontFamily: 'Poppins',
                                        color: `${theme.palette.text.white}`,
                                        fontWeight: 600,
                                        textAlign: 'center',
                                    }}
                                >
                                    Capital Gains CSV
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '5px', md: '7px' },
                                        fontFamily: 'Poppins',
                                        color: `${theme.palette.text.white}`,
                                        fontWeight: 400,
                                        textAlign: 'center',
                                    }}
                                >
                                    Review the tax checklist and transaction history below before
                                    downloading tax reports
                                </Typography>
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    mt={2}
                                >
                                    <Button
                                        variant="btn1"
                                        sx={{ fontSize: '8px', p: { xs: '1px', md: '5px' } }}
                                    >
                                        Download
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Box mt={10}>
                <Typography
                    sx={{
                        fontSize: { xs: '10px', md: '20px' },
                        fontWeight: 700,
                        fontFamily: 'Poppins',
                        textAlign: 'center',
                        color: `${theme.palette.text.darkblue}`,
                        mb: 2,
                    }}
                >
                    Tax checklist
                </Typography>
                <Grid container spacing={4} justifyContent={'center'}>
                    {[
                        {
                            title: 'Confirm your settings',
                            des: 'Pakistan, PKR base currency,FIFO cost basis method, universal tracking',
                            btn: 'Settings',
                        },
                        {
                            title: 'Add all exchanges    & wallets',
                            des: '0 exchanges, 1 cryptowallets, 0 imported',
                            btn: 'Review',
                        },
                        {
                            title: 'Review transactions',
                            des: 'Review your transaction    history for completeness                 and accuracy.',
                            btn: 'Review    ',
                        },
                    ].map((item, i) => {
                        return (
                            <Grid item xs={12} lg={3} sm={6} md={4} key={i}>
                                <Box
                                    sx={{
                                        padding: '2rem 3rem',
                                        background: `url(${careercard}) `,
                                        backgroundSize: '100% 100%',
                                        minHeight: '300px',
                                        height: '100%',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { md: '17px', sm: '13px', xs: '12px' },
                                            fontWeight: 600,
                                            fontFamily: 'Poppins',
                                            mt: 4,
                                            textAlign: 'center',
                                            color: `${theme.palette.text.darkblue}`,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        color={theme.palette.text.lightbrown}
                                        sx={{
                                            fontSize: { md: '13px', sm: '9px', xs: '8px' },
                                            fontWeight: 600,
                                            fontFamily: 'Poppins',
                                            mt: 4,
                                            textAlign: 'center',
                                        }}
                                    >
                                        {item.des}
                                    </Typography>
                                    <Box sx={{ marginTop: '2rem', textAlign: 'center' }}>
                                        <Button variant="btn1" px={2}>
                                            {item.btn}
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </>
    );
};

export default TaxAbleIcome;
