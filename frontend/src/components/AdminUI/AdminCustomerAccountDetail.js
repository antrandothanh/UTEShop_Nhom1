import React from 'react';

const AdminCustomerAccountDetail = () => {

    return (
        <div className='p-4 sm:ml-64'>
            <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
                <div class="p-5 text-lg font-semibold text-center rtl:text-center text-gray-900 bg-white">
                    Chi tiết tài khoản
                </div>
                
                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Họ và tên</label>
                            <input readOnly value={'Nguyen Van A'} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Ngày tạo</label>
                            <input value={'18/9/2018'} readOnly type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600" />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input readOnly value={'nguyenvana@gmail.com'} type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Số điện thoại</label>
                            <input readOnly value={'0989821123'} type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                            <input readOnly value={'1234567890'} type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="flowbite.com" required />
                        </div>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    );
}

export default AdminCustomerAccountDetail;