import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import { graphic, use } from 'echarts';
import { DataContext } from '../../utils/ContextAPI';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../config';

export default function Profile({ data }) {
    const [time, settime] = useState(0);
    const [date, setDate] = useState([]);
    const [value, setValue] = useState([]);
    const [profile, setProfile] = useState();
    const { setLoader } = useContext(DataContext);

    useEffect(() => {
        let timeArray = [];
        let valueArray = [];
        for (let i = 0; i < data?.length; i++) {
            timeArray.push(data[i]?.date.split('T')[0]);
            valueArray.push(data[i]?.balance);
            console.log();
        }
        setDate(timeArray);
        setValue(valueArray);
    }, [data]);

    const fetchProfile = async () => {
        try {
            setLoader(true);
            const refreshToken = localStorage.getItem('persistMe')
                ? JSON.parse(localStorage.getItem('persistMe'))
                : null;
            let response = await axios.get(`${REACT_APP_BASE_URL}/api/data/getPortfolio`, {
                headers: {
                    Authorization: refreshToken?.user?.token,
                },
            });
            // console.log(response.data.data, 'response.data');
            setProfile(response.data?.data);

            setLoader(false);
        } catch (error) {
            setLoader(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    const Option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
        },
        yAxis: {
            type: 'value',
            min: {
                value: 0,
            },
            splitLine: {
                show: true,
                lineStyle: { color: 'gray', type: 'dashed', opacity: '0.2' },
            },
            axisLabel: {
                formatter: (value) => `$ ${value}`,
            },
        },
        series: [
            {
                type: 'line',
                symbol: 'none',
                itemStyle: {
                    color: '#307BAB',
                },
                areaStyle: {
                    color: new graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: '#3C97D0',
                        },
                        {
                            offset: 1,
                            color: '#ffffff',
                        },
                    ]),
                },
                data: value,
                tooltip: {
                    formatter: (params) => `$ ${params.value}`,
                },
            },
        ],
    };

    return (
        <Box>
            <Stack direction="row" flexWrap="wrap" justifyContent="space-between" gap={3}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: { xs: '18px', md: '32px' },
                        lineHeight: '24px',
                        color: '#0B7BC4',
                    }}
                >
                    Your Portfolio
                </Typography>
                {/* <Stack direction="row" gap={1} alignItems="center" overflow={'auto'}>
                    {['1D', '1W', '1M', '3M', '1Y', 'All'].map((val, i) => (
                        <Button
                            key={i}
                            variant="text"
                            sx={{
                                color: time === i ? '#fff' : '#0B7BC4',
                                minWidth: { xs: '40px', md: '55px' },
                                height: '35px',
                                borderRadius: '10px  ',
                                background:
                                    time === i
                                        ? 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)'
                                        : '',
                            }}
                            onClick={() => settime(i)}
                        >
                            {val}
                        </Button>
                    ))}
                </Stack> */}
            </Stack>
            <Stack direction="row" gap={{ xs: 2, md: 3 }} alignItems="center" mt={{ xs: 3, md: 7 }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: { xs: '18px', sm: '24px', md: '32px' },
                        lineHeight: '24px',
                        color: '#0B7BC4',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <sup>$</sup>
                    {profile?.balance.toFixed(2)}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={2} alignItems="center" ml="auto">
                    <Stack direction="row" gap={2} alignItems="center">
                        <Box
                            sx={{
                                minWidth: '35px',
                                height: '25px',
                                background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
                                borderRadius: '10px',
                                color: '#fff',
                                p: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {profile?.netProceeds}
                        </Box>
                        <Typography
                            sx={{
                                color: '#0B7BC4',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '12px',
                                lineHeight: '24px',
                            }}
                        >
                            Market value + Net proceeds
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                            sx={{
                                minWidth: '35px',
                                height: '25px',
                                background:
                                    'linear-gradient(0deg, rgba(250,248,252,0.966) 0%, rgba(112,112,112,1) 100%)',
                                borderRadius: '10px',
                                color: '#fff',
                                p: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            {profile?.netCost}
                        </Box>
                        <Typography
                            sx={{
                                color: '#0B7BC4',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: '600',
                                fontSize: '12px',
                                lineHeight: '24px',
                            }}
                        >
                            Net cost
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Box
                sx={{
                    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)',
                    borderRadius: '10px',
                    mt: 5,
                    py: { lg: 9, xs: 2, md: 3, sm: 2 },
                }}
            >
                <ReactEcharts
                    option={Option}
                    style={{ width: '100%', height: '400px' }}
                ></ReactEcharts>
            </Box>
        </Box>
    );
}
