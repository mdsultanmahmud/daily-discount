import React from 'react';
import homeLogo from '../../../assets/home-header.jpg'
import { Link } from 'react-router-dom';
import { FaCartPlus, FaHotjar } from 'react-icons/fa'
const Header = () => {
    return (
        <div className='relative h-auto'>
            <img className='h-screen w-full' src={homeLogo} alt="home page header image" />
            <div className=' absolute top-1/4 left-4'>
                <p className='text-red-900 font-semibold text-sm'><FaHotjar className='h-6 w-6 inline-block text-red-600'></FaHotjar> Hot Deals in This Week</p>
                <h1 className='text-3xl md:text-6xl font-bold text-secondary'>Audio-Technica <br /> Wireless <br /> Headphone</h1>
                <button className="btn gap-2 mt-5 ml-5 btn-ghost btn-outline px-8 bg-white">
                    <FaCartPlus className='h-6 w-6'></FaCartPlus>
                    <Link to='/shop'>Shop Now</Link>
                </button>
            </div>

            <div className='hidden md:grid place-items-center text-center  bg-white p-3  h-[120px] w-[120px] rounded-full absolute right-1/4 top-1/3'>
                <h4 className='font-bold text-lg uppercase text-red-600'>Start <br /> From <br />$48</h4>
                
            </div>

        </div>
    );
};

export default Header;