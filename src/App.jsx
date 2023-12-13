import React, { useMemo, useState } from 'react';
import { responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider, Backdrop, useTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { InfinitySpin } from 'react-loader-spinner';
import { Routes, Route } from 'react-router-dom';
import { createCustomTheme } from './utils/createCustomTheme';

import Footer from './Components/Footer';
import LossHarvesting from './Pages/TaxLoss/LossHarvesting';
import Home from './Pages/LandingPage/Home';
import Dashboard from './Pages/DashboardPage/Index';
import Wallets from './Pages/WalletsPage/Index';

import SignIn from './Pages/SignIn/Login';
import Transactions from './Pages/Transactions/Transactions';
import Plans from './Pages/Plans/Plans';
import Taxes from './Pages/Taxes/Taxes';
import Cointracker from './Pages/Cointracker/Cointracker';
import Performance from './Pages/Performance/Performance';
import SeePricing from './Pages/Plans/SeePricing';
import Career from './Pages/Career/Career';
import PreviewTaxImpact from './Pages/PreviewTaxImpact/PreviewTaxImpact';
import CryptoPrices from './Pages/CryptoPrices/CryptoPrices';
import ChooseSubscription from './Pages/DashboardPage/ChooseSubscription';
// import ContextAPI from './utils/ContextAPI';
import Signup from './Pages/SignUp/SignUp';
import PersistLogin from './Components/persistLogin';
import PageNotExist from './Pages/404/404';
import './app.css';
import Pastperformance from './Pages/Performance/Pastperformance';
const App = () => {
    const [mode, setMode] = useState('light');
    const [loader, setLoader] = useState(false);
    const theme = useTheme();

    const toggleMode = () => {
        setMode((val) => (val === 'light' ? 'dark' : 'light'));
    };

    const themeClient = useMemo(() => {
        let theme = createCustomTheme(mode);
        theme = responsiveFontSizes(theme);
        return theme;
    }, [mode]);

    return (
        <>
            <ThemeProvider theme={themeClient}>
                <CssBaseline enableColorScheme />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    limit={3}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme={mode}
                />

                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loader}
                >
                    <InfinitySpin width="200" color={`${theme.palette.text.primary}`} />
                </Backdrop>
                <Routes>

                    <Route
                            path="/landing"
                            element={
                                <Home
                                    setLoader={setLoader}
                                    loader={loader}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            }
                        />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                  
                        <Route
                            path="/"
                            element={
                                <Home
                                    setLoader={setLoader}
                                    loader={loader}
                                    mode={mode}
                                    toggleMode={toggleMode}
                                />
                            }
                        />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/wallets" element={<Wallets />} />
                        <Route path="/loss-harvesting" element={<LossHarvesting />} />
                        <Route path="/tax-plans" element={<Plans />} />
                        <Route path="/taxes" element={<Taxes />} />
                        <Route path="/cointracker" element={<Cointracker />} />
                        <Route path="/transactions" element={<Transactions />} />
                        <Route path="/performance" element={<Performance />} />
                        <Route path='/pastperformance' element={<Pastperformance/>} />
                        <Route path="/pricing-details" element={<SeePricing />} />
                        <Route path="/career" element={<Career />} />
                        <Route path="/previewtaximpact" element={<PreviewTaxImpact />} />
                        <Route path="/crypto-prices" element={<CryptoPrices/>} />
                        <Route path="/subscription" element={<ChooseSubscription />} />
                  

                    <Route path="*" element={<PageNotExist />}></Route>
                </Routes>
                <Footer />
            </ThemeProvider>
        </>
    );
};

export default App;
