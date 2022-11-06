import React from 'react';
import watch from '../../../assets/about-watch.jpg'
import { FaProductHunt} from 'react-icons/fa'
const About = () => {
    return (
        <div className='relative'>
            <img className='h-[700px] w-full' src={watch} alt="" />
            <div className='absolute top-1/3 left-4'>
            <p className='text-red-900 font-semibold text-sm'><FaProductHunt className='mr-2 h-6 w-6 inline-block text-red-600'></FaProductHunt>Don't Miss!!</p>
                <h3 className='text-2xl md:text-4xl font-bold font-serif uppercase text-red-500 md:text-zinc-700'>
                    Buy the <br />
                    Best Products!!
                </h3>
                <button className='my-4 px-8 py-3 bg-red-500 hover:bg-red-800 rounded font-semibold text-lg text-white'>Check it Out</button>
            </div>
        </div>
    );
};

export default About;