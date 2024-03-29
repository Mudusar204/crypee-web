import React from 'react';
import { CustomizedSwitch } from '../../Components/DropdownMenus';
import { Box, Stack } from '@mui/material';

function Notifications() {
    return (
        <>
            <Box
                sx={{
                    maxWidth: { xs: '90%', sm: '650px' },
                    mx: 'auto',
                    border: '1px solid rgb(229, 232, 237)',
                    background: 'rgb(255, 255, 255)',
                    borderRadius: '5px',
                    width: '100%',
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 2.5, sm: 3.7, md: 5 },
                    my: { xs: 5, sm: 7, md: 10 },
                }}
            >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 900,
                            color: '#000',
                        }}
                    >
                        New transactions notifications
                    </Box>
                    <CustomizedSwitch />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 900,
                            color: '#000',
                        }}
                    >
                        New transactions email
                    </Box>
                    <CustomizedSwitch />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 900,
                            color: '#000',
                        }}
                    >
                        Daily portfolio notifications
                    </Box>
                    <CustomizedSwitch />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 900,
                            color: '#000',
                        }}
                    >
                        Daily portfolio email
                    </Box>
                    <CustomizedSwitch />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        borderBottom: '1px solid rgb(229, 232, 237)',
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 900,
                            color: '#000',
                        }}
                    >
                        Product updates and promotional emails
                    </Box>
                    <CustomizedSwitch />
                </Stack>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: { xs: 3, sm: 5 },
                        py: { xs: 1, sm: 2, md: 3 },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { xs: '13px', sm: '15px' },
                            fontWeight: 900,
                            color: '#000',
                        }}
                    >
                        Re-authentication notifications for exchange accounts
                    </Box>
                    <CustomizedSwitch />
                </Stack>
            </Box>
        </>
    );
}

export default Notifications;
