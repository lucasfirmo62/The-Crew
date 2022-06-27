import { createContext, useState } from "react";

export const AuthContext = createContext({ auth: false });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ auth: false })

    return (
        <AuthContext.Provider value={[user, setUser]}>
            {children}
        </AuthContext.Provider>
    );
};