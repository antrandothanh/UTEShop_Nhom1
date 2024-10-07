import React, { useState } from 'react';
import Header from './Header';

function VerifyOTP({ sendLocationToParent }) {
    const [otp, setOtp] = useState();

    const sendDataToBackend = async () => {
        try {

        } catch (err) {
            console.error('Error sending data: ', err)
        }
    }

    return (
        <div>
            <Header/>
            <div className='flex justify-center items-center h-screen bg-indigo-600'>
                <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
                    <h1 className='text-3xl block text-center font-bold'>OTP đã được gửi vào email đăng ký</h1>
                    <hr className='mt-3' />

                    <div className='mt-3'>
                        <label htmlFor='fullname' className='font-semibold block text-base mb-2'>Nhập OTP</label>
                        <input onChange={(e) => setOtp(e.target.value)} type='text' id='fullname' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Nhập OTP' />
                    </div>

                    <div className='mt-5'>
                        <button onClick={sendDataToBackend} className='border-2 border-indigo-700 bg-indigo-700 text-white py-2 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>XÁC THỰC</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VerifyOTP;