import React from 'react';
import {NavLink} from 'react-router-dom'
import AdminProductItem from './AdminProductItem';

const AdminProductsPage = () => {
    const products = [
        {
            id: 1,
            name: "Áo Thun Nike",
            color: "vàng",
            size: "XXL",
            description: "100% vải cotton thấm mồ hôi",
            price: 220000,
            category_id: 1
        },
        {
            id: 2,
            name: "Áo Polo Nike",
            color: "đen",
            size: "XXL",
            description: "100% vải cotton thấm mồ hôi",
            price: 220000,
            category_id: 1
        },
        {
            id: 1,
            name: "Áo Manchester United",
            color: "đỏ",
            size: "XXL",
            description: "100% vải cotton thấm mồ hôi",
            price: 220000,
            category_id: 1
        },
        {
            id: 1,
            name: "Quần Tây Nam Đẹp",
            color: "đen",
            size: "XXL",
            description: "100% vải cotton thấm mồ hôi",
            price: 220000,
            category_id: 2
        },
        {
            id: 1,
            name: "Quần Jean Nam Phong Cách",
            color: "xanh",
            size: "XXL",
            description: "100% vải cotton thấm mồ hôi",
            price: 220000,
            category_id: 2
        },
    ];
    
    const categories = [
        {
            id: 1,
            name: "Áo"
        },
        {
            id: 2,
            name: "Quần"
        },
    ]

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
                                    Loại sản phẩm
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                                <th scope="col" class="px-6 py-3">
                                </th>
                            </tr>

                        </thead>
                        <tbody>
                            {products.map(product => {
                                const category = categories.find(category => category.id === product.category_id);
                                return <AdminProductItem key={product.id} product={product} category={category} />
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
}

export default AdminProductsPage;