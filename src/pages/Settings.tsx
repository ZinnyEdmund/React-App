import React from "react";
import { useAuth } from "../context/AuthContext";

const Settings: React.FC = () => {
    const { user } = useAuth();

    if (!user || user.role !== "Admin") {
        return <p>Access denied. Only Admins can view this page.</p>;
    }

    return (
        <div>
            <h1>Settings</h1>
            <p>Manage application settings here.</p>
        </div>
    );
};

export default Settings;