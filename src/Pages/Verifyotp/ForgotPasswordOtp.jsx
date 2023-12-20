import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../config';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from "react-redux";

const ForgotPasswordOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const users = useSelector((state) => state?.users);
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
    const collectOtp = otp.join('')
  
    let myHeaders = new Headers();
    myHeaders.append('authorization', users?.token);
  
    let data = new FormData();
    data.append('code', collectOtp);
  
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: data,
      redirect: 'follow',
    };
  
    fetch(`${REACT_APP_BASE_URL}/api/user/verify`, requestOptions)
    .then(response => response.text())
    .then(result => {
      setLoading(false);
      const results = JSON.parse(result);
      console.log(results, 'response in otp Varified');
      if (results?.status) {
                dispatch(
            setUserData(result?.data),
        );
        makeToast(result?.message, 'success', 3);
        let path = `/Passwordrecheck`; 
      navigate(
        path , {
          state : {
            rowData : collectOtp,
          }
        }
      );
      } else {
        makeToast(result?.message, 'error', 3);
      }
      setOtpCode('');
      setOptCodeError('');
    })
    .catch(error => console.log('error', error));
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

export default ForgotPasswordOtp;
