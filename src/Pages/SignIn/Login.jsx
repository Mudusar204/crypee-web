import React, { useState } from 'react';
import Cookies from 'js-cookie';
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
// import { FacebookProvider, LoginButton } from 'react-facebook';
import { Check, Email, Facebook, Google, Lock } from '@mui/icons-material';

import loginbg from '../../images/loginbg.png';
import login from '../../images/login.png';

import signinbg from './../../images/signinbg.png';
import Header from '../../Components/Header';
import { loginHandle } from '../../api/api';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/slices/userSlice';
import { useGoogleLogin } from '@react-oauth/google';
import useMakeToast from '../../hooks/makeToast';
import FacebookLogin from 'react-facebook-login';
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
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const makeToast = useMakeToast();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async () => {
        if (rememberMe) {
            localStorage.setItem('persistMe-sf3e', rememberMe);
        } else {
            localStorage.removeItem('persistMe-sf3e');
        }

        try {
            const response = await loginHandle(data);
            if (response?.data?.status == 'success') {
                console.log(response);
                Cookies.set('refreshToken-dai214', response?.data?.refreshToken, 1);
                dispatch(
                    setUserData({
                        accessToken: response?.data?.accessToken,
                        id: response?.data.id,
                        email: response?.data?.userEmail,
                        name: response?.data?.username,
                    }),
                );
                makeToast('User Login Successfully', 'success', 3);
                navigate('/');
            } else {
                console.log(response);
                makeToast(response?.response?.data?.message, 'warn', 3);
            }
        } catch (err) {
            console.log('errrrrr', err);
        }
    };

    const handleChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    async function handleGoogleLoginSuccess(tokenResponse) {
        const accessToken = tokenResponse.access_token;

        try {
            const response = await loginHandle({ googleToken: accessToken });

            if (response?.data?.status == 'success') {
                // const message = response?.data?.message ? response?.data?.message : 'Some thing went Wrong';
                // makeToast(`${message}`, 'success', 3);
                Cookies.set('refreshToken-dai214', response?.data?.refreshToken, 1);
                dispatch(
                    setUserData({
                        accessToken: response?.data?.accessToken,
                        id: response?.data.id,
                        email: response?.data?.userEmail,
                        name: response?.data?.username,
                    }),
                );
                makeToast('Login Successfully', 'success', 3);
                localStorage.setItem('persistMe-sf3e', true);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                makeToast(response?.response?.data?.message, 'warn', 3);
            }
        } catch (err) {
            makeToast(err?.response?.data?.message);
        }
    }

    const handleSignIn = useGoogleLogin({ onSuccess: handleGoogleLoginSuccess });

    // async function handleSuccess(response) {
    //     try {

    //         const FbToken = response?.authResponse?.accessToken;
    //         const FbUserID = response?.authResponse?.userID;
    //         const resp = await loginHandle({ FbToken, FbUserID });

    //         if (resp?.data?.status == 'success') {
    //             // const message = response?.data?.message ? response?.data?.message : 'Some thing went Wrong';
    //             // makeToast(`${message}`, 'success', 3);
    //             Cookies.set('refreshToken-dai214', resp?.data?.refreshToken, 1);
    //             dispatch(
    //                 setUserData({
    //                     accessToken: resp?.data?.accessToken,
    //                     id: resp?.data.id,
    //                     email: resp?.data?.userEmail,
    //                     name: resp?.data?.username,
    //                 }),
    //             );
    //             makeToast('User Login Successfully', 'success', 3);
    //             // cogoToast.success('User Login SuccessFully');

    //             setTimeout(() => {
    //                 navigate('/');
    //             }, 1000);
    //         } else {
    //             // const message = response?.message ? response?.message : 'Some thing went Wrong';
    //             // makeToast(`${message}`, 'error', 3);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    // function handleError(error) {
    //     console.log('error');
    //     console.log(error);
    // }

    const responseFacebook = async (response) => {
        try {
            const resp = await loginHandle({ FbToken: response });
            if (resp?.data?.status == 'success') {
                Cookies.set('refreshToken-dai214', resp?.data?.refreshToken, 1);
                dispatch(
                    setUserData({
                        accessToken: resp?.data?.accessToken,
                        id: resp?.data.id,
                        email: resp?.data?.userEmail,
                        name: resp?.data?.username,
                    }),
                );

                makeToast(resp?.data?.message, 'success', 3);
                localStorage.setItem('persistMe-sf3e', true);

                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } else {
                makeToast(resp?.data?.message, 'warn', 3);
            }
        } catch (err) {
            makeToast(err?.response?.data?.message, 'warn', 3);
        }
    };

    const callFb = () => {
        document.querySelector('.fbIDx').click();
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
            <Container>
                
                
                    <Grid container justifyContent={'space-between'} spacing={1} mt={{ md: 15, xs: 4 }}
                    sx={{
                        backgroundColor: 'white',
                        py: 3,
                        px: 3,
                        borderRadius: '15px',
                        width: 'fit-content',
                        boxShadow:'0px 0px 60px 0px rgba(0, 0, 0, 0.05)',
                        
                        
                    }} >
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
                                    Welcome back
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
                        <Grid item  md={6}
                            xs={12}
                            sm={11}
                            lg={6}>
                            <Box
                            // sx={{
                            //     background: `url(${login})`,
                            //     backgroundSize: '100% 100%',
                            //     backgroundRepeat: 'no-repeat',
                            //     width: '100%',
                            //     height: '100%',
                            //     padding: {
                            //         md: '3rem 6rem ',
                            //         sm: '3rem 4rem ',
                            //         xs: '2rem 2rem',
                            //     },
                            // }}
                            px={2}
                            >
                                <Box mt={4}>
                                    <CustomTextField
                                        autoComplete="off"
                                        id="standard-name"
                                        placeholder={'Email Address'}
                                        // onChange={(e) => setemail(e.target.value)}
                                        required={true}
                                        type="email"
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <Email sx={{ color: '#0B7BC3' }} />
                                                </InputAdornment>
                                            ),
                                        }}
                                        value={data?.email}
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </Box>
                                <Box mt={4}>
                                    <CustomTextField
                                        autoComplete="off"
                                        name="password"
                                        value={data.password}
                                        onChange={handleChange}
                                        placeholder={'Password'}
                                        // onChange={(e) => setpassword(e.target.value)}
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
                                            value={rememberMe}
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
                                            onChange={() => setRememberMe(!rememberMe)}
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
                                    flexDirection={'column'}
                                >
                                    <Button
                                        variant="btn1"
                                        sx={{ padding: '0.7rem 2rem' }}
                                        onClick={handleLogin}
                                    >
                                        Login now
                                    </Button>
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
                                        onClick={() => navigate('/signup')}
                                    >
                                        Create Account
                                    </Button>
                                </Box>

                                <Typography
                                    sx={{
                                        fontFamily: 'Gmarket',
                                        fontWeight: 400,
                                        fontSize: '20px',
                                        textAlign: 'center',
                                        color: 'white',
                                        margin: '1rem 0rem',
                                    }}
                                >
                                    OR
                                </Typography>
                                <Box display="flex" justifyContent="center" gap={2} color="white">
                                    <Facebook
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            callFb();
                                        }}
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
                                    cssClass="my-facebook-button-class fbIDx"
                                />

                                {/* <FacebookProvider appId={181859634583914}>
                                    <LoginButton
                                        scope="email"
                                        onError={handleError}
                                        onSuccess={handleSuccess}
                                        style={{
                                            backgroundColor: 'red',
                                            display: 'none',
                                        }}
                                        id="fbID"
                                    >
                                        Login via Facebook
                                    </LoginButton>
                                </FacebookProvider> */}
                            </Box>
                        </Grid>
                    </Grid>
                
            </Container>
        </Box>
    );
};

export default Login;
