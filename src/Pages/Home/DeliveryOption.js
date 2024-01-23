import React from 'react';

const DeliveryOption = ({card}) => {
    const {name, description, icon} = card;
    return (
        <div className='flex justify-center items-center'>
            <figure><img src={icon} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="text-[#67AD5C] font-bold">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DeliveryOption;