import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Typography, TextField, Button, Box, Paper } from '@mui/material';
import { REACT_APP_BASE_URL } from '../../config';
import { useLocation, useNavigate } from 'react-router';
import { setWalletData } from '../../redux/slices/userWalletData';
import { useDispatch } from 'react-redux';
import useMakeToast from '../../hooks/makeToast';
import upload from '../../images/AddWallet/upload.png';

const Addexchangedata = () => {
    let location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const makeToast = useMakeToast();

    const [apiKey, setApiKey] = useState('');
    const [apiSecret, setApiSecret] = useState('');
    const [exchangeId, setExchangeId] = useState('');
    const [file, setFile] = useState(null);

    let storedData = JSON.parse(localStorage.getItem('persistMe'));
    // console.log(exchangeId,'exchangeid');

    useEffect(() => {
        if (location.state.exchangeData.id) {
            setExchangeId(location.state.exchangeData.id);
        }
    }, [location.state]);

    const onDrop = useCallback((acceptedFiles) => {
        // Do something with the files
        console.log(acceptedFiles, 'acceptedFiles');
        setFile(acceptedFiles[0]);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'text/csv, application/csv',
    });

    const handleSubmitt = async () => {
        try {
            const data = new FormData();
            let csvPresence = location?.state?.exchangeData?.requiredFields?.includes('csv');
            if (csvPresence) {
                data.append('exchangeId', exchangeId);
                data.append('file', file);
            } else {
                data.append('exchangeId', exchangeId);
                data.append('key[ApiKey]', apiKey);
                data.append('key[ApiSecret]', apiSecret);
            }

            const response = await fetch(
                `${REACT_APP_BASE_URL}/api/user/${csvPresence ? 'addExchangeCsv' : 'addExchange'}`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: storedData?.user?.token,
                    },
                    body: data,
                },
            );

            const result = await response.json();
            if (response.ok) {
                makeToast(result?.message, 'success', 3);
                localStorage.setItem('walletdata', JSON.stringify(result?.data));
                dispatch(setWalletData(result?.data));
                navigate('/dashboard');
            } else {
                makeToast(result?.message, 'error', 3);
            }
            console.log('Data submitted successfully:', result);
        } catch (error) {
            makeToast(error.message, 'error', 3);
            console.error('Error submitting data:', error);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 3 }}>
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    maxWidth: 450,
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    px: 4,
                    py: 4,
                }}
            >
                <img
                    src={REACT_APP_BASE_URL + location.state.exchangeData.img}
                    alt={REACT_APP_BASE_URL + location.state.exchangeData.img}
                    width={'100px'}
                />
                <Typography variant="h6" color="black">
                    {location.state.exchangeData.name}
                </Typography>

                {!location?.state?.exchangeData?.requiredFields?.includes('csv') ? (
                    <>
                        <TextField
                            required
                            label="API Key"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={(e) => setApiKey(e.target.value)}
                            value={apiKey}
                        />

                        <TextField
                            required
                            label="API Secret"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            onChange={(e) => setApiSecret(e.target.value)}
                            value={apiSecret}
                        />
                    </>
                ) : (
                    <>
                        <Box
                            {...getRootProps()}
                            sx={{
                                width: '100%',
                                cursor: 'pointer',
                                border: '2px dashed #000',
                                borderRadius: '5px',
                                py: 5,
                                px: 10,
                                my: { xs: '10px', sm: '20px', md: '30px', lg: '40px' },
                            }}
                        >
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p>Drop the files here ...</p>
                            ) : (
                                <Box component="img" sx={{ width: '100px' }} src={upload} alt="" />
                            )}
                        </Box>
                    </>
                )}

                <Button variant="contained" color="primary" onClick={handleSubmitt}>
                    Submit
                </Button>
            </Paper>
        </Box>
    );
};

export default Addexchangedata;
