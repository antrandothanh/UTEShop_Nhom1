import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminProductItem = ({ product, category }) => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate('/admin/update-product', { state: { product, category } });
    };

    return (
        <tr class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-normal text-gray-900">
                {product.name}
            </th>
            <td class="px-6 py-4">
                {category.name}
            </td>
            <td class="px-6 py-4 text-right">
                <a onClick={handleEditClick} class="font-medium text-blue-600 hover:underline">Chỉnh sửa</a>
            </td>
            <td class="px-6 py-4 text-right">
                <a href="" class="font-medium text-blue-600 hover:underline">Xóa</a>
            </td>
        </tr>
    );
}

export default AdminProductItem;