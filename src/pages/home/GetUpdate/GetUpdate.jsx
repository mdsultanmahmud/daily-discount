import React from 'react';
import shoe from '../../../assets/shoe.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTruck, faSackDollar, faHeadset,faHandHoldingHand} from '@fortawesome/free-solid-svg-icons'

const GetUpdate = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='w-full h-100'>
                    <img className='w-full' src={shoe} alt="" />
                </div>
                <div className='w-full p-5 bg-green-300 flex justify-center items-center'>
                    <div>
                        <p className='font-semibold text-lg'><FontAwesomeIcon icon={faEnvelope} /> Newsletter</p>
                        <h3 className='font-semibold text-3xl text-white my-5'>Get Weekly Update</h3>
                        <div className="form-control">
                            <label className="input-group">
                                <span className='bg-white'>Email</span>
                                <input type="text" placeholder="info@site.com" className="input bg-white input-bordered w-3/4" />
                            </label>
                        </div>
                        <button className='btn btn-outline btn-secondary mt-5'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='flex items-center p-8 m-2'>
                    <div className='mr-5'>
                    <FontAwesomeIcon className='w-10 h-10' icon={faTruck} />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold text-zinc-800'>Fast & Secure Delivery</h4>
                        <p className='text-grey text-sm font-semibold text-zinc-400'>Tell About Your Service</p>
                    </div>
                </div>
                <div className='flex items-center p-8 m-5'>
                    <div className='mr-5'>
                    <FontAwesomeIcon className='w-10 h-10' icon={faSackDollar} />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold text-zinc-800'>Money Back Guarantee</h4>
                        <p className='text-grey text-sm font-semibold text-zinc-400'>Within 7 days.</p>
                    </div>
                </div>
                <div className='flex items-center p-8 m-5'>
                    <div className='mr-5'>
                    <FontAwesomeIcon className='w-10 h-10' icon={faHeadset} />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold text-zinc-800'>Pro Quality Support</h4>
                        <p className='text-grey text-sm font-semibold text-zinc-400'>24/7 Live support.</p>
                    </div>
                </div>
                <div className='flex items-center p-8 m-5'>
                    <div className='mr-5'>
                    <FontAwesomeIcon className='w-10 h-10' icon={faHandHoldingHand} />
                    </div>
                    <div>
                        <h4 className='text-xl font-bold text-zinc-800'>24 Hour Return Policy</h4>
                        <p className='text-grey text-sm font-semibold text-zinc-400'>No question ask.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetUpdate;