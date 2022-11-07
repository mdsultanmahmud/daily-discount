import React from 'react'
import { Link } from 'react-router-dom';
import './SingleProducts.css'
const SingleProducts = ({ product }) => {
    const { id,title, price, description, category, image, rating } = product
    return (
        <div className="card card-compact  shadow-xl p-3">
            <div className='relative img-container'>
                <figure><img className='h-[200px] mt-3 hover:scale-110  ease-in-out duration-300' src={image} alt="Shoes" /></figure>
                <div className='btn-container flex justify-center items-center absolute'>
                    <Link to={`/checkout/${id}`}>
                    <button className='bg-red-600 px-6 py-2 rounded text-white font-semibold'>Add To Cart</button>
                    </Link>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title text-gray-800 font-bold">${price}</h2>
                <p className='text-lg text-gray-500'>{title}</p>
                <div className="card-actions justify-end">
                    <p className='text-sm text-red-500'><strong>Category: </strong> {category}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleProducts;