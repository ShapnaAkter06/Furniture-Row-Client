import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking);
    return (
        <div className='ml-5'>
            <h3 className='text-3xl'>Payment for {booking.product} </h3>
            <p> Please pay <strong>{booking.productPrice} </strong> </p>
        </div>
    );
};

export default Payment;