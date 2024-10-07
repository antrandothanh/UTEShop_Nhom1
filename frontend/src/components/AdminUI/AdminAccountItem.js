import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminAccountItem = ({ account }) => {
    return (
        <tr class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-normal text-gray-900">
                <NavLink className={`hover:text-blue-600 hover:underline`}>{account.name}</NavLink>
            </th>
            <td class="px-6 py-4">
                {account.createDate}
            </td>
            <td class="px-6 py-4">
                {account.email}
            </td>
            <td class="px-6 py-4">
                {account.phone}
            </td>
            <td class="px-6 py-4">
                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[180px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>{account.status}</option>
                    <option value="freeze">Vô hiệu hóa</option>
                </select>
                
            </td>
        </tr>
    );
}

export default AdminAccountItem;