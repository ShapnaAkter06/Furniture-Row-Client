import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation()

    if(navigation.state === 'loading'){
        return <Spinner></Spinner>
    }      
    return (
        <div className='ml-5'>
            <h3 className='text-3xl'>Payment for {booking.product} </h3>
            <p> Please pay <strong>{booking.productPrice} </strong> </p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;