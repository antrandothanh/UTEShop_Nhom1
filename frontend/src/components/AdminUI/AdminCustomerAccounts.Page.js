import React from 'react';
import AdminAccountItem from './AdminAccountItem';

const AdminCustomerAccountsPage = () => {
    const accounts = [
        {
            name: 'Nguyen Van A',
            createDate: '20/9/2017',
            email: 'nguyenvana@gmail.com',
            phone: '0927312411',
            status: 'Đang hoạt động'
        },
        {
            name: 'Nguyen Van A',
            createDate: '20/9/2017',
            email: 'nguyenvana@gmail.com',
            phone: '0927312411',
            status: 'Đang hoạt động'
        },
        {
            name: 'Nguyen Van A',
            createDate: '20/9/2017',
            email: 'nguyenvana@gmail.com',
            phone: '0927312411',
            status: 'Đang hoạt động'
        },
        {
            name: 'Nguyen Van A',
            createDate: '20/9/2017',
            email: 'nguyenvana@gmail.com',
            phone: '0927312411',
            status: 'Đang hoạt động'
        }
    ];
    return (
        <div className='p-4 sm:ml-64'>
            <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                            Quản lý tài khoản
                        </caption>
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Tên
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Ngày tạo
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Số điện thoại
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Trạng thái
                                </th>
                            </tr>

                        </thead>
                        <tbody>
                            {accounts.map((account, index) => (
                                <AdminAccountItem key={index} account={account} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminCustomerAccountsPage;