import React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    tableCellClasses,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { KeyboardArrowDown, MoreVert, GroupAdd } from '@mui/icons-material';
import CapitalBg from '../../images/Taxes/capitalBg.png';
import GainText from '../../images/Taxes/gainBg.png';
import Navigation from '../../Components/Navigation';
import Capitalgainbg from '../../images/Taxes/capitalgainbg.png'

import TaxAbleIcome from './TaxAbleIcome';

const capitalGainArray = [
    {
        type: 'Crypto-to-crypto gains',
        shortTerm: 'PKR 0.00',
        longTerm: 'PKR 0.00',
    },
    {
        type: 'Other capital gains',
        shortTerm: 'PKR 0.00',
        longTerm: '+PKR47,142.78',
    },
    {
        type: 'Total capital gains',
        shortTerm: 'PKR 0.00',
        longTerm: '+PKR47,142.78',
    },
];

const Taxes = () => {
    const theme = useTheme();
    const matches = useMediaQuery('(min-width:600px)');

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        fontFamily: 'Gmarket',
        fontSize: matches ? '14px' : '8px',
        padding: '1.2rem',

        color: `${theme.palette.text.white}`,
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
            <Navigation />

            <Container maxWidth="xl" sx={{ px: { xs: 5, sm: 10 } }}>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    mb={20}
                >
                    <Stack
                        alignItems={{ xs: 'center', md: 'flex-start' }}
                        justifyContent={'center'}
                      
                    >
                        <Typography
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '25px',
                                fontWeight: 800,
                                fontFamily: 'Gmarket',
                                color: `${theme.palette.text.darkblue}`,
                                textTransform: 'uppercase',
                            }}
                        >
                            2023 Taxes
                            <KeyboardArrowDown />
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: '15px',
                                fontWeight: 400,
                                color: `${theme.palette.text.lightbrown}`,
                            }}
                        >
                            January 1 2023 to December 31 2023
                        </Typography>
                    </Stack>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        marginTop={{ xs: '20px', md: '0px' }}
                    >
                        <Button
                            variant="btn4"
                            sx={{ minHeight: { xs: '30px', md: '48px' }, minWidth: '0px' }}
                        >
                            <MoreVert sx={{ color: '#000' }} />
                        </Button>
                        <Button
                            variant="btn1"
                            sx={{ p: { xs: '8px', md: 1.5 }, fontSize: { xs: '9px', md: '16px' } }}
                        >
                            <GroupAdd sx={{ mr: 1 }} />
                            Add tax Professional
                        </Button>
                    </Box>
                </Box>
                <Grid container sx={{ mt: 2, justifyContent: 'space-between' }}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                               boxShadow:"0px 0px 60px 0px rgba(0, 0, 0, 0.05)",
                               background:'white',
                               borderRadius:'15px',
                               border:'2px solid #E7F4FF',
                               
                               
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: `url(${Capitalgainbg})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    borderTopRightRadius:'15px',
                                    borderTopLeftRadius:'15px',
                                    py:3
                                    
                                }}
                            >
                                <Typography
                                    fontSize={{ xs: '7px', md: '14px' }}
                                    fontFamily={'Poppins'}
                                    color={theme.palette.text.white}
                                    px={2}
                                >
                                    Capital gains
                                </Typography>
                            </Box>

                            <TableContainer>
                                <Table aria-label="simple table" >
                                    <TableHead >
                                        <TableRow >
                                            <StyledTableCell align="left" sx={{color:'black'}}>
                                                Gain Type
                                            </StyledTableCell>
                                            <StyledTableCell align="right" sx={{color:'black'}}>
                                                Short Term
                                            </StyledTableCell>
                                            <StyledTableCell align="right" sx={{color:'black'}}>
                                                Long Term
                                            </StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {capitalGainArray.map((item, i) => (
                                            <TableRow
                                                key={i}
                                                sx={{
                                                    '&:last-child td, &:last-child th': {
                                                        border: 0,
                                                    },
                                                }}
                                            >
                                                <StyledTableCell component="th" scope="row" sx={{color:'black'}}>
                                                    {item.type}
                                                </StyledTableCell>
                                                <StyledTableCell align="right" sx={{color:'black'}}>
                                                    {item.shortTerm}
                                                </StyledTableCell>
                                                <StyledTableCell align="right" sx={{color:'black'}}>
                                                    {item.longTerm}
                                                </StyledTableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Stack
                            direction={'row'}
                            alignItems="center"
                            justifyContent="space-between"
                            mb={2}
                            mt={{ xs: 1, md: 0 }}
                        >
                            <Box>
                                <Typography
                                     fontFamily={'Gmarket'}
                                    fontSize={{ xs: '8px', md: '14px' }}
                                    fontWeight={600}
                                    color={theme.palette.text.darkblue}
                                >
                                    Free tax plan
                                </Typography>
                                <Typography
                                      fontFamily={'Gmarket'}
                                    fontSize={{ xs: '8px', md: '14px' }}
                                    color={theme.palette.text.lightbrown}
                                >
                                    Up to 25 transactions
                                </Typography>
                            </Box>
                            <Button variant="btn4" sx={{ fontSize: { xs: '9px', md: '16px' } }}>
                                Upgrade plan
                            </Button>
                        </Stack>

                        <Box
                            sx={{
                                boxShadow:"0px 0px 60px 0px rgba(0, 0, 0, 0.05)",
                               background:'white',
                               borderRadius:'15px',
                               border:'2px solid #E7F4FF',
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: `url(${Capitalgainbg})`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: '100% 100%',
                                    backgroundPosition: 'center',
                                    borderTopRightRadius:'15px',
                                    borderTopLeftRadius:'15px',
                                    py:3
                                }}
                            >
                                <Typography
                                    fontSize={{ xs: '7px', md: '14px' }}
                                    fontFamily={'Gmarket'}
                                    color={theme.palette.text.white}
                                    px={2}
                                >
                                    Transaction history
                                </Typography>
                            </Box>
                            <Typography
                                 fontFamily={'Gmarket'}
                                fontSize="15px"
                                color={theme.palette.text.black}
                                fontWeight={600}
                                textAlign="center"
                                mt={6}
                                mb={2}
                            >
                                Transactions 22
                            </Typography>
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                gap={3}
                                mb={3}
                            >
                                <Button
                                    variant="btn1"
                                    sx={{
                                        fontSize: { xs: '7px', md: '12px' },
                                        px: 4,
                                        py: 1,
                                    }}
                                >
                                    10 sent
                                </Button>
                                <Button
                                    variant="btn1"
                                    sx={{
                                        fontSize: { xs: '7px', md: '12px' },
                                        px: 4,
                                        py: 1,
                                    }}
                                >
                                    12 received
                                </Button>
                                <Button
                                    variant="btn1"
                                    sx={{
                                        fontSize: { xs: '7px', md: '12px' },
                                        px: 4,
                                        py: 1,
                                    }}
                                >
                                    1 need review
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* New component   'TaxAbleIcome' */}
                <TaxAbleIcome />
            </Container>
        </>
    );
};

export default Taxes;
