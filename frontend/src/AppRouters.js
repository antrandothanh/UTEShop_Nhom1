import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';


const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/HomePage',
        element: <HomePage></HomePage>
    },
])

const AppRouters = () => {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
};

export default AppRouters;
