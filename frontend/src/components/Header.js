import React from 'react';
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <header className='sticky top-0 z-[20] mx-auto flex w-full items-center justify-start border-b border-gray-500 p-8'>
                <div className="logo w-16 h-16 mr-12">
                    <img src="/images/shopping-bag.png" alt="logo" />
                </div>
                <div>
                    <ul className='flex'>
                        <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/'>TRANG CHỦ</NavLink></li>
                        <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/cart'>GIỎ HÀNG</NavLink></li>
                        <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/about-us'>VỀ CHÚNG TÔI</NavLink></li>
                        <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/login'>ĐĂNG NHẬP</NavLink></li>
                        <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/sign-up'>ĐĂNG KÝ</NavLink></li>
                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;