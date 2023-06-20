'use client'
import { createContext, useContext, useEffect, useState } from 'react';

// Create the localStorage context
export const LocalStorageContext = createContext();

// Custom hook for accessing localStorage context
export const useLocalStorage = () => useContext(LocalStorageContext);

// Create a localStorage provider component
export const LocalStorageProvider = ({ children }) => {
    const [storedData, setStoredData] = useState(null);

    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            const storedData = localStorage.getItem('data');

            setStoredData(storedData && storedData !== 'undefined' ? JSON.parse(storedData) : null);
        }
    }, []);
    const myId = storedData?.userId;
    const setData = (data) => {
        localStorage.setItem('data', JSON.stringify(data));
        setStoredData(data);
    };

    const clearData = () => {
        localStorage.removeItem('data');
        setStoredData(null);
    };

    const value = {
        myId,
        setData,
        clearData,
    };

    return (
        <LocalStorageContext.Provider value={value}>
            {children}
        </LocalStorageContext.Provider>
    );
};

export default LocalStorageProvider;
