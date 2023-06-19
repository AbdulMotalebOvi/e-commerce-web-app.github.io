'use client'
import React, { createContext, useState } from 'react';

// Create the context
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
    // State to store the user ID
    const [userId, setUserId] = useState(null);

    // Function to update the user ID
    const updateUserId = (newUserId) => {
        setUserId(newUserId);
    };

    // Provide the user ID and update function to the child components
    return (
        <UserContext.Provider value={{ userId, updateUserId }}>
            {children}
        </UserContext.Provider>
    );
};

// Export the context itself
export default UserContext;
