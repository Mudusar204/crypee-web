import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

const ContextAPI = (props) => {
    //login and singup
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLoggedIn = () => {
        setLoggedIn(!loggedIn);
    };
    const handleLoggedOut = () => {
        localStorage.removeItem('x-auth-token');
        setLoggedIn(false);
    };
    const [isAdmin, setIsAdmin] = useState(false);
    const [authToken, setAuthToken] = useState({
        authToken: null,
        isAuthenticated: false,
    });

    const getAuthToken = async () => {
        let auth = localStorage.getItem('x-auth-token');
        // eslint-disable-next-line
        const verify = await axios.get(`${process.env.REACT_APP_BASE_URL}users/verify`, {
            headers: {
                'x-auth-token': auth,
            },
        });

        if (auth)
            if (verify.status === 200) {
                setAuthToken({
                    authToken: auth,
                    isAuthenticated: true,
                });
                setIsAdmin(verify.data);
                setLoggedIn(true);
            } else {
                localStorage.removeItem('x-auth-token');
                setLoggedIn(false);
            }
    };

    useEffect(() => {
        getAuthToken();
    }, [loggedIn]);

    return (
        <DataContext.Provider
            value={{
                // login signup
                loggedIn,
                handleLoggedIn,
                authToken,
                handleLoggedOut,
                isAdmin,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export default ContextAPI;
