import React from 'react';
import {
    Avatar,
    Box,
    Button,
    Container,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

import assertsbg from '../../images/dashboard/assertsbg.png';
const rows = [
    {
        name: 'Obortech',
        subName: 'OBOT',
        price: '6.57 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
    },
    {
        name: 'Obortech',
        subName: 'OBOT',
        price: '6.57 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
    },
    {
        name: 'Obortech',
        subName: 'OBOT',
        price: '6.57 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
    },
    {
        name: 'Obortech',
        subName: 'OBOT',
        price: '6.57 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
    },
    {
        name: 'Obortech',
        subName: 'OBOT',
        price: '6.57 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
    },
];

export default function YourAssets() {
    return (
        <>
            <Box
                sx={{
                    background: `url(${assertsbg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center center',
                    width: '100%',
                    py: { xs: 7, md: 10 },
                    px: { xs: 2, sm: 5, md: 10 },
                    my: { xs: 5, md: 8 },
                }}
            >
                <Container maxWidth="lg">
                    <Stack direction="row" gap={2} justifyContent="space-between">
                        <Typography
                            sx={{
                                fontFamily: 'Orbitron',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                fontSize: { xs: '16px', md: '20px' },
                                lineHeight: '22px',
                                textTransform: 'uppercase',
                                color: '#FFFFFF',
                            }}
                        >
                            Your assets
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: { xs: '13px', md: '15px' },
                                lineHeight: '16px',
                                textAlign: 'center',
                                color: '#FFFFFF',
                                borderBottom: '1px solid #FFFFFF',
                                width: 'max-content',
                            }}
                        >
                            See all assets
                        </Typography>
                    </Stack>
                    <Box sx={{ overflow: 'auto' }} mt={{ xs: 4, md: 8 }}>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow sx={{ '& th': { border: 'none' } }}>
                                        <TableCell align="left">
                                            <Box
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '15px',
                                                    lineHeight: '18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#F1F0F0',
                                                }}
                                            >
                                                Name
                                                <UnfoldMoreIcon />
                                            </Box>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Box
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '15px',
                                                    lineHeight: '18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#F1F0F0',
                                                }}
                                            >
                                                Price
                                                <UnfoldMoreIcon />
                                            </Box>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Box
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '15px',
                                                    lineHeight: '18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    color: '#F1F0F0',
                                                }}
                                            >
                                                Holdings
                                                <UnfoldMoreIcon />
                                            </Box>
                                        </TableCell>
                                        <TableCell align="right">
                                            <Box
                                                sx={{
                                                    fontFamily: 'Poppins',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '15px',
                                                    lineHeight: '18px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'end',
                                                    color: '#F1F0F0',
                                                }}
                                            >
                                                All time unrealized return
                                                <UnfoldMoreIcon />
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row, i) => (
                                        <TableRow
                                            key={i}
                                            sx={{
                                                '& td': {
                                                    borderColor: '#125A86',
                                                    borderWidth: '2px',
                                                },
                                                '&:last-child td, &:last-child th': {
                                                    border: 0,
                                                },
                                            }}
                                        >
                                            <TableCell>
                                                <Stack direction="row" gap={1}>
                                                    <Avatar />
                                                    <Box>
                                                        <Box
                                                            sx={{
                                                                fontFamily: 'Poppins',
                                                                fontStyle: 'normal',
                                                                fontWeight: '600',
                                                                fontSize: '12px',
                                                                lineHeight: '18px',
                                                                color: '#F1F0F0',
                                                            }}
                                                        >
                                                            {row.name}
                                                        </Box>
                                                        <Box
                                                            sx={{
                                                                fontFamily: 'Poppins',
                                                                fontStyle: 'normal',
                                                                fontWeight: '400',
                                                                fontSize: '10px',
                                                                lineHeight: '18px',
                                                                color: '#F1F0F0',
                                                            }}
                                                        >
                                                            {row.subName}
                                                        </Box>
                                                    </Box>
                                                </Stack>
                                            </TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        fontFamily: 'Poppins',
                                                        fontStyle: 'normal',
                                                        fontWeight: '500',
                                                        fontSize: '13px',
                                                        lineHeight: '18px',
                                                        color: '#F1F0F0',
                                                    }}
                                                >
                                                    {row.price}
                                                </Box>
                                            </TableCell>
                                            <TableCell>
                                                <Box
                                                    sx={{
                                                        fontFamily: 'Poppins',
                                                        fontStyle: 'normal',
                                                        fontWeight: '700',
                                                        fontSize: '15px',
                                                        lineHeight: '18px',
                                                        color: '#F1F0F0',
                                                    }}
                                                >
                                                    {row.holding}
                                                </Box>
                                                <Box
                                                    sx={{
                                                        fontFamily: 'Poppins',
                                                        fontStyle: 'normal',
                                                        fontWeight: '400',
                                                        fontSize: '15px',
                                                        lineHeight: '18px',
                                                        color: '#F1F0F0',
                                                    }}
                                                >
                                                    {row.subHolding}
                                                </Box>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button variant="btn1">-39.72%</Button>
                                                <Box
                                                    sx={{
                                                        mt: 1,
                                                        fontFamily: 'Poppins',
                                                        fontStyle: 'normal',
                                                        fontWeight: '500',
                                                        fontSize: '13px',
                                                        lineHeight: '18px',
                                                        color: '#F1F0F0',
                                                    }}
                                                >
                                                    {row.returnP}
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Container>
            </Box>
        </>
    );
}
