import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar: React.FC = () => {
    const { user, logout } = useAuth();

    if (!user) return null;

    return (
        <nav>
            <span>Welcome, {user.username} ({user.email}) - ({user.role})</span>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                {user.role === "Admin" && (
                    <li><Link to="/settings">Settings</Link></li>
                )}
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;