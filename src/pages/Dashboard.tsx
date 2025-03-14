import React from "react";
import { useAuth } from "../context/AuthContext";

// Define the Dashboard component
// The Dashboard component displays a welcome message based on the user's role.
const Dashboard:React.FC = () => {
    const { user } = useAuth();

    // If the user is not loaded yet, display a loading message
    if (!user) return <p>Loading...</p>;

    // Display a welcome message based on the user's role
    return (
        <div>
            <h1>Dashboard</h1>
            {user.role === "Admin" && <p>Welcome, Admin! Here are your controls.</p>}
            {user.role === "Editor" && <p>Welcome, Editor! Here is your content panel.</p>}
            {user.role === "Viewer" && <p>Welcome, Viewer! Here are your reports.</p>}
        </div>
    );
};

export default Dashboard;