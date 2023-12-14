import React, { useState } from 'react';

import {
    Box,
    Button,
    Checkbox,
    Container,
    Grid,
    InputAdornment,
    TextField,
    Typography,
    styled,
} from '@mui/material';

import {
    Check,
    Email,
    Facebook,
    Google,
    // Instagram,
    Lock,
    AccountCircle,
} from '@mui/icons-material';

import logincart from '../../images/loginstar.png';
import login from '../../images/login.png';
import loginbg from '../../images/loginbg.png';
import crplogo from '../../images/crplogo.png';
import signinbg from './../../images/signinbg.png';
import Header from '../../Components/Header';

import { useNavigate } from 'react-router';
import { useGoogleLogin } from '@react-oauth/google';
import { handleRegister } from '../../api/api';
// import Cookies from 'js-cookie';
import useMakeToast from '../../hooks/makeToast';
import FacebookLogin from 'react-facebook-login';

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
            color: '#000000!important',
        },
        color: '#000000',
        fontSize: '15px',
        paddingLeft: '10px',
    },
    background: '#F2FAFF',
});
const Signup = () => {
    const navigate = useNavigate();
    const makeToast = useMakeToast();
    const [user, setuser] = useState({
        name: '',
        email: '',
        password: '',
    });

    const onSubmit = async () => {
        const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

        if (!validEmail.test(user.email)) {
            return makeToast('Email is not Valid', 'warn', 3);
        } else if (!validPassword.test(user.password)) {
            return makeToast('password is not valid', 'warn', 3);
        } else if (user.name == '') {
            return makeToast('Name must be required', 'warn', 3);
        } else {
            try {
                const resp = await handleRegister(user);
                if (resp?.data?.status == 'success') {
                    makeToast(resp?.data?.message, 'success', 3);
                    navigate('/login');
                }
            } catch (err) {
                makeToast(err?.response?.data?.message, 'warn', 3);
            }
        }
    };

    async function handleGoogleLoginSuccess(tokenResponse) {
        const accessToken = tokenResponse.access_token;
        try {
            const response = await handleRegister({ googleToken: accessToken });

            if (response?.data?.status == 'success') {
                makeToast(response?.data?.message, 'success', 3);

                setTimeout(() => {
                    navigate('/login');
                }, 1000);
            } else {
                makeToast(response?.data?.message, 'error', 3);
            }
        } catch (err) {
            makeToast(err?.response?.data?.message, 'error', 3);
        }
    }

    const handleSignIn = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

    const responseFacebook = async (response) => {
        try {
            const resp = await handleRegister({ FbToken: response });
            if (resp?.data?.status == 'success') {
                makeToast(resp?.data?.message, 'success', 3);
                navigate('/login');
            } else {
                makeToast(resp?.data?.message, 'warn', 3);
            }
        } catch (err) {
            makeToast(err?.response?.data?.message, 'warn', 3);
        }
    };

    return (
        <Box
            sx={{
                background: `url(${signinbg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain',
                backgroundPosition: 'top center',
            }}
        >
            <Header />
            <Container maxWidth="lg">
                <Box mt={{ md: 15, xs: 4 }}>
                    <Grid container    sx={{
                        backgroundColor: 'white',
                        py: 3,
                        px: 3,
                        borderRadius: '15px',
                        width: 'fit-content',
                        boxShadow:'0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                        justifyContent:'center',
                    
                    }}>
                    <Grid
                            item
                            md={6}
                            xs={12}
                            sm={11}
                            lg={6}
                            // sx={{ display: { md: 'block', xs: 'none' }, marginRight: '-1.2rem' }}
                        >
                            <Box
                                height="100%"
                                px={1}
                                sx={{
                                    background: `url(${loginbg})`,
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    width: '100%',
                                    height: '100%',
                                    padding: {
                                        md: '3rem 6rem ',
                                        sm: '3rem 4rem ',
                                        xs: '2rem 2rem',
                                    },
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                }}
                            >
                                <img src={crplogo} alt="logo" width={'150px'}></img>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 800,
                                        fontSize: { md: '30px', xs: '20px' },
                                        textAlign: 'center',
                                        color: 'black',
                                        textTransform: 'uppercase',
                                    }}
                                    py={2}
                                >
                                    SignUp Here
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 400,
                                        fontSize: '13px',
                                        textAlign: 'center',
                                        color: 'black',
                                        mt: 1,
                                    }}
                                >
                                    Crypee(Tax Software) helps you become fully compliant with
                                    cryptocurrency tax rules
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item   md={6}
                            xs={12}
                            sm={11}
                            lg={6}>
                            <Box
                                sx={{
                                 background:'white',
                                 px:2

                                }}
                            >
                               
                               
                                <Box mt={4}>
                                    <CustomTextField
                                        autoComplete="off"
                                        id="standard-name"
                                        placeholder={'Name'}
                                        onChange={(e) => setuser({ ...user, name: e.target.value })}
                                        required={true}
                                        type="text"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircle sx={{ color: '#0B7BC3' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box mt={4}>
                                    <CustomTextField
                                        autoComplete="off"
                                        id="standard-email"
                                        placeholder={'Email Address'}
                                        onChange={(e) =>
                                            setuser({ ...user, email: e.target.value })
                                        }
                                        required={true}
                                        type="email"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Email sx={{ color: '#0B7BC3' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box mt={4}>
                                    <CustomTextField
                                        autoComplete="off"
                                        id="standard-name"
                                        placeholder={'Password'}
                                        onChange={(e) =>
                                            setuser({ ...user, password: e.target.value })
                                        }
                                        required={true}
                                        type="password"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Lock sx={{ color: '#0B7BC3' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box
                                    mt={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Box display="flex" alignItems="center">
                                        <Checkbox
                                            value="remember"
                                            sx={{
                                                '& .MuiSvgIcon-root': {
                                                    borderRadius: '50%',
                                                },
                                                color: '#0B7BC3',
                                                '&.Mui-checked': {
                                                    color: '#28CE46',
                                                },
                                            }}
                                            checkedIcon={
                                                <Check
                                                    sx={{ color: 'white', bgcolor: '#28CE46' }}
                                                />
                                            }
                                            
                                        />
                                        <Typography
                                            sx={{
                                                fontSize: '12px',
                                                color: 'black',
                                                fontWeight: '400',
                                                fontFamily: 'Gmarket',
                                            }}
                                        >
                                            Remember me
                                        </Typography>
                                    </Box>

                                    <Typography
                                        sx={{
                                            fontSize: '12px',
                                            color: 'black',
                                            fontWeight: '400',
                                            fontFamily: 'Gmarket',
                                        }}
                                    >
                                        <u> Forget Password</u>
                                    </Typography>
                                </Box>
                                <Box
                                    mt={4}
                                    px={2}
                                    gap={2}
                                    display="flex"
                                    justifyContent="space-between"
                                    flexWrap="wrap"
                                >
                                    <Button
                                        variant="btn3"
                                        sx={{
                                            padding: '0.7rem 1.5rem',
                                            color: '#0B7BC3',
                                            border: '2px solid #0B7BC3',
                                            borderRadius: '6px',
                                            background: 'white',
                                            '&:hover': {
                                                color: 'white',
                                                background:
                                                    'radial-gradient(50.09% 50% at 50% 50%, #3D9CDA 0%, #0B6BC3 100%)',
                                            },
                                        }}
                                        onClick={() => onSubmit()}
                                    >
                                        Create Account
                                    </Button>
                                    <Button
                                        variant="btn1"
                                        sx={{ padding: '0.7rem 2rem' }}
                                        onClick={() => navigate('/login')}
                                    >
                                        Login now
                                    </Button>
                                </Box>

                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        textAlign: 'center',
                                        color: 'black',
                                        margin: '1rem 0rem',
                                    }}
                                >
                                    OR
                                </Typography>
                                <Box display="flex" justifyContent="center" gap={2} color="#0B7BC3">
                                    <Facebook
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => document.querySelector('.fbIDc').click()}
                                    />
                                    <Google sx={{ cursor: 'pointer' }} onClick={handleSignIn} />
                                    {/* <Instagram sx={{ cursor: 'pointer' }} /> */}
                                </Box>

                                <FacebookLogin
                                    appId="234169869402098"
                                    autoLoad={false}
                                    scope="email"
                                    fields="name,email,picture"
                                    callback={responseFacebook}
                                    cssClass="my-facebook-button-class fbIDc"
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Signup;
