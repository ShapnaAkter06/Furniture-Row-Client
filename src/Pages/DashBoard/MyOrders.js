import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const url = `https://assignment-12-server-jet.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
            <h2 className="text-xl font-semibold">My Orders {bookings?.length}</h2>
            <ul className="flex flex-col divide-y divide-gray-700">
                {
                    bookings?.map(booking => <li key={booking._id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img src={booking.image} className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" alt="" />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                            Product Name: {booking.product}</h3>
                                        <p className="text-sm dark:text-gray-400">Product price: {booking.productPrice}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">{user?.email}</p>
                                        <p className="text-sm dark:text-gray-600">Location: {booking.location}</p>
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x">
                                    {
                                        booking?.productPrice && !booking?.paid &&
                                        <Link to={`/dashboard/payment/${booking._id}`}>
                                            <button
                                                type="button"
                                                className="btn bg-[#67AD5C] btn-sm">
                                                Pay
                                            </button>
                                        </Link>
                                    }
                                    {
                                        booking?.productPrice && booking?.paid && <span className='text-green-500 font-bold'>Paid</span>
                                    }
                                </div>
                            </div>
                        </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default MyOrders;