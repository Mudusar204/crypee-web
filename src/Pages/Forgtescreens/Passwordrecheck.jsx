import React, { useState } from 'react';
import { Box, TextField, Button, Stack, Typography ,styled} from '@mui/material';
import { InputAdornment } from '@mui/material';
import { Lock } from '@mui/icons-material';
import useMakeToast from '../../hooks/makeToast';
import { REACT_APP_BASE_URL } from '../../config';
import crplogo from '../../images/crplogo.png';


const CustomTextField = styled(TextField)({
  width: '100%',
  fontFamily: 'Poppins',
  fontWeight: '300',
  borderRadius: '5px',
  '& label.Mui-focused': {
    color: '#ffffff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'transparent',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'transparent',
    },
    '&:hover fieldset': {
      borderColor: 'transparent',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'transparent',
    },
  },
  input: {
    '&::placeholder': {
      textOverflow: 'ellipsis !important',
      color: '#000000 !important',
    },
    color: '#000000',
    fontSize: '15px',
    paddingLeft: '10px',
  },
  background: '#F2FAFF',
});

const Passwordrecheck = () => {
  const [data, setData] = useState({
    password: '',
    passwordReset: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    password: '',
  });

//   ===========validation=============
  const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

    if (!validPassword.test(value)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Password must be at least 6 characters long and include at least one letter and one digit.',
      }));
    } else {
      setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };

  const handlePasswordresetChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));

  
    if (value !== data.password) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Passwords do not match.',
      }));
    } else {
      setValidationErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    }
  };
//   ================
const resetPasswordHandler = async () => {
   
  
    console.log(data, 'data');
        let formdata = new FormData();
     
        formdata.append('password', data?. passwordReset);
        console.log(formdata, 'form data');
    
    let requestOptions = {
        method: 'POST',
        body: formdata,
    };
    fetch(
        `${REACT_APP_BASE_URL}/api/user/resetPassword`,
        requestOptions,
      )
        .then((response) => response.text())
        .then((result) => {
            const results = JSON.parse(result);
          
            if (results?.status == true && results?.data?.isVerified == true) {
                dispatch(
                    setUserData(results?.data),
                );
                localStorage.setItem('persistMe', JSON.stringify(results?.data));
                navigate('/dashboard');
            } else if (results?.status && results?.data?.isVerified == false) {
                navigate('/verifyotp');
                dispatch(
                    setUserData(results?.data),
                );
            }
        })
        .catch((err) =>   useMakeToast(err?.response?.data?.message));
};

  return (
    <Box display={'flex'} justifyContent={'center'} my={5}>
       
        <Box  sx={{ background: '#F2FAFF',
        borderRadius: '15px',
        px:3,
        py:3}}>
             <Box
        sx={{
          background: 'white',
          borderRadius: '15px',
          px: 8,
          py: 8,
        }}
      >
        <Stack spacing={5} borderRadius={'15px'}>
        <Box display={"flex"} justifyContent={'center'} alignItems={'center'}><img src={crplogo} width='80px' ></img></Box>
          <Typography fontWeight={600} textAlign={'center'} fontSize={{lg:'20px',xs:'12px',md:'18px'}}>Password reset</Typography>
          <CustomTextField
            autoComplete="off"
            name="password"
            value={data.password}
            onChange={handlePasswordChange}
            placeholder={'Password'}
            required={true}
            error={!!validationErrors.password}
            helperText={validationErrors.password}
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock sx={{ color: '#0B7BC3' }} />
                </InputAdornment>
              ),
            }}
          />
          <CustomTextField
            autoComplete="off"
            name="passwordReset"
            value={data.passwordReset}
            onChange={handlePasswordresetChange}
            placeholder={'Password Reset'}
            required={true}
            error={!!validationErrors.passwordReset}
            helperText={validationErrors.passwordReset}
            type="password"
            InputProps={{
              startAdornment: (

                <InputAdornment position="start">
                  <Lock sx={{ color: '#0B7BC3' }} />
                </InputAdornment>
              ),
            }}
          />
            <Button
        variant="contained"
        color="primary"
        onClick={resetPasswordHandler }
      
      >
        Submitt
      </Button>
        </Stack>
      </Box>
        </Box>
     
    </Box>
  );
};



export default Passwordrecheck;
