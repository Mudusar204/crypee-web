import React, { useEffect, useState } from 'react';
import {
    Container,
    Button,
    Box,
    IconButton,
    Stack,
    Drawer,
    Hidden,
    Typography,
    useTheme,
    styled,
} from '@mui/material';

import { Language, Settings } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import logo from '../images/logo.svg';
// import { DataContext } from '../utils/ContextAPI';
import { useSelector } from 'react-redux';
const StyledLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
        color: 'black',
    },
}));

const Header = () => {
    // const { loggedIn } = useContext(DataContext);
    const users = useSelector((state) => state.users);
    const [state, setState] = useState(false);
    const theme = useTheme();
    const [presistLogin, setPresistLogin] = useState(false);
    let storedData = JSON.parse(localStorage.getItem('persistMe'));
    useEffect(() => {
        if (storedData?.user?.token) {
            setPresistLogin(true);
        } else {
            setPresistLogin(false);
        }
    }, [storedData]);

    const toggleDrawer = () => {
        setState((prev) => (prev === true ? false : true));
    };
    const navigate = useNavigate();

    const data = [
        {
            title: 'Products',
            path: '/product',
        },
        {
            title: 'Win',
            path: '/win',
        },
        {
            title: 'NFT',
            path: '/nft',
        },
    ];

    return (
        <>
            <Container maxWidth="xl">
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    width="100%"
                    gap={3}
                    pt={3}
                >
                    <Box>
                        <StyledLink to="/">
                            <img
                                src={logo}
                                alt=""
                                style={{
                                    width: '100%',
                                    maxWidth: '130px',
                                }}
                            />
                        </StyledLink>
                    </Box>
                    <Hidden mdDown>
                        <Box display="flex" justifyContent="center" gap={4}>
                            {data.map((item, i) => {
                                return (
                                    // <NavLink
                                    //     to={item?.path}
                                    //     style={{ textDecoration: 'none', color: 'white' }}
                                    //     key={i}
                                    // >
                                    <Typography
                                        key={i}
                                        sx={{
                                            color: `${theme.palette.text.lightblue}`,
                                            fontFamily: 'Poppins',
                                            fontWeight: '500',
                                            fontSize: '16px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        {item?.title}
                                    </Typography>
                                    // </NavLink>
                                );
                            })}
                        </Box>
                        <Box
                            display="flex"
                            gap={4}
                            justifyContent="end"
                            alignItems="center"
                            width="100%"
                        >
                            <StyledLink to="/#">
                                <Language
                                    sx={{
                                        color: `${theme.palette.text.darkblue}`,
                                        cursor: 'pointer',
                                        mt: '8px',
                                    }}
                                />
                            </StyledLink>

                            {/* <StyledLink to="/dashboard">
                                <Settings
                                    sx={{
                                        color: `${theme.palette.text.darkblue}`,
                                        cursor: 'pointer',
                                        mt: '8px',
                                    }}
                                />
                            </StyledLink> */}
                            {presistLogin && (
                                <Button
                                    variant="btn2"
                                    onClick={() => {
                                        navigate('/dashboard');
                                    }}
                                >
                                    Dashboard
                                </Button>
                            )}
                            {!presistLogin && (
                                <Button
                                    variant="btn2"
                                    onClick={() => {
                                        navigate('/login');
                                    }}
                                >
                                    Sign In
                                </Button>
                            )}

                            <Button variant="btn1">Try for free</Button>
                        </Box>
                    </Hidden>
                    <Hidden mdUp>
                        <Stack gap={2}>
                            <IconButton onClick={() => toggleDrawer()}>
                                <MenuIcon
                                    style={{
                                        fontSize: '28px',
                                    }}
                                />
                            </IconButton>
                        </Stack>
                        <Drawer anchor="left" open={state} onClose={() => toggleDrawer()}>
                            <Box
                                sx={{
                                    width: 250,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 3,
                                    px: 2,

                                    pt: 4,
                                }}
                            >
                                <Box>
                                    {/* <NavLink
                                            to="/"
                                            style={{ textDecoration: 'none', color: 'white' }}
                                        > */}
                                    <img src={logo} alt="img" width="100%" />
                                    {/* </NavLink> */}
                                </Box>

                                <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    gap={4}
                                >
                                    {data.map((item, i) => {
                                        return (
                                            // <NavLink
                                            //     to={item?.path}
                                            //     style={{
                                            //         textDecoration: 'none',
                                            //         color: 'white',
                                            //     }}
                                            //     key={i}
                                            // >
                                            <Typography
                                                sx={{
                                                    fontWeight: '500',
                                                    color: `${theme.palette.text.lightblue}`,
                                                }}
                                                key={i}
                                            >
                                                {item?.title}
                                            </Typography>
                                            // </NavLink>
                                        );
                                    })}
                                </Box>
                                {presistLogin && (
                                    <Button
                                        variant="btn2"
                                        onClick={() => {
                                            navigate('/dashboard');
                                        }}
                                    >
                                        Dashboard
                                    </Button>
                                )}
                                {!presistLogin && (
                                    <Button
                                        variant="btn2"
                                        onClick={() => {
                                            navigate('/login');
                                        }}
                                    >
                                        Sign In
                                    </Button>
                                )}
                                <Button variant="btn1">Try for free</Button>
                            </Box>
                        </Drawer>
                    </Hidden>
                </Stack>
            </Container>
        </>
    );
};

export default Header;
