import React, { useContext, useState } from 'react';
import regsiter from '../../assets/register.jpg'
import {FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider';
const Register = () => {
    const [passStatus, setPassStatus] = useState(false)
    const [confrimPass, setConfirmPass] = useState(false)
    const {user} = useContext(AuthContext)
    console.log(user?.email)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("${regsiter}")`, backgroundAttachment:'fixed' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <form>
                        <h3 className='text-center text-red-700 font-bold uppercase text-2xl my-5'>Please Register</h3>
                        <input required name='name' className='mb-3 rounded-lg text-xl px-5 py-2 w-[300px] md:w-[450px] bg-transparent text-white border-solid border-2 border-green-600 focus:outline-none ' type="text" placeholder='Your Name' />
                        <input required name='email' className='mb-3 rounded-lg text-xl px-5 py-2 w-[300px] md:w-[450px] bg-transparent text-white border-solid border-2 border-green-600 focus:outline-none ' type="email" placeholder='Your Email' />
                        <div className='relative mb-3'>
                            <input required name='password' className='rounded-lg text-xl px-5 py-2 w-[300px] md:w-[450px] bg-transparent text-white border-solid border-2 border-green-600 focus:outline-none ' type={passStatus ? 'text' : 'password'} placeholder='Enter Password' />
                            {
                                passStatus ?
                                <FaEye onClick={() => setPassStatus(!passStatus)} className='w-7 h-7 absolute top-1/4 right-2 cursor-pointer'></FaEye>
                                :
                                <FaEyeSlash onClick={() => setPassStatus(!passStatus)} className='w-7 h-7 absolute top-1/4 right-2 cursor-pointer'></FaEyeSlash>
                            }
                        </div>
                        <div className='relative mb-3'>
                            <input required name='confirm' className='rounded-lg text-xl px-5 py-2 w-[300px] md:w-[450px] bg-transparent text-white border-solid border-2 border-green-600 focus:outline-none ' type={confrimPass ? 'text' : 'password'} placeholder='Confirm Password' />
                            {
                                confrimPass ?
                                <FaEye onClick={() => setConfirmPass(!confrimPass)} className='w-7 h-7 absolute top-1/4 right-2 cursor-pointer'></FaEye>
                                :
                                <FaEyeSlash onClick={() => setConfirmPass(!confrimPass)} className='w-7 h-7 absolute top-1/4 right-2 cursor-pointer'></FaEyeSlash>
                            }
                        </div>
                        <button className='btn btn-outline btn-secondary px-8'>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;