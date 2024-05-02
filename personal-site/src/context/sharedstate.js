"use client"
import React, { createContext, useContext, useState } from 'react';

// Create the context
const StateContext = createContext(null);

// Provider component that wraps your app and provides the state
export const StateProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState(0);

    return (
        <StateContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </StateContext.Provider>
    );
};

// Custom hook to use the shared state
export const useSharedState = () => {
    const context = useContext(StateContext);
    if (context === null) {
        throw new Error('useSharedState must be used within a StateProvider');
    }
    return context;
};
