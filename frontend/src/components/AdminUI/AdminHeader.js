import React from 'react';
const AdminHeader = () => {
    return (
        <nav className="border-gray-200 bg-gray-50 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src='/images/shopping-bag.png' class="w-16 h-16" alt="hehe" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap">Diệu An</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                    <div className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent ">
                        <span className='block py-2 px-3 md:p-0 text-gray-900 rounded md:border-0'>Xin chào Nguyễn Văn A</span>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default AdminHeader;