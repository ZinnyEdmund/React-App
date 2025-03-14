// import React, { createContext, useState } from "react";

type User = { username: string; email: string; role: "Admin" | "Editor" | "Viewer" } | null;

type AuthContextType = {
    user: User;
    isAuthenticated: boolean;
    login: (user: User) => void; 
    logout: () => void;
};

// Create the Authentication context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (user: User) => {
        if (!user) throw new Error("Invalid user data");
        setUser(user);
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for accessing the context
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider.");
    }
    return context;
};

export default AuthProvider;