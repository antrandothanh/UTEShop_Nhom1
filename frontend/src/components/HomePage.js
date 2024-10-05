import React from 'react';
import ProductCard from './ProductCard.js';

export default function HomePage() {
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
    ]
    return (
        <div>
            <div className='p-8'>
                <div className='bg-gray-200 mb-10 p-3'>
                    <div className='flex justify-center text-xl mb-2 font-semibold '>
                        Tìm kiếm
                    </div>
                    <div className='flex justify-center mb-2 font-semibold '>
                        <input type='text' className='border w-1/6 text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Nhập tên sản phẩm' />
                    </div>
                    <div className='flex text-xl mb-2 font-semibold justify-center'>
                        Sắp xếp theo
                    </div>
                    <div className='flex justify-center'>
                        <div className='mx-2'>
                            <button className='ml-auto border border-indigo-700 bg-indigo-800 text-white p-2 rounded-md hover:bg-transparent hover:text-indigo-800 font-semibold'>Giá tăng dần</button>
                        </div>
                        <div className='mx-2'>
                            <button className='ml-auto border border-indigo-700 bg-indigo-800 text-white p-2 rounded-md hover:bg-transparent hover:text-indigo-800 font-semibold'>Giá giảm dần</button>
                        </div>
                    </div>

                </div>
                <div className='flex px-40'>
                    <div className='flex flex-wrap gap-10 justify-center'>
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}