import React from 'react';
import { NavLink } from 'react-router-dom';
import ProductDetailPage from './ProductDetailPage';
const ProductCard = ({ product, category }) => {
    return (
        <div className='bg-white shadow-md hover:scale-105 duration-300'>
            <div>
                <img className='h-80 w-72 object-fill' src={product.image_location} alt='product' />
            </div>
            <div className='px-4 py-3 w-72'>
                <span className='text-gray-400 text-sm uppercase'>
                    Loại sản phẩm: <span className='text-red-600 font-semibold'>{category.name}</span>
                </span>
                <p
                    className='text-lg font-bold block truncate capitalize'>
                    <NavLink
                        className='hover:underline hover:text-blue-600'
                        // to={`/product-id-${product.id}`}
                        to="/product-detail"
                        state={
                            {
                                from: product.id
                            }
                        }
                        >
                        {product.name}
                    </NavLink>
                </p>
                <div className='flex items-center'>
                    <p className='text-lg font-semibold my-3'>{product.price}đ</p>
                    <button className='ml-auto border border-indigo-700 bg-indigo-800 text-white p-2 rounded-md hover:bg-transparent hover:text-indigo-800 font-semibold'>Thêm vào giỏ</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;