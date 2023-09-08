import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../Layout/Dashboard';
import Login from '../Components/Login';
import SignUp from '../Components/SignUp';
import ForgotPassword from '../Components/ForgotPassword';
import UpdateProfile from '../Components/UpdateProfile';

import { useAuth } from '../Context/AuthContext';

const AppRouting = () => {

    const { currentUser } = useAuth();

    return (
        <Routes>
            <Route path="/" element={currentUser ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/update-profile" element={currentUser ? <UpdateProfile /> : <Navigate to="/login" />} />
        </Routes>
    )
}

export default AppRouting
