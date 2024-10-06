import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login.js';
import HomePage from './components/HomePage.js';
import SignUp from './components/SignUp.js'
import VerifyOTP from './components/VerifyOTP.js'
import Header from './components/Header.js';
import CartPage from './components/CartPage.js';
import AboutPage from './components/AboutPage.js';
import PaymentPage from './components/PaymentPage.js'

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/cart' element={<CartPage />} />
                    <Route path='/about-us' element={<AboutPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/verify-otp' element={<VerifyOTP />} />
                    <Route path='/payment' element={<PaymentPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
