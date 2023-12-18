// api.js
import { REACT_APP_BASE_URL } from '../../public/.';
import axios from 'axios';

export const loginHandle = async (data) => {
    try {
        const response = await axios.post(`${REACT_APP_BASE_URL}/user/login`, data);
        return response;
    } catch (err) {
        return err;
    }
};

export const handleRefresh = async () => {
    try {
        const refreshToken = sessionStorage.getItem('refreshToken-dai214');

        if (!refreshToken) {
            throw new Error('Refresh token not found in session storage');
        }

        const response = await axios.post(
            `${REACT_APP_BASE_URL}/refresh`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${refreshToken}`,
                },
            }
        );

        return response;
    } catch (err) {
        return err;
    }
};

export const handleRegister = async (data) => {
    try {
        const response = axios.post(`${REACT_APP_BASE_URL}/user/signup`, data);
        return response;
    } catch (err) {
        console.log('reg err', err);
        return err;
    }
};
