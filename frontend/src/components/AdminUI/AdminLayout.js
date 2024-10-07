import React, { useState, useEffect } from 'react';
import { BrowerRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';
import AdminHeader from './AdminHeader.js';
import AdminHomePage from './AdminHomePage.js';
import AdminProductsPage from './AdminProductsPage.js';
import AdminCreateProductPage from './AdminCreateProductPage.js';
import AdminCustomerAccountsPage from './AdminCustomerAccounts.Page.js';

const AdminLayout = () => {
    return (
        <div>
            <AdminHeader />
            <AdminSideBar />
            <Routes>
                <Route path='/' element={<AdminHomePage />} />
                <Route path='/products' element={<AdminProductsPage />} />
                <Route path='/products/create' element={<AdminCreateProductPage />} />
                <Route path='/accounts' element={<AdminCustomerAccountsPage />} />
            </Routes>
        </div>
    );
}
export default AdminLayout;