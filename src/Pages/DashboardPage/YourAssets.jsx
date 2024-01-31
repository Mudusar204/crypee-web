import React, { useEffect, useState } from 'react';
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
import assetlogo1 from '../../images/assetlogo1.png';
import assetlogo2 from '../../images/assetlog2.png';
import assetlogo3 from '../../images/assetlogo3.png';
import assetlogo4 from '../../images/assetlogo4.png';
import assetlogo5 from '../../images/assetlogo5.png';
import assertsbg from '../../images/dashboard/assertsbg.png';

const rows = [
    {
        name: 'Obortech',
        subName: 'OBOT',
        price: '6.57 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
        logo: assetlogo1,
    },
    {
        name: 'Gains Network',
        subName: 'GNS',
        price: '23.3494 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
        logo: assetlogo2,
    },
    {
        name: 'Tether',
        subName: 'USDT',
        price: '23.3494 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
        logo: assetlogo3,
    },
    {
        name: 'Gala',
        subName: 'GALA',
        price: '24545 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
        logo: assetlogo4,
    },
    {
        name: 'DEAPcoin',
        subName: 'DEP',
        price: '4545.45 PKR',
        holding: '32,970.77 PKR',
        subHolding: '15 GNS',
        returnP: '-299,967.86 PKR',
        logo: assetlogo5,
    },
];

export default function YourAssets({ data }) {
    const [assetsData, setAssetsData] = useState([]);
    useEffect(() => {
        const handleData = async () => {
            let assetArray = [];
            for (let [key, value] of Object.entries(data)) {
                assetArray.push({
                    name: key,
                    data: value,
                });
            }
            setAssetsData(assetArray);
        };
        handleData();
    }, [data]);
    return (
        <>
            <Box px={2}>
                <Stack direction="row" gap={2} justifyContent="space-between">
                    <Typography
                        fontFamily={'Gmarket'}
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: '800',
                            fontSize: { xs: '16px', md: '20px' },
                            lineHeight: '22px',
                            textTransform: 'uppercase',
                            color: '#0B7BC3',
                        }}
                    >
                        Your assets
                    </Typography>
                    <Typography
                        fontFamily={'Gmarket'}
                        sx={{
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: { xs: '13px', md: '15px' },
                            lineHeight: '16px',
                            textAlign: 'center',
                            color: 'var(--Text-Black, #333)',
                            borderBottom: '1px solid #FFFFFF',
                            width: 'max-content',
                        }}
                    >
                        See all assets
                    </Typography>
                </Stack>
                <Box
                    sx={{
                        overflow: 'auto',
                        background: '#F9FCFF',
                        px: 2,
                        py: 2,
                        borderRadius: '10px',
                    }}
                    mt={{ xs: 4, md: 8 }}
                >
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ '& th': { border: 'none' } }}>
                                    <TableCell align="left">
                                        <Box
                                            fontFamily={'Gmarket'}
                                            sx={{
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '18px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'var(--Text-Black, #333)',
                                            }}
                                        >
                                            Name
                                            <UnfoldMoreIcon />
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '18px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'var(--Text-Black, #333)',
                                            }}
                                        >
                                            Price
                                            <UnfoldMoreIcon />
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '18px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: 'var(--Text-Black, #333)',
                                            }}
                                        >
                                            Holdings
                                            <UnfoldMoreIcon />
                                        </Box>
                                    </TableCell>
                                    {/* <TableCell align="right">
                                        <Box
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontStyle: 'normal',
                                                fontWeight: '500',
                                                fontSize: '15px',
                                                lineHeight: '18px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'end',
                                                color: 'var(--Text-Black, #333)',
                                            }}
                                        >
                                            All time unrealized return
                                            <UnfoldMoreIcon />
                                        </Box>
                                    </TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {assetsData.map(({ name, data }, i) => (
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
                                                <img
                                                    src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${data?.coinId}.png`}
                                                    alt="logo"
                                                    width={'40px'}
                                                />
                                                <Box>
                                                    <Box
                                                        sx={{
                                                            fontFamily: 'Gmarket',
                                                            fontStyle: 'normal',
                                                            fontWeight: '600',
                                                            fontSize: '12px',
                                                            lineHeight: '18px',
                                                            color: 'var(--Text-Black, #333)',
                                                        }}
                                                    >
                                                        {data?.exchange}
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            fontFamily: 'Poppins',
                                                            fontStyle: 'normal',
                                                            fontWeight: '400',
                                                            fontSize: '10px',
                                                            lineHeight: '18px',
                                                            color: 'var(--Text-Black, #333)',
                                                        }}
                                                    >
                                                        {data?.symbol}
                                                    </Box>
                                                </Box>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>
                                            <Box
                                                sx={{
                                                    fontFamily: 'Gmarket',
                                                    fontStyle: 'normal',
                                                    fontWeight: '400',
                                                    fontSize: '15px',
                                                    lineHeight: '18px',
                                                    color: 'var(--Text-Black, #333)',
                                                }}
                                            >
                                                {`($ ${data?.balanceInUSD})`}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Stack direction="row" gap={1} alignItems={'center'}>
                                                <Box
                                                    sx={{
                                                        fontFamily: 'Poppins',
                                                        fontStyle: 'normal',
                                                        fontWeight: '700',
                                                        fontSize: '15px',
                                                        lineHeight: '18px',
                                                        color: 'var(--Text-Black, #333)',
                                                    }}
                                                >
                                                    {data?.amount}
                                                </Box>
                                            </Stack>
                                        </TableCell>
                                        {/* <TableCell align="right">
                                            <Button variant="btn1">-39.72%</Button>
                                            <Box
                                                sx={{
                                                    mt: 1,
                                                    fontFamily: 'Gmarket',
                                                    fontStyle: 'normal',
                                                    fontWeight: '500',
                                                    fontSize: '13px',
                                                    lineHeight: '18px',
                                                    color: 'var(--Text-Black, #333)',
                                                }}
                                            >
                                                returncap
                                            </Box>
                                        </TableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </>
    );
}
