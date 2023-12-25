import React, { useEffect, useState } from 'react';
import { Typography, TextField, Button, Box, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../config';

const Addexchangedata = () => {
    const { _id } = useParams();
    const [exchangeData, setExchangeData] = useState(null);
    const [apiKey, setApiKey] = useState('');
    const [apiSecret, setApiSecret] = useState('');
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

                const matchedExchange = result.data.find(exchange => exchange._id === _id);

                setExchangeData(matchedExchange);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [_id, storedData]);

    const handleSave = () => {
        console.log('API Key:', apiKey);
        console.log('API Secret:', apiSecret);
    };

    if (!exchangeData) {
        return <div>No data available</div>;
    }

    const { name, img, requiredFields } = exchangeData;

    return (
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',my:3}}>
            <Paper elevation={3} sx={{ p: 2, maxWidth: 400, display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center' }}>
                <img src={REACT_APP_BASE_URL + img} alt={name} style={{ maxWidth: '30%' }} />
                <Typography variant="h6" color="primary">
                    {name}
                </Typography>
                {requiredFields.includes('ApiKey') && (
                    <TextField
                        label="API Key"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setApiKey(e.target.value)}
                    />
                )}
                {requiredFields.includes('ApiSecret') && (
                    <TextField
                        label="API Secret"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        onChange={(e) => setApiSecret(e.target.value)}
                    />
                )}
                <Button disabled variant="contained" color="primary" onClick={handleSave}>
                    Save
                </Button>
            </Paper>
        </Box>
    );
};

export default Addexchangedata;
