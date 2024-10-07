import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import CartItem from './CartItem.js';
import UrlComponent from './UrlComponent.js';
const CartPage = ({sendLocationToParent}) => {
    const cartItems = [
        {
            name: 'Bánh Tiramisu',
            quantity: '1',
            price: '20.000'
        },
        {
            name: 'Bánh Trung Thu',
            quantity: '3',
            price: '20.000'
        },
        {
            name: 'Bánh Xèo',
            quantity: '8',
            price: '20.000'
        },
    ];

    const [location, setLocation] = useState('');
    const receiveLocationFromChildren = (childrenLocation) => {
        setLocation(childrenLocation);
    }

    useEffect(() => {
        sendLocationToParent(location);
    }, [location]);

    return (
        <div className='p-8'>
            <UrlComponent sendLocationToParent={receiveLocationFromChildren}/>
            <div className='bg-gray-200 mb-10 p-3'>
                <div className='flex justify-center text-2xl mb-2 font-semibold uppercase'>
                    Giỏ hàng của bạn
                </div>
            </div>
            <div>
                {cartItems.map((item, index) => (
                    <CartItem key={index} item={item} />
                ))}
            </div>
            <div className='flex justify-center'>
                <NavLink to='/payment' className='border border-indigo-700 bg-indigo-800 text-2xl text-white py-5 px-10 rounded-md hover:bg-transparent hover:text-indigo-800 font-semibold uppercase'>Thanh toán</NavLink>
            </div>
        </div>
    );
}

export default CartPage;