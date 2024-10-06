import React, { useState } from 'react';

const CartItem = ({ item }) => {
    const [quantity, setQuantity] = useState(parseInt(item.quantity));

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) setQuantity(value);
    }

    return (
        <div className='min-w-[700px] w-full border p-6 flex justify-between my-4'>
            <div className='w-auto h-auto my-auto flex gap-x-20'>
                <div className='my-auto'>
                    <input type="checkbox" class="w-5 h-5 bg-gray-100 border-gray-300 rounded" />
                </div>
                <img alt='product' src='/images/products/tiramisu-cake.jpg' className='max-w-[160px] max-h-[200px]' />
            </div>
            <div className='w-[400px] my-auto capitalize font-semibold'>
                {item.name}
            </div>
            <div className='my-auto capitalize'>
                <label className='mr-2'>Số lượng:</label>
                <input name='quantity' type='number' value={quantity} min='1' onChange={handleQuantityChange} className='border-2 border-gray-950 w-16 text-base px-2 py-1' />
            </div>
            <div className='my-auto font-semibold'>
                {item.price}
            </div>
            <div className='my-auto'>
                <button className='border border-indigo-700 bg-indigo-800 text-white py-2 px-5 rounded-md hover:bg-transparent hover:text-indigo-800 font-semibold uppercase'>Xóa</button>
            </div>
        </div>
    );
}
export default CartItem;