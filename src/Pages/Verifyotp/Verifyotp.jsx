import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../config';
import { Box, Button, Typography } from '@mui/material';

const Verifyotp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

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
    const enteredOtp = otp.join('');

    if (enteredOtp.length === 6) {
      const formData = new FormData();
      formData.append('code', enteredOtp);

      try {
        const response = await fetch(`${REACT_APP_BASE_URL}/api/user/verify`, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          navigate('/');
        } else {
          setError('Invalid OTP. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setError('Please enter a six-digit OTP.');
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
