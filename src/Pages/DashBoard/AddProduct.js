import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-jet.vercel.app/categories')
            const data = res.json();
            return data;
        }
    });

    const handleAddProduct = data => {
        console.log(data);
        // save products information to the database
        fetch('https://assignment-12-server-jet.vercel.app/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('Product added successfully');
                navigate('/dashboard/myProduct')
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-4xl'>Add Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text"
                        {...register("product", {
                            required: "Product is required",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.product && <p className='text-red-700 mt-2' >{errors.product?.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Product Price</span>
                    </label>
                    <input type="text"
                        {...register("price", {
                            required: "Price must be provided",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.price && <p className='text-red-700 mt-2' >{errors.price?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Condition</span>
                    </label>
                    <input type="text"
                        {...register("condition", {
                            required: "Condition must be provided",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.condition && <p className='text-red-700 mt-2' >{errors.condition?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Mobile Number</span>
                    </label>
                    <input type="text"
                        {...register("phone", {
                            required: "Phone must be provided",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.phone && <p className='text-red-700 mt-2' >{errors.phone?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text"
                        {...register("location", {
                            required: "Location must be provided",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.location && <p className='text-red-700 mt-2' >{errors.location?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text"
                        {...register("description", {
                            required: "Description must be provided",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.description && <p className='text-red-700 mt-2' >{errors.description?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Year of purchase</span>
                    </label>
                    <input type="text"
                        {...register("year", {
                            required: "Year must be provided",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.year && <p className='text-red-700 mt-2' >{errors.year?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select
                        {...register("category", {
                            required: "category must be provided",
                        })}
                        className="select input-bordered w-full max-w-xs">
                        {
                            categories?.map(category => <option
                                key={category._id}
                                value={category.name}
                            >{category.name}</option>)
                        }
                    </select>
                    {errors.category && <p className='text-red-700 mt-2' >{errors.category?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Status</span>
                    </label>
                    <select  {...register("status")} className="select input-bordered w-full max-w-xs">
                        <option selected defaultValue={true}>available</option>
                        <option>sold</option>
                    </select>
                    {errors.status && <p className='text-red-700 mt-2' >{errors.status?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="photoURL"
                        {...register("image", {
                            required: "Photo is required",
                        })}
                        className="input input-bordered w-full max-w-xs" />
                    {errors.img && <p className='text-red-700 mt-2' >{errors.img?.message}</p>}

                </div>
                <input className='btn btn-accent w-full mt-4' type="submit" value="Add a Product" />
            </form>
        </div>
    );
};

export default AddProduct;