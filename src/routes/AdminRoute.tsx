import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Define the AdminRouteProps interface
interface AdminRouteProps {
    children?: React.ReactNode;
}

// Define the AdminRoute component
// The AdminRoute component is a custom route component that checks if the user is an admin before rendering the children. If the user is not an admin, it redirects to the dashboard page.
const AdminRoute: React.FC<AdminRouteProps> = () => {
    const { user } = useAuth();

    // If the user is not an admin, redirect to the dashboard page
    if ( !user  || user.role !== "Admin") {
        return <Navigate to="/dashboard" />;
    }
    // If the user is an admin, render the children
    return <Outlet />;
};

export default AdminRoute;