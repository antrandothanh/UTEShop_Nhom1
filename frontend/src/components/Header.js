import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const Header = () => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [userName, setUserName] = useState("default name");
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            setIsSignedIn(false);
        }
        else {
            setIsSignedIn(true);
            const user = JSON.parse(sessionStorage.getItem("user"));
            setUserName(user.name);
        }
    }, []);

    const signOut = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <div>
            <header className='sticky top-0 z-[20] mx-auto flex w-full items-center justify-start border-b border-gray-500 p-8'>
                <div className="text-2xl mx-12 uppercase font-bold">
                    Clothes store
                </div>
                <div>
                    <ul className='flex'>
                        <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/'>TRANG CHỦ</NavLink></li>
                        <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/cart'>GIỎ HÀNG</NavLink></li>
                        <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/about-us'>VỀ CHÚNG TÔI</NavLink></li>
                        {
                            isSignedIn ? (
                                <>
                                    <li className='mx-10 font-bold hover:text-indigo-700'><NavLink onClick={signOut}>ĐĂNG XUẤT</NavLink></li>
                                    <li className="mx-10">Xin chào: <span>{userName}</span></li>
                                </>

                            ) : (
                                <>
                                    <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/login'>ĐĂNG NHẬP</NavLink></li>
                                    <li className='mx-10 font-bold hover:text-indigo-700'><NavLink to='/sign-up'>ĐĂNG KÝ</NavLink></li>
                                </>
                            )
                        }

                    </ul>
                </div>
            </header>
        </div>
    );
}

export default Header;