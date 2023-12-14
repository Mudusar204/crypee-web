import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box, useTheme, useMediaQuery, styled } from '@mui/material';
import Pagination from '@mui/material/Pagination';

const CoinTable = ({ data }) => {
    const columns = ['Coin', 'Price (PKR)', '1-Day Change', 'Market Cap', '1-Day Volume', 'Supply'];
    const theme = useTheme();
    const [page, setPage] = useState(1);
    const rowsPerPage = 13;

    const isMobile = useMediaQuery('(max-width: 900px)');

    const PaginationWrapper = styled(Box)({
        display: 'flex',
        justifyContent: 'center',
        mt: 2,
        '& .Mui-selected': {
            background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
            color: '#fff',
        },
        '& button': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px',
            borderRadius: '50%',
            cursor: 'pointer',
            backgroundColor: 'white',
            border: '1px solid #5BBFFF',
            fontWeight: '500',
        },
        '& button:hover': {
            backgroundColor: '#A1DAFD',
            color: '#fff',
        },
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const itemsPerPage = 5;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const displayedHistoryDetails = data.slice(startIndex, endIndex);
    const totalRows = data.length;
    const totalPages = Math.ceil(totalRows / itemsPerPage);

    return (
        <Box>
            <TableContainer component={Paper} sx={{ mt: 5 }}>
                <Table>
                    <TableHead
                        sx={{
                            background:
                                'linear-gradient(180deg, #29A3F1 -27.01%, #2896DC 36.23%, #0B7AC1 110.95%)',
                            boxShadow: ' 0px 5px 20px 0px #0B7BC3 inset',
                        }}
                    >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell sx={{ color: 'white' }} key={column}>
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {displayedHistoryDetails.map((row, index) => (
                            <TableRow key={index}>
                            <TableCell>
                                <Box display="flex" gap={'10px'}>
                                    <img
                                        src={row.coin.icon}
                                        alt={row.coin.short}
                                        style={{ width: '30px', marginRight: '5px' }}
                                    />
                    
                                    <Typography>
                                        {row.coin.short}
                                        <Typography fontSize={'10px'} fontWeight={500}>
                                            {row.coin.coinName}
                                        </Typography>
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
            <PaginationWrapper sx={{ '& button': { width: '50px', padding: '1.6em 0 1.8em 0' } }}>
                <Pagination
                    color="primary"
                    count={totalPages}
                    defaultPage={1}
                    page={page}
                    onChange={handleChangePage}
                    labelRowsPerPage=""
                />
            </PaginationWrapper>
        </Box>
    );
};

export default CoinTable;











