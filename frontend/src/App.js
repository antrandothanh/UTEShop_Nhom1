import React from 'react';
import { createBrowserRouter, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.js';
import HomePage from './components/HomePage.js';
import SignUp from './components/SignUp.js'
import VerifyOTP from './components/VerifyOTP.js'
import Header from './components/Header.js';

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
        element: <SignUp />
    },
    {
        path: '/verify-otp',
        element: <VerifyOTP />
    }
])

const App = () => {
    return (
        // <main>
        //     <Header/>
        //     <RouterProvider router={router} />
        // </main>
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/cart' element={<h1>Giỏ hàng</h1>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/sign-up' element={<SignUp/>}/>
                    <Route path='/verify-otp' element={<VerifyOTP/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
