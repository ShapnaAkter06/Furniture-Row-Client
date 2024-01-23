import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        // <div className="hero min-h-screen flex justify-center lg:justify-start" style={{ backgroundImage: `url(${banner})` }}>
        //     <div className="hero-content text-center text-neutral-content">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 lg:text-5xl font-bold bg-black text-white p-6">Black Friday</h1>
        //             <h2 className="mb-5 lg:text-6xl text-3xl text-red-700 font-bold">Super Sale</h2>
        //             <p className='mb-5 lg:before:text-3xl text-black font-semibold'>Save $100 On Every $1000 Purchase!2</p>
        //             <span className='text-black font-semibold'>Shop the sale</span>
        //         </div>
        //     </div>
        // </div>

        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${banner})`,
            }}
        >
            <div className="hero-overlay bg-black bg-opacity-60"></div>
            <div className="text-[#d8d8d8]">
                <div className="max-w-2xl px-4 text-center">
                    <p className="mb-5 text-5xl font-bold">Meet Our New Minimalistic Furniture Collection</p>
                    <p className="mb-5 text-lg font-medium">
                        <span className="text-[#EEA72B]"> Top quality, premium materials, timeless silhouettes.</span>{" "}
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Banner;