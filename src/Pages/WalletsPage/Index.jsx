import React, { useEffect, useState } from 'react';
import WalletsCard from './WalletsCard';
import Walletslist from './Walletslist';
import Navigation from '../../Components/Navigation';
import { REACT_APP_BASE_URL } from '../../config';


// ===================syncwallet===============
export const syncWallet = async () => {
  try {
    const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
    const response = await fetch(`${REACT_APP_BASE_URL}/api/data/syncWallet`, {
      method: 'GET',
      headers: {
        Authorization: localStorageData?.user?.token,
      },
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
};
// ===============addwallet=========================
export const addWalletFunction = async () => {
    try {
      const localStorageData = JSON.parse(localStorage.getItem('persistMe'));
      const response = await fetch(`${REACT_APP_BASE_URL}/api/data/getMyExchanges`, {
        method: 'GET',
        headers: {
          Authorization: localStorageData?.user?.token,
        },
      });
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error.message);
      throw error;
    }
  };


const Index = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const syncWalletState = async () => {
      try {
        const result = await syncWallet();
        setData(result);
      } catch (error) {
        console.error('Error setting data:', error.message);
      }
    };

    syncWalletState();
    addWalletFunction();
  }, []); 

  return (
    <>
      <Navigation />
      <WalletsCard data={data} />
      <Walletslist data={data} />
    </>
  );
};

export default Index;
