import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
const Navbar = () => {
    const { user,Logout } = useContext(AuthContext)
    const handleLogout = () =>{
        Logout()
        .then(res =>{
            toast('Logout successfully!!')
        })
        .catch(err =>{
            console.log(err) 
            toast.error(err.message)
        })
    }
    const menuList = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/shop'>Shop</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to={'/register'} >Register</Link></li>
    </>

    return (
        <div className="navbar bg-rose-200 shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="font-semibold menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                        {
                            menuList
                        }
                    </ul>
                </div>
                <Link to='/' className="text-2xl font-bold uppercase">Daily <span className='text-green-800'>Discount</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-semibold">
                    {
                        menuList
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.displayName ?
                        <>
                            <li>Welcome, {user?.displayName.slice(0,7)}...</li>
                            <li onClick={handleLogout} className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-green-500 hover:to-red-700 px-8 py-3 rounded font-semibold text-xl hover:text-white block mx-auto my-4 cursor-pointer">Logout</li>
                        </>
                        :
                       <Link to='/login' className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-green-500 hover:to-red-700 px-8 py-3 rounded font-semibold text-xl hover:text-white block mx-auto my-4 cursor-pointer">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;