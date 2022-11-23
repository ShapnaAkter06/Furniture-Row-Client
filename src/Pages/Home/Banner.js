import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen flex justify-start" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold bg-black text-white p-6">Black Friday</h1>
                    <h2 className="mb-5 text-6xl text-red-700 font-bold">Super Sale</h2>
                    <p className='mb-5 before:text-3xl text-black font-semibold'>Save $100 On Every $1000 Purchase!2</p>
                    <span className='text-black font-medium'>Shop the sale</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;