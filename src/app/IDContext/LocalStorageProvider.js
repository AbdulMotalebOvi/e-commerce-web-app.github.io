'use client'
import { createContext, useContext, useState } from 'react';

// Create the localStorage context
export const LocalStorageContext = createContext();

// Custom hook for accessing localStorage context
export const useLocalStorage = () => useContext(LocalStorageContext);

// Create a localStorage provider component
export const LocalStorageProvider = ({ children }) => {
    const [storedData, setStoredData] = useState(() => {
        const storedData = localStorage.getItem('data');
        return storedData ? JSON.parse(storedData) : null;
    });

    const setData = (data) => {
        localStorage.setItem('data', JSON.stringify(data));
        setStoredData(data);
    };

    // const getUserIdByUsername = (username) => {
    //     if (storedData && Array.isArray(storedData.users)) {
    //       const user = storedData.users.find((user) => user.username === username);
    //       if (user) {
    //         return user.userId;
    //       }
    //     }
    //     return null;
    //   };

    const clearData = () => {
        localStorage.removeItem('data');
        setStoredData(null);
    };

    const value = {
        data: storedData,
        setData,
        // getUserIdByUsername,
        clearData,
    };

    return (
        <LocalStorageContext.Provider value={value}>
            {children}
        </LocalStorageContext.Provider>
    );
};
export default LocalStorageProvider