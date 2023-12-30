import React, { useState } from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import { graphic } from 'echarts';

const Option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jun2021', 'Oct2021', 'Feb2022', 'Jun2021', 'Oct2021', 'Feb2022'],
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: true,
            lineStyle: { color: 'gray', type: 'dashed', opacity: '0.2' },
        },
        axisLabel: {
            formatter: (value) => `PKR ${value / 1e6}M`,
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
            data: [0, 10e6, 4e6,30e6, 15e6, 20e6,3e6,20e6,12e6,20e6],
            tooltip: {
                formatter: (params) => `PKR ${params.value / 1e6}M`,
            },
        },
    ],
};


export default function Profile() {
    const [time, settime] = useState(0);
    return (
        <Box >
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
                <Stack direction="row" gap={1} alignItems="center" overflow={'auto'}>
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
                </Stack>
            </Stack>
            <Stack direction="row" gap={{ xs: 2, md: 3 }} alignItems="center" mt={{ xs: 3, md: 7 }}>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        fontSize: { xs: '18px', sm: '24px', md: '38px' },
                        lineHeight: '24px',
                        color: '#0B7BC4',
                    }}
                >
                    <sup>$</sup>556,701
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        fontSize: { xs: '10px', md: '16px' },
                        lineHeight: '24px',
                        minWidth: { xs: '25px', md: '55px' },
                        bgcolor: '#0B7BC4',
                        color: 'white',
                        borderRadius: '5px',
                        padding: '5px 10px',
                    }}
                >
                    -39.23%
                </Typography>
                <Typography
                    sx={{
                        fontFamily: 'Poppins',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        fontSize: { xs: '12px', md: '14px' },
                        lineHeight: '24px',
                        color: '#0B7BC4',
                    }}
                >
                    -359,318 PKR
                </Typography>
            </Stack>
            <Stack
                mt={5}
                gap={3}
                direction="row"
                flexWrap="wrap"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                        sx={{
                            color: '#474747',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '12px',
                        }}
                    >
                        Change(1D)
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '10px',
                            padding: '5px 10px',
                            bgcolor: '#0B7BC4',
                            color: 'white',
                            borderRadius: '5px',
                        }}
                    >
                        +7.10%
                    </Typography>
                    <Typography
                        sx={{
                            color: '#474747',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            fontSize: '12px',
                        }}
                    >
                        +36917.62PKR
                    </Typography>
                </Stack>
                <Stack direction="row" flexWrap="wrap" gap={2} alignItems="center">
                    <Stack direction="row" gap={2} alignItems="center">
                        <Box
                            sx={{
                                minWidth: '35px',
                                height: '25px',
                                background: 'linear-gradient(180deg, #0B7BC4 0%, #5BACDE 100%)',
                                borderRadius: '10px',
                            }}
                        ></Box>
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
                            }}
                        ></Box>
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
                            Net deposits
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Box  sx={{ boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)', borderRadius: '10px', mt: 5 ,py:{lg:9,xs:2,md:3,sm:2}}}>
                <ReactEcharts
                    option={Option}
                    style={{ width: '100%', height: '400px' }}
                ></ReactEcharts>
            </Box>
         
        </Box>
    );
}
