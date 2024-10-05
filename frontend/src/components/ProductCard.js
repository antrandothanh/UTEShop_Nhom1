import React from 'react';
const ProductCard = ({ product }) => {
    return (
        <div className='bg-white shadow-md hover:scale-105 duration-300'>
            <div>
                <img className='h-80 w-72 object-fill' src='./images/products/tiramisu-cake.jpg' alt='product' />
            </div>
            <div className='px-4 py-3 w-72'>
                <span className='text-gray-400 text-sm uppercase'>
                    brand
                </span>
                <p className='text-lg font-bold block truncate capitalize'>{product.name}</p>
                <div className='flex items-center'>
                    <p className='text-lg font-semibold my-3'>{product.price}</p>
                    <del>
                        <p className='text-sm text-gray-600 ml-2'>50.000đ</p>
                    </del>
                    <button className='ml-auto border border-indigo-700 bg-indigo-800 text-white p-2 rounded-md hover:bg-transparent hover:text-indigo-800 font-semibold'>Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;