import React from 'react';
import Herosection from './Herosection';
import OfficialTax from './OfficialTax';
import Automated from './Automated';
import SaveMoney from './SaveMoney';
import Getstarted from './Getstarted';
import Assest from './Assest';
import UserLove from './UserLove';
import Trackcrypto from './Trackcrypto'
import Usercointracker from './Usercointracker';



const Home = () => {
    return (
        <>
           
            <Herosection/>
            <OfficialTax />
            <Automated />
            <SaveMoney />
            <Trackcrypto/>
            <Getstarted />
            <Usercointracker/>
            <Assest />
            <UserLove />  
        </>
    );
};

export default Home;
