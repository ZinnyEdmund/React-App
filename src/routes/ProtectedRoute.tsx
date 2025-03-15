import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const auth = useAuth();

    // If auth context is not available, redirect to login
    if (!auth) {
        console.error("ProtectedRoute must be used within an AuthProvider.");
        return <Navigate to="/login" />;
    }

    // If the user is not authenticated, redirect to login
    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;