import React, {createContext, useContext, useState} from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    // Replace this with actual Firebase auth state later
    const [user, setUser] = useState({
        name: "Tariq Abdul Aziz", role: "Inventory Manager"
    });

    const login = (userData) => setUser(userData);
    const logout = ()=> setUser(null);

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = ()=> useContext(AuthContext);