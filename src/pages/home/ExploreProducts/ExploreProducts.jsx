import React, { useEffect, useState } from 'react';
import SingleProducts from './SingleProducts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUmbrellaBeach} from '@fortawesome/free-solid-svg-icons'
const ExploreProducts = () => {
    const [products, setProducts] = useState([])
    console.log(products[0])
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    } ,[])
    return (
        <div className='my-5'>
            <p className='text-center my-4 text-xl text-gray-400'><FontAwesomeIcon className='w-6 h-6' icon={faUmbrellaBeach}></FontAwesomeIcon> Our Products</p>
            <h3 className='text-center text-2xl text-green-400 font-semibold my-5'>Explore Our Best Products</h3>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.slice(0,10).map(product => <SingleProducts
                key={product.id}
                    product = {product}
                ></SingleProducts>)   
            }
            </div>
            <button className='btn btn-secondary mx-auto block my-8'>More Products</button>
        </div>
    );
};

export default ExploreProducts;