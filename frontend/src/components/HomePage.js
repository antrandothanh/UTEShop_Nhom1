import React, { useState, useEffect } from 'react';
import axios from "axios";
import ProductCard from './ProductCard.js';
import Header from './Header.js'

export default function HomePage() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/get-all-products");
                console.log("Fetched successfully!");
                setProducts(response.data);
            }
            catch {
                console.error("Cannot fetch datat");
            }
        }

        const fetchCategories = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/get-all-categories");
                console.log("Fetched successfully!");
                setCategories(response.data);
            }
            catch {
                console.error("Cannot fetch data");
            }
        }

        fetchCategories();
        fetchProducts();
    }, []);

    return (
        <div>
            <Header />
            <div className='p-8'>
                <div className='bg-gray-200 mb-10 p-3'>
                    <div className='flex justify-center text-2xl mb-2 font-semibold uppercase'>
                        Sản phẩm của chúng tôi
                    </div>
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

                        {products.map((product) => {
                            const category = categories.find(category => category.id === product.category_id);
                            return <ProductCard key={product.id} product={product} category={category} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}