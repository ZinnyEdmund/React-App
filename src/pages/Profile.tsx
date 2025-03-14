import React from "react";
import { useAuth } from "../context/AuthContext";

// Define the Profile component
// The Profile component displays the user's profile information.
const Profile: React.FC = () => {
    const { user } = useAuth();

    // If the user is not logged in, display a message
    if (!user) {
        return <p>Please log in to view your profile.</p>;
    }
    // Display the user's profile information
    return (
        <div>
            <h1>Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
        </div>
    );
};

export default Profile;