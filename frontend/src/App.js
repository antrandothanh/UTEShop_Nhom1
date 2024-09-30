import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login.js';
import HomePage from './components/HomePage.js';
import SignUp from './components/SignUp.js'
import VerifyOTP from './components/VerifyOTP.js'

const router = createBrowserRouter([
    {
        path: '/home-page',
        element: <HomePage></HomePage>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/sign-up',
        element: <SignUp/>
    },
    {
        path: '/verify-otp',
        element: <VerifyOTP/>
    }
])

const AppRouters = () => {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
};

export default AppRouters;
