import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCard from './SingleCard';

const CategoryDetails = () => {
    const details = useLoaderData()
    console.log(details);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-12'>
            {
                details.map(detail => <SingleCard
                    detail={detail}
                    key={detail._id}
                ></SingleCard>)
            }
        </div>
    );
};

export default CategoryDetails;