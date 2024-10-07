import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.js'
import Login from './components/Login.js';
import HomePage from './components/HomePage.js';
import SignUp from './components/SignUp.js'
import VerifyOTP from './components/VerifyOTP.js'
import CartPage from './components/CartPage.js';
import AboutPage from './components/AboutPage.js';
import PaymentPage from './components/PaymentPage.js';
import AdminHeader from './components/AdminUI/AdminHeader.js';
import AdminHomePage from './components/AdminUI/AdminHomePage';

const App = () => {
    const [location, setLocation] = useState('hehe');
    const receiveLocationFromChildren = (childrenLocation) => {
        setLocation(childrenLocation);
    }

    return (
        <div>
            <BrowserRouter>
                {location.includes('cart') ? <AdminHeader /> : <Header />}
                <Routes>
                    <Route path='/' element={<HomePage sendLocationToParent={receiveLocationFromChildren} />} />
                    <Route path='/cart' element={<CartPage sendLocationToParent={receiveLocationFromChildren} />} />
                    <Route path='/about-us' element={<AboutPage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/verify-otp' element={<VerifyOTP />} />
                    <Route path='/payment' element={<PaymentPage />} />
                    <Route path='/admin/' element={<AdminHomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
