import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
} from '@mui/material';

const CoinTable = ({ data }) => {
    const columns = ['Coin', 'Price (PKR)', '1-Day Change', 'Market Cap', '1-Day Volume', 'Supply'];

    return (
        <TableContainer component={Paper} sx={{mt:5}} >
            <Table>
                <TableHead
                    sx={{
                        background:
                            'linear-gradient(180deg, #29A3F1 -27.01%, #2896DC 36.23%, #0B7AC1 110.95%)',
                        boxShadow: ' 0px 5px 20px 0px #0B7BC3 inset',
                    }}
                >
                    <TableRow  >
                        {columns.map((column) => (
                            <TableCell sx={{color:'white'}} key={column}>{column}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>
                               <Box display="flex" gap={'10px'}>
                               <img
                                    src={row.coin.icon}
                                    alt={row.coin.short}
                                    style={{ width: '30px', marginRight: '5px' }}
                                />
                                
                               <Typography >
                               {row.coin.short}
                               <Typography fontSize={'10px'} fontWeight={500}>{row.coin.coinName}</Typography>
                               </Typography>
                               </Box>
                            </TableCell>
                            <TableCell>{`${row.price.currency} ${row.price.value}`}</TableCell>
                            <TableCell>{`${row.oneDayChange}%`}</TableCell>
                            <TableCell>{row.marketCap}</TableCell>
                            <TableCell>{row.oneDayVolume}</TableCell>
                            <TableCell>{row.supply}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CoinTable;
