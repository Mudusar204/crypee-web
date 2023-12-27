import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button, Box, Paper } from '@mui/material';
import { REACT_APP_BASE_URL } from '../../config';
import { useLocation } from 'react-router';

const Addexchangedata = () => {
    let location = useLocation();
    const [apiKey, setApiKey] = useState('');
    const [apiSecret, setApiSecret] = useState('');
    let storedData = JSON.parse(localStorage.getItem('persistMe'));
    const [exchangeId, setExchangeId] = useState('');
    console.log(exchangeId,'exchangeid');
 
    useEffect(() => {
        if (location.state.exchangeData.id) {
            setExchangeId(location.state.exchangeData.id);
        }
    }, [location.state]);

    const handleSubmitt = async () => {
        try {
            const data = new FormData();
            data.append('exchangeId', exchangeId);
            data.append('apiKey', apiKey);
            data.append('apiSecret', apiSecret);

            const response = await fetch(`${REACT_APP_BASE_URL}/api/user/addExchange`, {
                method: 'POST',
                headers: {
                    Authorization: storedData?.user?.token,
                },
                body: data,
            });
            const result = await response.json();
            console.log('Data submitted successfully:', result);
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 }}>
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    maxWidth: 400,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px:4,
                    py:4,
                }}
            >
                <Typography variant="h6" color="black">
                    {location.state.exchangeData.name}
                </Typography>
                <img
                                            src={REACT_APP_BASE_URL + location.state.exchangeData.img}
                                            alt={REACT_APP_BASE_URL + location.state.exchangeData.img}
                                            width={'50px'}
                                        />

                <TextField
                    label="API Key"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setApiKey(e.target.value)}
                    value={apiKey}
                />

                <TextField
                    label="API Secret"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    onChange={(e) => setApiSecret(e.target.value)}
                    value={apiSecret}
                />

                <Button variant="contained" color="primary" onClick={handleSubmitt}>
                    Submit
                </Button>
            </Paper>
        </Box>
    );
};

export default Addexchangedata;
