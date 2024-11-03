import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // Thêm trạng thái loading

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Bắt đầu trạng thái loading
        setError(''); // Xóa lỗi trước đó

        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            localStorage.setItem('token', response.data.token);
            sessionStorage.setItem('user', JSON.stringify(response.data.user));
            console.log("Đăng nhập thành công");
            // Chuyển hướng đến trang khác
            window.location.href = '/'; // Chuyển hướng đến trang dashboard
        } catch (err) {
            console.error(err); // Ghi lại toàn bộ lỗi 
            setError(err.response ? err.response.data.message : 'Đã xảy ra lỗi. Vui lòng thử lại.');
        } finally {
            setLoading(false); // Kết thúc trạng thái loading
        }
    };

    return (
        <div>
            <Header />
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Đăng nhập vào tài khoản của bạn
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Địa chỉ email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="text"
                                    required
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="rounded-md border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Mật khẩu
                                </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Quên mật khẩu?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="rounded-md border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                                />
                            </div>
                        </div>

                        {error && <p className="text-red-500">{error}</p>}

                        <div>
                            <button
                                type="submit"
                                className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading} // Vô hiệu hóa nút khi đang xử lý
                            >
                                {loading ? 'Đang đăng nhập...' : 'Đăng Nhập'}
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Chưa có tài khoản?{' '}
                        <a href="/sign-up" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Đăng kí ngay!
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
