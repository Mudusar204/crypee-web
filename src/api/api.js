import { url } from '../URL';
import axios from 'axios';
import Cookies from 'js-cookie';

export const loginHandle = async (data) => {
    try {
        const response = await axios.post(`${url}/users/login`, data);
        if (response) return response;
    } catch (err) {
        return err;
    }
};

export const handleRefresh = async () => {
    try {
        const refreshToken = Cookies.get('refreshToken-dai214');
        const response = await axios.post(`${url}/refresh`, {
            refreshToken,
        });
        if (response) return response;
    } catch (err) {
        return err;
    }
};

export const handleRegister = async (data) => {
    try {
        const response = axios.post(`${url}/users/signup`, data);
        if (response) return response;
    } catch (err) {
        console.log('reg err',err)
        return err;
    }
};
