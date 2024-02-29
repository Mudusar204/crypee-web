import { useEffect, useState } from 'react';

import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { NavLink } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../config';
import { useNavigate, useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterQuery } from '../redux/slices/filterTransectionSlice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        backgroundColor: '#fff',
        color: '#fff',

        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: `${theme.palette.text.white}`,
                marginRight: theme.spacing(1.5),
                textAlign: 'center',
            },
            '&:active': {
                backgroundColor: '#4FAAE4',
            },
        },
    },
}));

const StyledMenuItem = styled(MenuItem)({
    display: 'block',
    textAlign: 'start',
    width: '100%',
    // '&:hover': {
    //     background: ' linear-gradient(180deg, #A1DAFD 0%, #4FA9E3 71.87%)',
    // },
});

const StyledLink = styled(NavLink)(() => ({
    textDecoration: 'none',
    '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none',
        color: 'black',
    },
}));

export const NavigationDropdown = ({ nameToShow, items }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    color: '#0B7BC3',
                    textTransform: 'capitalize',
                    fontSize: { lg: '16px', md: '14px', xs: '12px' },
                }}
                onClick={handleClick}
            >
                {nameToShow}
                <ArrowDropDownIcon />
            </Button>
            <StyledMenu
                id="menu1"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {items?.map((item, i) => {
                    return (
                        <StyledLink key={i} to={item.link}>
                            <StyledMenuItem onClick={handleClose}>{item.itemName}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export const SortingDropdown = ({ sortItem, setChecked, index }) => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const setQuery = (item, i) => {
        setChecked(index, i);
        dispatch(setFilterQuery({ ...item, query: sortItem.name }));
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const validateStartDate = (date) => {
        if (date > endDate) {
            toast.error('invalid Start and End date');
            // setEndDate(date);
            return;
        }
        setStartDate(date);
        let dateObject = {
            from: date.toDateString(),
            to: endDate.toDateString(),
            checked: false,
        };

        setQuery(dateObject, 1);
    };

    const validateEndDate = (date) => {
        if (date < startDate) {
            toast.error('invalid Start and End date');
            return;
            // setStartDate(date);
        }
        setEndDate(date);
        let dateObject = {
            from: startDate.toDateString(),
            to: date.toDateString(),
            checked: false,
        };
        setQuery(dateObject, 2);
    };

    return (
        <>
            <Button
                sx={{
                    border: '1px solid #3696D2',
                    textTransform: 'capitalize',
                    color: 'white',
                    minWidth: '6rem',
                    margin: '1.3em .2em',
                    background: ' linear-gradient(180deg, #A1DAFD 0%, #4FA9E3 71.87%)',
                }}
                onClick={handleClick}
            >
                {sortItem.name}
                <ArrowDropDownIcon />
            </Button>
            <StyledMenu
                open={Boolean(anchorEl)}
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                onClose={handleClose}
            >
                {sortItem?.items?.map((item, i) => {
                    return (
                        <StyledLink key={i}>
                            {sortItem.name === 'Date' ? (
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '50px',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <StyledMenuItem
                                        sx={{ height: 280, width: 200, marginLeft: '40px' }}
                                    >
                                        <DatePicker
                                            dropdownMode="select"
                                            popperPlacement="bottom"
                                            open={true}
                                            selected={startDate}
                                            placeholderText={'Set StartDate'}
                                            onChange={validateStartDate}
                                        />
                                    </StyledMenuItem>
                                    <StyledMenuItem sx={{ height: 280, width: 220 }}>
                                        <DatePicker
                                            dropdownMode="select"
                                            popperPlacement="bottom"
                                            open={true}
                                            selected={endDate}
                                            placeholderText={'Set EndDate'}
                                            onChange={validateEndDate}
                                        />
                                    </StyledMenuItem>
                                </div>
                            ) : (
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <input type="checkbox" checked={item.checked} />
                                    <StyledMenuItem
                                        onClick={() => {
                                            setQuery(item, i), handleClose();
                                        }}
                                    >
                                        {item.name}
                                    </StyledMenuItem>
                                </div>
                            )}
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export const CountryDropdown = ({ countries }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',
                }}
                variant="btn1"
                startIcon={<LocationOnIcon />}
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                Country
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {countries?.map((country, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem onClick={handleClose}>{country}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export const SortByNewest = ({ categories }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    fontWeight: 600,
                    fontSize: { xs: '0.7rem', md: '1rem' },
                    color: 'black',
                }}
                variant="text"
                endIcon={<ExpandMoreIcon />}
                onClick={handleClick}
            >
                Newest
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {categories?.map((category, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem onClick={handleClose}>{category}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

export const UnrealizedPerformanceDropdown = ({ performances }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',

                    fontSize: { xs: '7.4px', sm: '13px' },
                    padding: '.4em .8em',
                }}
                variant="btn1"
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                Unrealized Performance
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {performances?.map((performance, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem onClick={handleClose}>{performance}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};
export const AssetsDropdown = ({ categories }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',
                    fontSize: '14px',
                }}
                variant="btn1"
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                All Time
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {categories?.map((category, i) => {
                    return (
                        <StyledLink key={i}>
                            <StyledMenuItem onClick={handleClose}>{category}</StyledMenuItem>
                        </StyledLink>
                    );
                })}
            </StyledMenu>
        </>
    );
};

// ===========================
export const AddwalletDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [exchangeData, setExchangeData] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    let storedData = JSON.parse(localStorage.getItem('persistMe'));

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${REACT_APP_BASE_URL}/api/avlExchanges`, {
                    headers: {
                        Authorization: storedData?.user?.token,
                    },
                });
                const result = await response.json();
                setExchangeData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    // }, [storedData]);
}, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                sx={{
                    textTransform: 'capitalize',
                    fontSize: { lg: '14px', xs: '12px', sm: '13px', md: '13px' },
                }}
                variant="btn1"
                endIcon={<ArrowDropDownIcon />}
                onClick={handleClick}
            >
                Add Wallet
            </Button>
            <StyledMenu
                id="menu2"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={() => handleClose(null)}
            >
                {Array.isArray(exchangeData) && exchangeData.length > 0 ? (
                    exchangeData.map((exchange, i) => {
                        return (
                            <StyledMenuItem key={i} sx={{ color: 'black' }}>
                                <Box
                                    display="flex"
                                    alignItems={'center'}
                                    gap={'10px'}
                                    onClick={() => {
                                        let path = `/addewallet/${exchange.name}`;
                                        navigate(path, {
                                            state: {
                                                exchangeData: exchange,
                                            },
                                        });
                                    }}
                                >
                                    <img
                                        src={REACT_APP_BASE_URL + exchange.img}
                                        alt={REACT_APP_BASE_URL + exchange.img}
                                        width={'20px'}
                                    />
                                    <Typography>{exchange.name}</Typography>
                                </Box>
                            </StyledMenuItem>
                        );
                    })
                ) : (
                    <StyledMenuItem sx={{ color: 'black' }}>No available exchanges</StyledMenuItem>
                )}
            </StyledMenu>
        </>
    );
};
