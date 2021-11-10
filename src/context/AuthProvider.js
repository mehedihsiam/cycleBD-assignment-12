import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const AuthenticationContexts = useFirebase();
    return (
        <AuthContext.Provider value={AuthenticationContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;