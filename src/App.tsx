import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

// Define the App component
// The App component is the root component of the application. It sets up the routing configuration and renders the main application components.
const App: React.FC = () => {
    return (
        <AuthContext.Provider value={undefined}>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={
                        <ProtectedRoute>
                            <>
                                <Navbar />
                                <Dashboard />
                            </> 
                        </ProtectedRoute>} />
                    <Route path="/profile" element={
                        <ProtectedRoute>
                            <>
                                <Navbar />
                                <Profile />
                            </>
                        </ProtectedRoute>} />
                    <Route path="/settings" element={
                        <AdminRoute>
                            <>
                                <Navbar />
                                <Settings />
                            </>
                        </AdminRoute>} />
                    <Route path="*" element={<Navigate to="/login" />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </Router>
            </AuthContext.Provider>
    );
};

export default App;