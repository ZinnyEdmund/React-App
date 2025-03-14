import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Define the ProtectedRouteProps interface
interface ProtectedRouteProps {
    children: React.ReactNode;
}

// Define the ProtectedRoute component
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useAuth();

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    // If the user is authenticated, render the children
    return <>{children}</>;
};

export default ProtectedRoute;