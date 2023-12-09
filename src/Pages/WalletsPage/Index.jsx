import React from 'react';

import WalletsCard from './WalletsCard';
import Walletslist from './Walletslist';
import Navigation from '../../Components/Navigation';

export default function Index() {
    return (
        <>
            <Navigation />
            <WalletsCard />
            <Walletslist />
        </>
    );
}
