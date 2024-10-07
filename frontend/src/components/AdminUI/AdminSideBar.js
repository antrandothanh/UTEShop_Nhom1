import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AdminSideNav = () => {

    return (
        <div id="default-sidebar" class="fixed left-0 z-40 w-64 h-screen transition-transform translate-x-0">
            <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                <ul class="space-y-2 font-medium">
                    <li>
                        <NavLink className={`flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100`} to='/admin'>Trang chủ</NavLink>
                    </li>
                    <li>
                        <NavLink className={`flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100`} to='./products'>Sản phẩm</NavLink>
                    </li>
                    <li>
                        <NavLink className={`flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100`} to='./accounts'>Tài khoản khách hàng</NavLink>
                    </li>
                    <li>
                        <NavLink className={`flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100`} to='/admin'>Thông tin tài khoản</NavLink>
                    </li>
                    <li>
                        <NavLink className={`flex items-center p-3 text-gray-900 rounded-lg hover:bg-gray-100`} to='/admin'>Đăng xuất</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AdminSideNav;