import React,{useState,useEffect} from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/DashboardPage/Index';
import Wallets from '../Pages/WalletsPage/Index';
import SignIn from '../Pages/SignIn/Login';
import Transactions from '../Pages/Transactions/Transactions';
import Plans from '../Pages/Plans/Plans';
import Taxes from '../Pages/Taxes/Taxes';
import Cointracker from '../Pages/Cointracker/Cointracker';
import Performance from '../Pages/Performance/Performance';
import SeePricing from '../Pages/Plans/SeePricing';
import PreviewTaxImpact from '../Pages/PreviewTaxImpact/PreviewTaxImpact';
import CryptoPrices from '../Pages/CryptoPrices/CryptoPrices';
import ChooseSubscription from '../Pages/DashboardPage/ChooseSubscription';
import Signup from '../Pages/SignUp/SignUp';
import PageNotExist from '../Pages/404/404';
import Pastperformance from '../Pages/Performance/Pastperformance';
import Aboutus from '../Pages/Footerpages/Aboutus';
import Disclaimer from '../Pages/Footerpages/Disclaimer';
import Termsofservices from '../Pages/Footerpages/Termsofservices';
import Privacypolicy from '../Pages/Footerpages/Privacypolicy';
import Taxguide from '../Pages/Footerpages/Taxguide';
import Integration from '../Pages/Footerpages/Integration';
import Blog from '../Pages/Footerpages/Blog';
import Security from '../Pages/Footerpages/Security';
import Careers from '../Pages/Footerpages/Careers';
import Career from '../Pages/Career/Career';
import Home from '../Pages/LandingPage/Home';
import LossHarvesting from "../Pages/TaxLoss/LossHarvesting";
import { useSelector } from "react-redux";
import Navigation from '../Components/Navigation';

export default function Routing() {
    const [persistedData, setPersistedData] = useState(null);
    const storedData = localStorage.getItem('persistMe');
    const users = useSelector((state) => state?.users);

    useEffect(() => {
        if (storedData) {
            setPersistedData(JSON.parse(storedData));
        } else if (users) {
            setPersistedData(users)
        } 
        
    }, [storedData,users,persistedData]);

    console.log(persistedData, 'AllData');
  return (
        
    persistedData?.token ?
<Routes>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/wallets" element={<Wallets />} />
                            <Route path="/loss-harvesting" element={<LossHarvesting />} />
                            <Route path="/tax-plans" element={<Plans />} />
                            <Route path="/taxes" element={<Taxes />} />
                            <Route path="/transactions" element={<Transactions />} />
                            <Route path="/performance" element={<Performance />} />
                            <Route path="/pastperformance" element={<Pastperformance />} />
                            <Route path="/pricing-details" element={<SeePricing />} />
                            <Route path="/career" element={<Career />} />
                            <Route path="/previewtaximpact" element={<PreviewTaxImpact />} />
                            <Route path="/crypto-prices" element={<CryptoPrices />} />
                            <Route path="/subscription" element={<ChooseSubscription />} />
                            <Route path="/about" element={<Aboutus />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/Termsofservices" element={<Termsofservices />} />
                    <Route path="/Privacypolicy" element={<Privacypolicy />} />
                    <Route path="/Taxguide" element={<Taxguide />} />
                    <Route path="/integration" element={<Integration />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/cointracker" element={<Cointracker />} />
                    <Route
                                path="/Home"
                                element={
                                    <Home
                                    />
                                }
                            />
                            <Route path="*" element={<PageNotExist />}></Route>
</Routes>
                            :
<Routes>
<Route
                            path="/"
                            element={
                                <Home
                                />
                            }
                        />
<Route path="/about" element={<Aboutus />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/Termsofservices" element={<Termsofservices />} />
                    <Route path="/Privacypolicy" element={<Privacypolicy />} />
                    <Route path="/Taxguide" element={<Taxguide />} />
                    <Route path="/integration" element={<Integration />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/security" element={<Security />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/cointracker" element={<Cointracker />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<PageNotExist />}></Route>
</Routes>
  )
}
