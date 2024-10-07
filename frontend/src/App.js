import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login.js';
import HomePage from './components/HomePage.js';
import SignUp from './components/SignUp.js'
import VerifyOTP from './components/VerifyOTP.js'
import CartPage from './components/CartPage.js';
import AboutPage from './components/AboutPage.js';
import PaymentPage from './components/PaymentPage.js';
import AdminLayout from './components/AdminUI/AdminLayout.js';

const App = () => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/about-us' element={<AboutPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/verify-otp' element={<VerifyOTP />} />
                    <Route path='/payment' element={<PaymentPage />} />
                    <Route path='/admin//*' element={<AdminLayout />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
