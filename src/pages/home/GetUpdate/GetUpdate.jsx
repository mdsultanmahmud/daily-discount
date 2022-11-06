import React from 'react';
import shoe from '../../../assets/shoe.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
            <div>

            </div>
        </div>
    );
};

export default GetUpdate;