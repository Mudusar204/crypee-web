import { useState } from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
    Stack,
    useMediaQuery,
    useTheme,
    Pagination,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { url } from '../../URL';

import sendIcon from '../../images/send_icon.png';
import receiveIcon from '../../images/receive_icon.png';
// import ethIcon from '../../images/eth_icon.png';
// import usdtIcon from '../../images/usdt_icon.png';

const icons = {
    receiveIcon: receiveIcon,
    sendIcon: sendIcon,
    // ethIcon: ethIcon,
    // usdtIcon: usdtIcon,
};

const History = ({
    historyDetails,
    forTransactionsPage,
    totalPages,
    page,
    setPage,
    rowsPerPage,
    setRowsPerPage,
}) => {
    const theme = useTheme();

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

    const StyledCell = styled(TableCell)({
        width: forTransactionsPage ? '25%' : '20%',
        textAlign: !forTransactionsPage && 'center',
        padding: '2em 1.9em',
        boxSizing: 'border-box',
    });

    const StyledHeadCell = styled(TableCell)({
        color: 'white',
        textAlign: !forTransactionsPage && 'center',
        padding: '20px',
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // const startIndex = (page - 1) * rowsPerPage;
    // const endIndex = startIndex + rowsPerPage;
    // const displayedHistoryDetails = historyDetails?.slice(startIndex, endIndex);
    // const totalRows = historyDetails?.length;
    // const totalPages = Math.ceil(totalRows / rowsPerPage);

    return (
        <>
            {isMobile ? (
                <TableContainer>
                    <Table sx={{ mt: '1.5rem' }}>
                        <TableHead
                            sx={{
                                boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                                border: '2px solid #E7F4FF',
                                borderRadius: '15px',
                                background: 'white',
                            }}
                        >
                            <TableRow
                                sx={{
                                    '&:first-of-type th:first-of-type': {
                                        borderTopLeftRadius: '17px',
                                    },
                                    '&:first-of-type th:last-of-type': {
                                        borderTopRightRadius: '17px',
                                    },
                                }}
                            >
                                {forTransactionsPage ? (
                                    <>
                                        <StyledHeadCell
                                            sx={{
                                                fontFamily: 'Gmarket',
                                                fontSize: '1rem',
                                                fontWeight: '800',
                                                textTransform: 'uppercase',
                                            }}
                                        >
                                            Transactions
                                        </StyledHeadCell>
                                        <StyledHeadCell></StyledHeadCell>
                                    </>
                                ) : (
                                    <>
                                        <StyledHeadCell>Coin</StyledHeadCell>
                                        <StyledHeadCell>Prices</StyledHeadCell>
                                        <StyledHeadCell>ID</StyledHeadCell>
                                    </>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody
                            sx={{
                                bgcolor: '#e8f3f9',

                                '&:last-of-type tr:last-of-type td:first-of-type': {
                                    borderBottomLeftRadius: '17px',
                                },
                                '&:last-of-type tr:last-of-type td:last-of-type': {
                                    borderBottomRightRadius: '17px',
                                },
                                '&:last-of-type tr:last-of-type td': {
                                    border: 0,
                                },
                            }}
                        >
                            {displayedHistoryDetails.map((item, i) => {
                                return (
                                    <TableRow key={i}>
                                        {forTransactionsPage ? (
                                            <>
                                                <StyledCell width="30%">
                                                    <Stack
                                                        direction={'row'}
                                                        alignItems={'center'}
                                                        gap={1}
                                                    >
                                                        {item.transaction.status?.toLowerCase() ===
                                                        'receive' ? (
                                                            <img
                                                                width={25}
                                                                height={25}
                                                                src={receiveIcon}
                                                                alt="icon"
                                                            />
                                                        ) : (
                                                            <img
                                                                width={25}
                                                                height={25}
                                                                src={sendIcon}
                                                                alt="icon"
                                                            />
                                                        )}

                                                        <Box>
                                                            <Typography
                                                                color="text.lightblue"
                                                                sx={{
                                                                    fontSize: {
                                                                        xs: '0.75rem',
                                                                        sm: '1rem',
                                                                    },
                                                                    fontWeight: 600,
                                                                }}
                                                            >
                                                                {item.transaction?.status}
                                                            </Typography>
                                                            <Typography
                                                                sx={{
                                                                    color: '#585858',
                                                                    fontSize: {
                                                                        xs: '0.625rem',
                                                                        sm: '0.9rem',
                                                                    },
                                                                }}
                                                            >
                                                                {item.transaction?.theDate}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </StyledCell>

                                                <StyledCell width="30%">
                                                    <Stack
                                                        justifyContent={'flex-end'}
                                                        direction={'row'}
                                                    >
                                                        <Box>
                                                            <Stack
                                                                direction={'row'}
                                                                alignItems={'center'}
                                                            >
                                                                <Typography
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        fontSize: {
                                                                            xs: '0.65rem',
                                                                            sm: '0.9rem',
                                                                        },
                                                                    }}
                                                                >
                                                                    {item.outgoing?.coin}
                                                                </Typography>
                                                            </Stack>
                                                        </Box>
                                                        <img
                                                            src={icons[item.outgoing?.icon]}
                                                            alt=""
                                                        />
                                                    </Stack>
                                                </StyledCell>
                                            </>
                                        ) : (
                                            <>
                                                <StyledCell sx={{ textAlign: 'start' }}>
                                                    <Stack
                                                        alignItems={'center'}
                                                        direction={'row'}
                                                        gap={1}
                                                    >
                                                        <img
                                                            width={40}
                                                            height={40}
                                                            src={icons[item.coin?.icon]}
                                                            alt="icon"
                                                        />
                                                        <Box>
                                                            <Typography
                                                                sx={{
                                                                    fontSize: {
                                                                        xs: '0.75rem',
                                                                        sm: '1rem',
                                                                    },
                                                                    fontWeight: 600,
                                                                }}
                                                            >
                                                                {item.coin?.short}
                                                            </Typography>
                                                            <Typography
                                                                sx={{
                                                                    color: '#585858',
                                                                    fontSize: {
                                                                        xs: '8px',
                                                                        sm: '12px',
                                                                    },
                                                                }}
                                                            >
                                                                {item.coin?.coinName}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </StyledCell>
                                                <StyledCell
                                                    sx={{
                                                        fontSize: { xs: '0.7rem', sm: 'unset' },
                                                        color: '#585858',
                                                    }}
                                                >
                                                    {item.price?.currency}
                                                    {item.price?.value}
                                                </StyledCell>

                                                <StyledCell>
                                                    <Box>
                                                        <Typography
                                                            sx={{
                                                                fontSize: { xs: '0.7rem' },
                                                                margin: 'auto',
                                                                width: '60px',
                                                                padding: '0.4em',
                                                                borderRadius: '5px',
                                                                bgcolor:
                                                                    +item.oneDayChange > 0
                                                                        ? `${theme.palette.background.greenColor}`
                                                                        : `${theme.palette.background.redColor}`,
                                                            }}
                                                        >
                                                            {item?.oneDayChange}%
                                                        </Typography>
                                                    </Box>
                                                </StyledCell>
                                            </>
                                        )}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                    <PaginationWrapper padding="5px 10px">
                        <Pagination
                            color="primary"
                            count={totalPages}
                            defaultPage={1}
                            page={page}
                            onChange={handleChangePage}
                            labelrowsperpage=""
                        />
                    </PaginationWrapper>
                </TableContainer>
            ) : (
                <TableContainer>
                    <Table sx={{ mt: '1.5rem' }}>
                        <TableHead
                            sx={{ background: 'linear-gradient(180deg, #4FA9E3 0%, #A1DAFD 100%)' }}
                        >
                            <TableRow
                                sx={{
                                    '&:first-of-type th:first-of-type': {
                                        borderTopLeftRadius: '17px',
                                    },
                                    '&:first-of-type th:last-of-type': {
                                        borderTopRightRadius: '17px',
                                    },
                                }}
                            >
                                {forTransactionsPage ? (
                                    <>
                                        <StyledHeadCell>Transaction</StyledHeadCell>
                                        <StyledHeadCell>Outgoing</StyledHeadCell>
                                        <StyledHeadCell>Incoming</StyledHeadCell>
                                        <StyledHeadCell>Fee</StyledHeadCell>
                                        <StyledHeadCell>Downloading CSV</StyledHeadCell>
                                    </>
                                ) : (
                                    <>
                                        <StyledHeadCell>Coin</StyledHeadCell>
                                        <StyledHeadCell>Prices</StyledHeadCell>
                                        <StyledHeadCell>24 Hour Change</StyledHeadCell>
                                        <StyledHeadCell>Market Cap</StyledHeadCell>
                                        <StyledHeadCell>24 Hour Volume</StyledHeadCell>
                                        <StyledHeadCell>Supply</StyledHeadCell>
                                    </>
                                )}
                            </TableRow>
                        </TableHead>
                        <TableBody
                            sx={{
                                bgcolor: 'white',
                                boxShadow: '0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                                '&:last-of-type tr:last-of-type td:first-of-type': {
                                    borderBottomLeftRadius: '17px',
                                },
                                '&:last-of-type tr:last-of-type td:last-of-type': {
                                    borderBottomRightRadius: '17px',
                                },
                                '&:last-of-type tr:last-of-type td': {
                                    border: 0,
                                },
                            }}
                        >
                            {historyDetails && historyDetails.length > 0 ? (
                                historyDetails.map((item, i) => {
                                    console.log(
                                        url + item.incoming?.icon,
                                        'item.incoming.icon',
                                        url + item.outgoing?.icon,
                                        'item.outgoing.icon',
                                    );
                                    let date = new Date(item?.completeTime).toLocaleDateString();
                                    let time = new Date(item?.completeTime).toLocaleTimeString();
                                    return (
                                        <TableRow key={i}>
                                            {forTransactionsPage ? (
                                                <>
                                                    <StyledCell sx={{ textAlign: 'unset' }}>
                                                        <Stack
                                                            direction={'row'}
                                                            alignItems={'center'}
                                                            gap={2}
                                                        >
                                                            {['in', 'deposit', 'buy'].includes(
                                                                item.txType?.toLowerCase(),
                                                            ) ? (
                                                                <img
                                                                    width={25}
                                                                    height={25}
                                                                    src={receiveIcon}
                                                                    alt="icon"
                                                                />
                                                            ) : [
                                                                  'out',
                                                                  'withdrawal',
                                                                  'sell',
                                                              ].includes(
                                                                  item.txType?.toLowerCase(),
                                                              ) ? (
                                                                <img
                                                                    width={25}
                                                                    height={25}
                                                                    src={sendIcon}
                                                                    alt="icon"
                                                                />
                                                            ) : (
                                                                <>
                                                                    <img
                                                                        width={25}
                                                                        height={25}
                                                                        src={sendIcon}
                                                                        alt="icon"
                                                                    />
                                                                    <img
                                                                        width={25}
                                                                        height={25}
                                                                        src={receiveIcon}
                                                                        alt="icon"
                                                                    />
                                                                </>
                                                            )}
                                                            <Box>
                                                                <Typography
                                                                    color="text.lightblue"
                                                                    sx={{
                                                                        fontSize: {
                                                                            xs: '0.75rem',
                                                                            sm: '1rem',
                                                                        },
                                                                        fontWeight: 600,
                                                                    }}
                                                                >
                                                                    {item?.txType}
                                                                </Typography>
                                                                <Typography>{date}</Typography>
                                                                <Typography>{time}</Typography>
                                                            </Box>
                                                        </Stack>
                                                    </StyledCell>
                                                    <StyledCell>
                                                        <Stack
                                                            alignItems={'start'}
                                                            direction={'row'}
                                                            gap={2}
                                                        >
                                                            <Box>
                                                                {!item?.inAmount ? (
                                                                    '_'
                                                                ) : (
                                                                    <>
                                                                        <Stack
                                                                            direction={'row'}
                                                                            alignItems={'center'}
                                                                        >
                                                                            <img
                                                                                width={25}
                                                                                height={25}
                                                                                src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${item?.inCoinId}.png`}
                                                                                alt="icon"
                                                                            />
                                                                            <Typography
                                                                                sx={{
                                                                                    fontWeight: 700,
                                                                                }}
                                                                            >
                                                                                {item?.inAmount}{' '}
                                                                                {item?.inCurrency}
                                                                            </Typography>
                                                                        </Stack>
                                                                        <span>
                                                                            (${item?.inAmountInUSD})
                                                                        </span>
                                                                        <Typography>
                                                                            {item?.symbol}
                                                                        </Typography>
                                                                    </>
                                                                )}
                                                            </Box>
                                                        </Stack>
                                                    </StyledCell>
                                                    <StyledCell>
                                                        <Stack
                                                            alignItems={'center'}
                                                            direction={'row'}
                                                            gap={2}
                                                        >
                                                            <Box>
                                                                {!item?.outAmount ? (
                                                                    '_'
                                                                ) : (
                                                                    <>
                                                                        <Stack
                                                                            direction={'row'}
                                                                            alignItems={'center'}
                                                                        >
                                                                            <img
                                                                                width={25}
                                                                                height={25}
                                                                                src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${item?.outCoinId}.png`}
                                                                                alt="icon"
                                                                            />
                                                                            <Typography
                                                                                sx={{
                                                                                    fontWeight: 700,
                                                                                }}
                                                                            >
                                                                                {item?.outAmount}{' '}
                                                                                {item?.outCurrency}
                                                                            </Typography>
                                                                        </Stack>
                                                                        <span>
                                                                            ${item?.outAmountInUSD}
                                                                        </span>
                                                                        <Typography>
                                                                            {item?.symbol}
                                                                        </Typography>
                                                                    </>
                                                                )}
                                                            </Box>
                                                        </Stack>
                                                    </StyledCell>
                                                    <StyledCell>
                                                        <Box>
                                                            {!item?.fee ? (
                                                                '_'
                                                            ) : (
                                                                <>
                                                                    <Typography
                                                                        sx={{
                                                                            fontWeight: 700,
                                                                            display: 'flex',
                                                                            alignItems: 'center',
                                                                            gap: '0.5em',
                                                                        }}
                                                                    >
                                                                        <img
                                                                            width={25}
                                                                            height={25}
                                                                            src={`https://s2.coinmarketcap.com/static/img/coins/32x32/${item?.outCoinId}.png`}
                                                                            alt="icon"
                                                                        />
                                                                        {item?.fee}
                                                                    </Typography>
                                                                    <span>${item.feeInUSD}</span>
                                                                </>
                                                            )}
                                                        </Box>
                                                    </StyledCell>
                                                    <StyledCell>{/* cell 5 */}</StyledCell>{' '}
                                                </>
                                            ) : (
                                                <>
                                                    <StyledCell
                                                        sx={{ textAlign: 'start', pl: '3em' }}
                                                    >
                                                        <Stack
                                                            alignItems={'center'}
                                                            direction={'row'}
                                                            gap={1}
                                                        >
                                                            <img
                                                                width={40}
                                                                height={40}
                                                                src={icons[item.coin.icon]}
                                                                alt="icon"
                                                            />
                                                            <Box>
                                                                <Typography
                                                                    sx={{
                                                                        fontSize: {
                                                                            xs: '0.75rem',
                                                                            sm: '1rem',
                                                                        },
                                                                        fontWeight: 600,
                                                                    }}
                                                                >
                                                                    {item.coin.short}
                                                                </Typography>
                                                                <Typography
                                                                    sx={{ fontSize: '12px' }}
                                                                >
                                                                    {item.coin.coinName}
                                                                </Typography>
                                                            </Box>
                                                        </Stack>
                                                    </StyledCell>
                                                    <StyledCell>
                                                        {item.price.currency}
                                                        {item.price.value}
                                                    </StyledCell>
                                                    <StyledCell>{item.oneDayChange}</StyledCell>
                                                    <StyledCell>{item.marketCap}</StyledCell>
                                                    <StyledCell>{item.oneDayVolume}</StyledCell>
                                                    <StyledCell>{item.supply}</StyledCell>
                                                </>
                                            )}
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <StyledCell colSpan={7} sx={{ textAlign: 'center' }}>
                                        No record found
                                    </StyledCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <PaginationWrapper
                        sx={{ '& button': { width: '50px', padding: '1.6em 0 1.8em 0' } }}
                    >
                        <Pagination
                            color="primary"
                            count={totalPages}
                            defaultPage={1}
                            page={page}
                            onChange={handleChangePage}
                            labelrowsperpage="10"
                            boundaryCount={1}
                        />
                    </PaginationWrapper>
                </TableContainer>
            )}
        </>
    );
};

export default History;
