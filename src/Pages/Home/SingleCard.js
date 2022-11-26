import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaCheckSquare } from 'react-icons/fa';


const SingleCard = ({ detail, setBookFurniture }) => {
    const { category_id, image, location, original_price, published_date, resale_Price, seller_name, title, used_time, role, _id } = detail;
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide flex gap-2">
                            <span>{title}</span>
                            <span>{role === 'verified' && <FaCheckSquare className='bg-blue-700 text-white'></FaCheckSquare>}</span>
                        </h2>
                        <p className="dark:text-gray-100">Original Price: ${original_price}</p>
                        <p className="dark:text-gray-100">Selling Price: ${resale_Price}</p>
                        <p className="dark:text-gray-100">Used_time: {used_time}</p>
                        <p className="dark:text-gray-100">Published Date: {published_date}</p>
                        <p className="dark:text-gray-100">Location: {location}</p>
                        <p className="dark:text-gray-100">Seller_name: {seller_name}</p>
                    </div>
                    <label
                        onClick={() => setBookFurniture(detail)}
                        htmlFor="bookingModal"
                        className="btn btn-success">
                        Book Now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SingleCard;