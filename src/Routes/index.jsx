import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../ErrorBoundary';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const Dashboard = lazy(() => import('../Layout/Dashboard'));
const Login = lazy(() => import('../Components/Login'));
const SignUp = lazy(() => import('../Components/SignUp'));
const ForgotPassword = lazy(() => import('../Components/ForgotPassword'));
const UpdateProfile = lazy(() => import('../Components/UpdateProfile'));

import { useAuth } from '../Context/AuthContext';

const AppRouting = () => {

    const { currentUser } = useAuth();

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<LoadingScreen />}>
                <Routes>
                    <Route path="/" element={currentUser ? <Dashboard /> : <Navigate to="/login" />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/update-profile" element={currentUser ? <UpdateProfile /> : <Navigate to="/login" />} />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    )
}

export default AppRouting
