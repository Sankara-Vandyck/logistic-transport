import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiX, FiEye, FiEyeOff } from 'react-icons/fi'; // Importing icons from React Icons

const LoginPage = ({ showLogin, toggleLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [savePassword, setSavePassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // perform authentication logic here
        navigate('/dashboard');
    };

    const handleToggleLogin = () => {
        toggleLogin();
    };

    return (
        <>
            {!showLogin && (
                <button
                    className="bg-purple-500 text-white font-semibold rounded px-3 py-2 hover:bg-purple-600 transition duration-200"
                    onClick={handleToggleLogin}
                >
                    Login
                </button>
            )}

            {showLogin && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
                    <div className="bg-[#8ffff0cc] p-8 rounded shadow-lg w-96 relative">
                        <button
                            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={handleToggleLogin}
                        >
                            <FiX /> {/* Close button icon */}
                        </button>
                        <h2 className="text-2xl font-semibold mb-6">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block font-medium mb-2 text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    required
                                />
                            </div>
                            <div className="mb-4 relative">
                                <label htmlFor="password" className="block font-medium mb-2 text-black">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="border border-gray-300 rounded px-3 py-2 w-full text-black"
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute top-[52px] right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FiEye /> : <FiEyeOff />} {/* Password visibility toggle icons */}
                                </button>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="savePassword" className="flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        id="savePassword"
                                        className="mr-2"
                                        checked={savePassword}
                                        onChange={() => setSavePassword(!savePassword)}
                                    />
                                    <span className="text-gray-600">Save password</span>
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-purple-500 text-white font-semibold rounded px-3 py-2 w-full hover:bg-purple-600 transition duration-200"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default LoginPage;
