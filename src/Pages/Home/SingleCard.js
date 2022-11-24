import React from 'react';

const SingleCard = ({ detail }) => {
    console.log(detail);
    const { category_id, image, location, original_price, published_date, resale_Price, seller_name, title, used_time, verified_seller, _id } = detail;
    return (
        <div>
            <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
                        <p className="dark:text-gray-100">Original Price: ${original_price}</p>
                        <p className="dark:text-gray-100">Selling Price: ${resale_Price}</p>
                        <p className="dark:text-gray-100">Used_time: {used_time}</p>
                        <p className="dark:text-gray-100">Published Date: {published_date}</p>
                        <p className="dark:text-gray-100">Location: {location}</p>
                        <p className="dark:text-gray-100">Seller_name: {seller_name}</p>
                    </div>
                    <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;