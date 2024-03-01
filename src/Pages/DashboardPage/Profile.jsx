import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, Stack, Typography } from '@mui/material';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { graphic, use } from 'echarts';
import { DataContext } from '../../utils/ContextAPI';
import axios from 'axios';
import { REACT_APP_BASE_URL } from '../../config';

echarts.registerTheme('my_theme', {
    // backgroundColor: '#f4cccc'
  });

export default function Profile({ dataprops }) {
    const [time, settime] = useState(0);
    const [date, setDate] = useState([]);
    const [value, setValue] = useState([]);
    const [alldate, setAllDate] = useState([]);
    const [allvalue, setAllValue] = useState([]);
    const [profile, setProfile] = useState();
    const [asset, setProfileAsset] = useState();
    const [assetper, setProfilePerc] = useState();
    const [activeButton, setActiveButton] = useState(null);

    const [combineTimeValue, setCombineTimeValue] = useState({});


    const { setLoader } = useContext(DataContext);

    // useEffect(() => {
    //     if(dataprops){
          
    //     }
            
       
       
    // }, [dataprops]);

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
            console.log(response.data?.data, 'response.data');
            setProfile(response.data?.data);
            setProfileAsset(response.data?.assets);
            setProfilePerc(response.data?.assetsPercentage);




            let timeArray = [];
            let valueArray = [];
            for (let i = 0; i < response?.data?.data?.graphData?.length; i++) {
    
                timeArray.push(response?.data?.data?.graphData[i]?.date.split('T')[0]);
                valueArray.push(response?.data?.data?.graphData[i]?.balance);
                console.log();
            }
            setCombineTimeValue(response?.data?.data?.graphData);
            setDate(timeArray);
            setAllDate(timeArray);
            setValue(valueArray);
            setAllValue(valueArray);


            setLoader(false);
        } catch (error) {
            setLoader(false);
            console.log(error);
        }
    };
    useEffect(() => {
        fetchProfile();
    }, []);

    
    // handleDataChange();


  





    const handleFilter = async (filterType) => {
    
        let filteredData = [];
        let filteredValue = [];

    
        // Get current date
        const currentDate = new Date();

        setActiveButton(filterType);

        const setDateFormat = (date) => {
            const originalDate = date;
            const year = originalDate.getFullYear();
            const month = String(originalDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed, so add 1
            const day = String(originalDate.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;
            return formattedDate;

        }
    
        switch  (filterType)  {
          case '1D':
            let oneDayAgo = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000));
            let oneDayAgos =  await setDateFormat(oneDayAgo);
            filteredData = date.filter(dateItem => new Date(dateItem) >= oneDayAgos);

            filteredValue = combineTimeValue?.filter(item => {
                const itemDate = item.filteredData?.split('T')[0];
                let result = filteredData?.includes(itemDate);
                return date.includes(itemDate);
            });

            break;
          case '1W':
            // Filter data for last 7 days
            let oneWeekAgo = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000));
            let oneWeekAgos =  await setDateFormat(oneWeekAgo);

            filteredData = date.filter(dateItem => new Date(dateItem) >= oneWeekAgos);

            break;
          case '1M':
            // Filter data for last 30 days
            let oneMonthAgo = new Date(currentDate.getTime() - (30 * 24 * 60 * 60 * 1000));
            let oneMonthAgos =  await setDateFormat(oneMonthAgo);

            filteredData = date.filter(dateItem => new Date(dateItem) >= oneMonthAgos);
            break;
            case '3M':
        // Filter data for last 3 months (90 days)
        let threeMonthsAgo = new Date(currentDate.getTime() - (90 * 24 * 60 * 60 * 1000));
        let threeMonthsAgos =  await setDateFormat(threeMonthsAgo);

        filteredData = date.filter(dateItem => new Date(dateItem) >= threeMonthsAgos);
        break;
      case '1Y':
        // Filter data for last 1 year (365 days)
        let oneYearAgo = new Date(currentDate.getTime() - (365 * 24 * 60 * 60 * 1000));
        let oneYearAgos =  await setDateFormat(oneYearAgo);

        filteredData = date.filter(dateItem => new Date(dateItem) >= oneYearAgos);
        break;
      case 'All':
        // No filtering, show all data
        filteredData = alldate;
        // filteredValue = allvalue;
        setValue(allvalue);


        break;
          default:
            // Default case: no filtering
            filteredData = date;
        }

        // Update state with filtered data
        setDate(filteredData);
        setValue(filteredValue);


      
      };

 

    const Option = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: date,
        },
        yAxis: {
            type: 'value',
            min: 0, // Set the minimum value directly, no need for an object
            splitLine: {
                show: true,
                lineStyle: { color: '#716E6E', type: 'dashed', opacity: 1 }, // Use a numeric value for opacity
            },
            axisLabel: {
                formatter: function(value) {
                    return 'USDT ' + value; // Your custom formatting logic goes here
                },
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
                <Typography
                >
                   &nbsp;
                </Typography>
               
            </Stack>
            <Stack direction="row" gap={{ }} alignItems="center" justifyContent="space-between" mt={{ xs: 3, md: 7 }} >
              <Stack direction="row"  alignItems="center" justifyContent="space-between">
                        <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: '700',
                                    fontSize: { xs: '18px', sm: '24px', md: '30px' },
                                    lineHeight: '24px',
                                    color: '#0B7BC4',
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginRight: '10px',
                                }}
                            >
                                <sup style={{"position":"relative","top":"-6px","fontSize":"15px","fontWeight":"500"}}>$</sup>
                                {profile?.balance.toFixed(4)}
                                {/* 555,701 */}
                            </Typography>
                            <Box
                                        sx={{
                                            minWidth: '35px',
                                            height: '26px',
                                            width: '62px',
                                            background: '#0B7BC3',
                                            borderRadius: '5px',
                                            color: '#fff',
                                            fontSize: '10px',
                                            p: 1,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                    {/* -39.23% */}
                                    {/* {profile?.balance.toFixed(4)} */}
                                    {asset &&  asset.toFixed(4)} %
                            </Box>
                                <Box
                                        sx={{
                                    marginRight: '10px',
                                            minWidth: '35px',
                                            height: '35px',
                                            // background: '#0B7BC3',
                                            borderRadius: '5px',
                                            color: '#0B7BC3',
                                            p: 1,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                    {/* -358.318 PKR */}
                                    {assetper &&  assetper.toFixed(4)} 

                                    </Box>
              </Stack>

              <Stack direction="row" alignItems="center" overflow={'auto'}>
                    {['1D', '1W', '1M', '3M', '1Y', 'All'].map((val, i) => (
                        <Button
                            key={i}
                            variant="text"
                            sx={{
                                color: activeButton === val ? '#fff' : '#0B7BC4',
                                minWidth: { xs: '40px', md: '44px' },
                                height: '35px',
                                borderRadius: '10px  ',
                                fontSize: '12px',
                                fontWeight: '300',
                                backgroundColor: activeButton === val ? '#0B7BC3' : 'transparent', // Change background color here
                                // background:
                                // val === i
                                //         ? '#0B7BC3'
                                //         : '',
                            }}
                            onClick={() => handleFilter(val)}
                        >
                            {val}
                        </Button>
                    ))}
                </Stack>
               
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="space-between" alignItems="center" ml="auto" mt={5}>
                    <Stack direction="row" gap={1} alignItems="center">
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
                           Change(ID)

                        </Typography>
                    <Box
                            sx={{
                                minWidth: '35px',
                                height: '23px',
                                // width: '47px',
                                fontSize: '10px',
                                background: '#0B7BC3',
                                borderRadius: '5px',
                                color: '#fff',
                                p: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                          +7.10%
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
                          +39,4676 PKR

                        </Typography>
                       
                    </Stack>
                    <Stack direction="row" gap={0} spacing={1} alignItems="center">
                    <Box
                            sx={{
                                minWidth: '35px',
                                height: '23px',
                                fontSize: '10px',

                                background: '#0B7BC3',
                                borderRadius: '5px',
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
                        <Box
                            sx={{
                                minWidth: '35px',
                                height: '25px',
                                background:
                                    '#F3F3F3',
                                borderRadius: '5px',
                                color: '#3333335e',
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
                            Net deposits
                        </Typography>
                    </Stack>
            </Stack>

            <Box
                sx={{
                    boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.05)',
                    borderRadius: '5px',
                    mt: 5,
                    py: { lg: 9, xs: 2, md: 3, sm: 2 },
                }}
            >

                <ReactEcharts
                    option={Option}
                    style={{ width: '100%', height: '400px' }}
                    className='echarts-for-echarts'
                    theme='my_theme'
                    notMerge={true}
                    lazyUpdate={true}
                ></ReactEcharts>


                {date ? (<div>{date}</div>) : (<div>Loading...</div>)}

             

                {/* {date ? (<div style={{color: "black"}}>{date}</div>) : (<div style={{color: 'black'}}>Loading</div>)} */}
              
                
            </Box>
        </Box>
    );
}
