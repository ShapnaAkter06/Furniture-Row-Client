import { useQuery } from '@tanstack/react-query';
import React from 'react';

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

            }
        }
    })

    return (
        <>
            <div className='text-center my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                {
                    products?.map(product => product.status === true &&
                            <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
                                <figure>
                                    <img src={product.image} alt="" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                <h2 className='font-bold text-2xl text-teal-700'>Advertise Item </h2>
                                    <h2 className="card-title">{product.product}</h2>
                                    <p>Price: {product.price}</p>
                                </div>
                            </div>
                    )
                }
            </div>
        </>
    );
};

export default Advertisement;