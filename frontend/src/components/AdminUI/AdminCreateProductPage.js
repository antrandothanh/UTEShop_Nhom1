import React from 'react';

const AdminCreateProductPage = () => {
    return (
        <div className='p-4 sm:ml-64'>
            <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg'>
                <div class="p-5 text-lg font-semibold text-center rtl:text-center text-gray-900 bg-white">
                    Quản lý sản phẩm
                </div>
                <form>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">First name</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900">Last name</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        </div>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>

        </div>
    );
}

export default AdminCreateProductPage;