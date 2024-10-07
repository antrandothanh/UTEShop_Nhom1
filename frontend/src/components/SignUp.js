import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';

function SignUp() {
    // State to store the selected option
    const [selectedRole, setSelectedOption] = useState('Chọn vai trò');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        let dropdown = document.querySelector('#dropdown');
        dropdown.classList.toggle("hidden");
    };

    // Function to handle option selection
    const handleOptionClick = (option) => {
        setSelectedOption(option); // Update the button text with the selected option
        toggleDropdown(); // Close the dropdown after selecting an option
    };

    const showOrHidePassword = () => {
        var show = document.getElementById('password');
            if (show.type === 'password') {
                show.type = 'text';
            } else {
                show.type = 'password';
            }
    }

    const sendDataToBackend = async () => {
        try {
            const res = await axios.post('http://localhost:5000/sign-up', {
                role: selectedRole,
                fullname: fullname,
                email: email,
                password: password
            })
            console.log('Response from backend: ', res.data)
        } catch (err) {
            console.error('Error sending data: ', err)
        }
    }


    return (
        <div>
            <Header/>
            <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    ĐĂNG KÝ TÀI KHOẢN
                </h2>
            </div>
            <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                
                <div className='mt-3 select-none' id='dropdownButton'>
                    <div onClick={toggleDropdown} className='cursor-pointer border border-indigo-700 p-2 w-full flex items-center justify-between font-semibold rounded-md active:border-white duration-300 active:text-white'>
                        {selectedRole}
                    </div>
                    <div id='dropdown' className='absolute rounded border border-gray-300 bg-white shadow-md hidden'>
                        <div className='cursor-pointer hover:bg-gray-300 p-4' onClick={() => handleOptionClick('Khách hàng')}>Khách hàng</div>
                        <div className='cursor-pointer hover:bg-gray-300 p-4' onClick={() => handleOptionClick('Admin')}>Admin</div>
                    </div>
                </div>
                <div className='mt-3'>
                    <label htmlFor='fullname' className='font-semibold block text-base mb-2'>Họ và tên</label>
                    <input onChange={(e) => setFullname(e.target.value)} type='text' id='fullname' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Nhập họ tên' />
                </div>
                <div className='mt-3'>
                    <label htmlFor='email' className='font-semibold block text-base mb-2'>Địa chỉ email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Nhập email' />
                </div>
                <div className='mt-3'>
                    <label htmlFor='password' className='font-semibold block text-base mb-2'>Mật khẩu</label>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' id='password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Nhập mật khẩu' />
                </div>
                <div className='mt-3 flex justify-between items-center'>
                    <div>
                        <input onClick={showOrHidePassword} type='checkbox' />
                        <label className='ml-2 font-semibold'>Hiện mật khẩu.</label>
                    </div>
                    <div>
                        <Link className='text-blue-500 hover:text-indigo-800 font-semibold underline transition-all duration-300' to='/login'>Đăng nhập</Link>
                    </div>
                </div>
                <div className='mt-5'>
                    <button onClick={sendDataToBackend} className='border-2 border-indigo-700 bg-indigo-700 text-white py-2 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>ĐĂNG KÝ</button>
                </div>
            </div>
        </div>
        </div>
    );
}

export default SignUp;