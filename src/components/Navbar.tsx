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
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/profile">Profile</Link>
                {user.role === "Admin" && <Link to="/settings">Settings</Link>}
                <li><button onClick={logout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar