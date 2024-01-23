import React from 'react';
import delivery1 from '../../assets/delivery1.png'
import delivery2 from '../../assets/delivery2.png'
import delivery3 from '../../assets/delivery3.png'
import DeliveryOption from './DeliveryOption';

const DeliveryOptions = () => {

    const DeliveryCards = [
        {
            id: 1,
            name: 'In-Store Pickup (Free)',
            description: 'We ship your order to your local store for quick and easy in-store pick up at no extra charge.',
            icon: delivery1,
        },
        {
            id: 2,
            name: 'Store-to-Door Drop Off',
            description: 'Convenient and contact-free, we deliver your purchase to your front door without ever stepping foot inside your home.',
            icon: delivery2,
        },
        {
            id: 3,
            name: 'Premium Delivery & Set Up',
            description: 'Our full service delivery and installation. We deliver and assemble your product in the room of your choice, so you can relax and let us do all the heavy lifting.',
            icon: delivery3,
        },
    ]
    return (
        <div>
            <div className='text-center my-12'>
                <h2 className='font-bold text-2xl text-[#67AD5C] mb-2'>We offer three delivery options for your convenience!</h2>
                <p className='text-sm font-semibold'>Select from these delivery options in cart.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-green-100 px-4 mb-12'>
                {
                    DeliveryCards?.map(card => <DeliveryOption
                        key={card.id}
                        card={card}
                    ></DeliveryOption>)
                }
            </div>
        </div>
    );
};

export default DeliveryOptions;