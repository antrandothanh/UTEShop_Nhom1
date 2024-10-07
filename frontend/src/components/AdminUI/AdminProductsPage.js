import React from 'react';
import {NavLink} from 'react-router-dom'
import AdminProductItem from './AdminProductItem';

const AdminProductsPage = () => {
    const products = [
        {
            name: 'Bánh Tiramisu',
            price: '30.0000đ'
        },
        {
            name: 'Bánh trung thu',
            price: '45.0000đ'
        },
        {
            name: 'Bánh Bông Lan',
            price: '20.0000đ'
        },
        {
            name: 'Tokkbokki Siu Cay',
            price: '25.0000đ'
        },
        {
            name: 'Bánh Xèo',
            price: '20.0000đ'
        },
        {
            name: 'Sinh Tố matcha',
            price: '15.0000đ'
        },
        {
            name: 'Bánh Bông Lan',
            price: '20.0000đ'
        },
        {
            name: 'Tokkbokki Siu Cay',
            price: '25.0000đ'
        },
        {
            name: 'Bánh Xèo',
            price: '20.0000đ'
        },
        {
            name: 'Sinh Tố matcha',
            price: '15.0000đ'
        },
        {
            name: 'Sinh Tố matcha',
            price: '15.0000đ'
        },
        {
            name: 'Bánh Bông Lan',
            price: '20.0000đ'
        },
        {
            name: 'Tokkbokki Siu Cay',
            price: '25.0000đ'
        },
        {
            name: 'Bánh Xèo',
            price: '20.0000đ'
        },
        {
            name: 'Sinh Tố matcha',
            price: '15.0000đ'
        },
        {
            name: 'Bánh Tiramisu',
            price: '30.0000đ'
        },
        {
            name: 'Bánh trung thu',
            price: '45.0000đ'
        },
        {
            name: 'Bánh Bông Lan',
            price: '20.0000đ'
        },
        {
            name: 'Tokkbokki Siu Cay',
            price: '25.0000đ'
        },
        {
            name: 'Bánh Xèo',
            price: '20.0000đ'
        },
        {
            name: 'Sinh Tố matcha',
            price: '15.0000đ'
        },
        {
            name: 'Bánh Bông Lan',
            price: '20.0000đ'
        },
        {
            name: 'Tokkbokki Siu Cay',
            price: '25.0000đ'
        },
        {
            name: 'Bánh Xèo',
            price: '20.0000đ'
        },
    ];
    return (
        <div class="p-4 sm:ml-64">
            <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            Quản lý sản phẩm
                            <p class="mt-1 text-sm font-normal text-blue-600 hover:underline"><NavLink to='./create'>Thêm sản phẩm</NavLink></p>
                        </caption>
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Sản phẩm
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Giá tiền
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                            </tr>

                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <AdminProductItem key={index} item={product} />
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default AdminProductsPage;