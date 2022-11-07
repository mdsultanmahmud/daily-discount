import React, { useState } from 'react';
import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const [passStatus, setPassStatus] = useState(false)
    return (
        <div className='min-h-screen grid place-items-center bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500'>
            <div className='bg-white w-[400px] h-[400px] p-5'>
                <form className='my-5'>
                    <h3 className='text-center my-5 text-2xl font-bold'>Login</h3>
                    <input required name='email' className='mb-3 rounded-lg text-xl px-5 py-2 w-full bg-white  text-black border-solid border-2 border-green-600 focus:outline-none ' type="email" placeholder='Your Email' />
                    <div className='relative mb-3'>
                        <input required name='password' className='rounded-lg text-xl px-5 py-2 w-full bg-white  text-black border-solid border-2 border-green-600 focus:outline-none ' type={passStatus ? 'text' : 'password'} placeholder='Enter Password' />
                        {
                            passStatus ?
                                <FaEye onClick={() => setPassStatus(!passStatus)} className='w-7 h-7 absolute top-1/4 right-2 cursor-pointer'></FaEye>
                                :
                                <FaEyeSlash onClick={() => setPassStatus(!passStatus)} className='w-7 h-7 absolute top-1/4 right-2 cursor-pointer'></FaEyeSlash>
                        }
                    </div>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-12 py-4 rounded font-semibold text-xl hover:text-white block mx-auto my-4'>Login</button>
                </form>
                    <hr />
                <div className='flex justify-center mt-5'>
                    <FaGoogle className='w-12 h-12 p-2 bg-gray-300 hover:bg-purple-500 cursor-pointer rounded-full mr-3'></FaGoogle>
                    <FaGithub className='w-12 h-12 p-2 bg-gray-300 hover:bg-pink-600 cursor-pointer rounded-full'></FaGithub>
                </div>
            </div>
        </div>
    );
};

export default Login;