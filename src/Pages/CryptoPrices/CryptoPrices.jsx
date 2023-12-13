import { Box, Container } from '@mui/material';

import Navigation from '../../Components/Navigation';
import SearchSection from './SearchSection';
import CoinsPrices from './CoinsPrices';
import History from '../Transactions/History';
import tetherImg from '../../images/coins/tether_img.png';
import bitcoinImg from '../../images/coins/bitcoin_img.png';
import etherImg from '../../images/coins/ether_img.png';
import usdcImg from '../../images/coins/usdc_img.png';
import busdImg from '../../images/coins/busd_img.png';
import wethImg from '../../images/coins/weth_img.png';
import daiImg from '../../images/coins/dai_img.png';
import xrpImg from '../../images/coins/xrp_img.png';
import litecoinImg from '../../images/coins/litecoin_img.png';
import solanaImg from '../../images/coins/solana_img.png';
import froggiesImg from '../../images/coins/froggies_img.png';
import maticImg from '../../images/coins/matic_img.png';
import bnbImg from '../../images/coins/bnb_img.png';
import CoinTable from './Cryptohistory';

const historyDetails = [
    {
        coin: { short: 'USDT', coinName: 'Tether', icon: tetherImg },
        price: { currency: 'PKR', value: '212.89' },
        oneDayChange: '-0.48',
        marketCap: '8.1T',
        oneDayVolume: '15.9T',
        supply: '79.5B',
    },
    {
        coin: { short: 'BTC', coinName: 'Bitcoin', icon: bitcoinImg },
        price: { currency: 'PKR', value: '336.91' },
        oneDayChange: '2.82',
        marketCap: '5.5T',
        oneDayVolume: '14.7T',
        supply: '57.2B',
    },
    {
        coin: { short: 'ETH', coinName: 'Ether', icon: etherImg },
        price: { currency: 'PKR', value: '117.23' },
        oneDayChange: '-1.1',
        marketCap: '14.2T',
        oneDayVolume: '18.5T',
        supply: '97.9B',
    },
    {
        coin: { short: 'USDC', coinName: 'USD Coin', icon: usdcImg },
        price: { currency: 'PKR', value: '221.51' },
        oneDayChange: '-1.2',
        marketCap: '6.9T',
        oneDayVolume: '17.7T',
        supply: '76.6B',
    },
    {
        coin: { short: 'BUSD', coinName: 'Binance USD', icon: busdImg },
        price: { currency: 'PKR', value: '167.64' },
        oneDayChange: '0.42',
        marketCap: '28.0T',
        oneDayVolume: '9.9T',
        supply: '79.1B',
    },
    {
        coin: { short: 'WETH', coinName: 'Weth', icon: wethImg },
        price: { currency: 'PKR', value: '353.79' },
        oneDayChange: '0.11',
        marketCap: '10.8T',
        oneDayVolume: '12.2T',
        supply: '79.6B',
    },
    {
        coin: { short: 'DAI', coinName: 'Dai', icon: daiImg },
        price: { currency: 'PKR', value: '156.12' },
        oneDayChange: '-1.6',
        marketCap: '21.5T',
        oneDayVolume: '10.0T',
        supply: '72.2B',
    },
    {
        coin: { short: 'XRP', coinName: 'XRP', icon: xrpImg },
        price: { currency: 'PKR', value: '310.04' },
        oneDayChange: '-1.6',
        marketCap: '20.7T',
        oneDayVolume: '17.8T',
        supply: '73.9B',
    },
    {
        coin: { short: 'LTC', coinName: 'Litecoin', icon: litecoinImg },
        price: { currency: 'PKR', value: '276.27' },
        oneDayChange: '1.16',
        marketCap: '8.0T',
        oneDayVolume: '18.6T',
        supply: '64.7B',
    },
    {
        coin: { short: 'SOL', coinName: 'Solana', icon: solanaImg },
        price: { currency: 'PKR', value: '272.09' },
        oneDayChange: '-1.0',
        marketCap: '18.9T',
        oneDayVolume: '11.6T',
        supply: '87.0B',
    },
    {
        coin: { short: 'FRGST', coinName: 'Froggies Token', icon: froggiesImg },
        price: { currency: 'PKR', value: '274.91' },
        oneDayChange: '0.67',
        marketCap: '17.4T',
        oneDayVolume: '10.0T',
        supply: '74.8B',
    },
    {
        coin: { short: 'MATIC', coinName: 'Polygon', icon: maticImg },
        price: { currency: 'PKR', value: '311.41' },
        oneDayChange: '-0.8',
        marketCap: '6.7T',
        oneDayVolume: '13.8T',
        supply: '79.3B',
    },
    {
        coin: { short: 'BNB', coinName: 'Binance Coin', icon: bnbImg },
        price: { currency: 'PKR', value: '344.84' },
        oneDayChange: '1.18',
        marketCap: '17.1T',
        oneDayVolume: '5.8T',
        supply: '81.0B',
    },
];

const CryptoPrices = () => {
    return (
        <>
            <Navigation/>
            <Container maxWidth="xl">
                <Box px={{ xs: 0, md: 10 }}>
                    <SearchSection />
                    <CoinsPrices />
                    <CoinTable data={historyDetails} />
                </Box>
            </Container>
        </>
    );
};

export default CryptoPrices;
