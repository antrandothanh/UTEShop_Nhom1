import OrderItem from './OrderItem.js';
import Header from './Header.js';
const PaymentPage = () => {
    const orderItems = [
        {
            name: 'Bánh Tiramisu',
            quantity: '1',
            price: '20.000'
        },
        {
            name: 'Bánh Trung Thu',
            quantity: '3',
            price: '20.000'
        },
        {
            name: 'Bánh Xèo',
            quantity: '8',
            price: '20.000'
        },
    ];
    return (
        <div>
            <Header />
            <div className='p-8'>
                <div className='bg-gray-200 mb-10 p-3'>
                    <div className='flex justify-center text-2xl mb-2 font-semibold uppercase'>
                        Thanh toán
                    </div>
                </div>
                <div>
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label class="block mb-2 font-medium text-gray-900">Họ tên người nhận</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Ví dụ: Nguyễn Văn A" required />
                        </div>
                        <div>
                            <label class="block mb-2 font-medium text-gray-900 ">Số điện thoại</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Ví dụ: 0901243267" required />
                        </div>
                        <div>
                            <label class="block mb-2 font-medium text-gray-900 ">Địa chỉ</label>
                            <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                        </div>
                        <div>
                            <label class="block mb-2 font-medium text-gray-900 ">Phương thức thanh toán</label>
                            <select class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                <option selected>Chọn 1 cách thanh toán</option>
                                <option value="cash">Tiền mặt khi nhận hàng (COD)</option>
                                <option value="banking">Chuyển khoản</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="relative overflow-x-auto">
                    <table class="w-full mb-3 text-left rtl:text-right text-gray-500 ">
                        <thead class=" text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Sản phẩm
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Số lượng
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Giá tiền
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Thành tiền
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems.map((item, index) => (
                                <OrderItem key={index} item={item} />
                            ))}
                        </tbody>
                    </table>
                    <div className='flex justify-center'>
                        <button className='border border-indigo-700 bg-indigo-800 text-2xl text-white py-5 px-10 rounded-md hover:bg-transparent hover:text-indigo-800 font-semibold uppercase'>Thanh toán</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;