import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../config';
import { Box, Button, Typography } from '@mui/material';
import useMakeToast from '../../hooks/makeToast';
import { setUserData } from '../../redux/slices/userSlice';
import { useDispatch } from "react-redux";

const Verifyotp = () => {
  const navigate = useNavigate();
  const makeToast = useMakeToast();
  const dispatch = useDispatch()
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [persistedData, setPersistedData] = useState(null);
  const storedData = localStorage.getItem('persistMe');

  useEffect(() => {
      if (storedData) {
        setPersistedData(JSON.parse(storedData));
      } 
  }, []);

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
    console.log(persistedData?.token,"persistedData?.token");
    let myHeaders = new Headers();
myHeaders.append("authorization", persistedData?.token);

let formdata = new FormData();
formdata.append('code', otp.join(''));

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

try {
  const response = await fetch(`${REACT_APP_BASE_URL}/api/user/verify`, requestOptions);
  const result = await response.text();
  const results = JSON.parse(result);
  if (results?.status == true) {
    dispatch(setUserData(results?.data));
    localStorage.setItem('persistMe', JSON.stringify(results?.data));
    navigate('/cointracker');
    makeToast(results?.message, 'success', 3);
  } else {
    makeToast(results?.message, 'error', 3);
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
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>
        Enter OTP
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '30px',
                        backgroundColor: 'white',
                        py: 3,
                        px: 3,
                        borderRadius: '15px',
                        width: 'fit-content',
                        boxShadow:'0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                      
                    
                     }}>
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
  );
};

export default Verifyotp;
