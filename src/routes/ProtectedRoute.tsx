import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute: React.FC = () => {
    const auth = useAuth();

    if (!auth) {
        console.error("ProtectedRoute must be used within an AuthProvider.");
        return <Navigate to="/login" />;
    }

    if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;  // This renders child routes dynamically
};

export default ProtectedRoute;