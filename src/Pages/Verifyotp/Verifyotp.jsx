import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../config';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from "react-redux";
import useMakeToast from '../../hooks/makeToast';
import crplogo from '../../images/crplogo.png'
const Verifyotp = () => {
  const navigate = useNavigate();
  const makeToast = useMakeToast();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [persistedData, setPersistedData] = useState(null);
  const storedData = localStorage.getItem('persistMe');
  const users = useSelector((state) => state?.users);

  useEffect(() => {
      if (users) {
          setPersistedData(users)
      } else if (storedData) {
          setPersistedData(JSON.parse(storedData));
      } 
      
  }, [storedData,users,persistedData]);

  console.log(persistedData, 'AllData');
console.log(users,"redux data");
  const handleOtpChange = (index, value) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      setError('');
    } else {
      setError('Please enter a valid numeric digit.');
    }
  };

  const handleSubmit = async () => {
    console.log(otp.join(''), 'data');
  
    let myHeaders = new Headers();
    myHeaders.append('authorization', persistedData?.token);
  
    let data = new FormData();
    data.append('code', otp.join(''));
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow',
    };
  
    try {
      const response = await fetch(`${REACT_APP_BASE_URL}/api/user/verify`, requestOptions);
      const result = await response.json();
  
      console.log(result, 'response in otp Varified');
  
      
      if (result?.status == true && result?.data?.isVerified == true) {
        dispatch(
            setUserData(result?.data),
        );
        localStorage.setItem('persistMe', JSON.stringify(result?.data));
        navigate('/cointracker');
        makeToast(result?.message, 'success', 3);
    } else{
      makeToast(result?.message, 'error', 3);
    }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <Box
      sx={{
        textAlign: 'center',
        maxWidth: '400px',
        margin: 'auto',
        paddingTop: '50px',
        
      }}
    >
     
     <Box sx={{ backgroundColor: 'white',
                        py: 5,
                        px: 5,
                        borderRadius: '15px',
                        width: 'fit-content',
                        boxShadow:'0px 0px 60px 0px rgba(0, 0, 0, 0.05)',}}>
            <Box display={"flex"} justifyContent={'center'} alignItems={'center'}><img src={crplogo} width='80px' ></img></Box>
     <Typography fontWeight={600} textAlign={'center'} fontSize={{lg:'20px',xs:'12px',md:'18px'}} py={3}>Verify Otp</Typography>
           <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px'}}>
             {otp.map((digit, index) => (
            <input
          style={{
              width: '40px',
              height: '40px',
              fontSize: '20px',
              textAlign: 'center',
              marginRight: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
          }}
            key={index}
            type="text"
            value={digit}
            onChange={(e) => handleOtpChange(index, e.target.value)}
            maxLength={1}
           
          />
        ))}
      </Box>
      <Button
        onClick={handleSubmit}
        variant="contained"
        sx={{
          backgroundColor: '#29A3F1',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Submit OTP
      </Button>
      {error && (
        <Typography variant="body2" sx={{ color: 'red', marginTop: '10px' }}>
          {error}
        </Typography>
      )}
                        </Box>
   
    
    
    </Box>
  );
};

export default Verifyotp;
