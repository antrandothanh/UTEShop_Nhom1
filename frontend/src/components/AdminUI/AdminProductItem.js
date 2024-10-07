import React from 'react';

const AdminProductItem = ({ item }) => {
    return (
        <tr class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-normal text-gray-900">
                {item.name}
            </th>
            <td class="px-6 py-4">
                {item.price}
            </td>
            <td class="px-6 py-4 text-right">
                <a href="" class="font-medium text-blue-600 hover:underline">Chỉnh sửa</a>
            </td>
            <td class="px-6 py-4 text-right">
                <a href="" class="font-medium text-blue-600 hover:underline">Xóa</a>
            </td>
        </tr>
    );
}

export default AdminProductItem;