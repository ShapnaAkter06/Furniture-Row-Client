import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Spinner from '../../Components/Spinner/Spinner';

const Advertisement = () => {
    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch('https://assignment-12-server-jet.vercel.app/products', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const data = await res.json();
                return data;
            }
            catch (error) {
                console.log(error);
            }
        }
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }
    console.log(products);

    return (
        <>
            <div className='text-center my-12'>
                <h2 className='font-bold text-2xl text-[#67AD5C] mb-2'>Advertisement Products</h2>
                <p className='text-sm font-semibold'>Advertise going on</p>
            </div>
            <div className=' my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4'>
                {
                    products?.map(product => product.status === true &&
                        <div key={product._id} className="card">
                            <figure>
                                <img src={product.image} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.product}</h2>
                                <p>Price: {product.price}</p>
                                <p>Year of Purchase: {product.year}</p>
                                <p>Condition: {product.condition}</p>
                                <p>Location: {product.location}</p>
                                <p>Contact: {product.phone}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Advertisement;