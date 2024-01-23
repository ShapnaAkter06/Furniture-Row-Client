import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, image, category_id } = category;
    // console.log(category); 
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="p-4">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="flex justify-center text-center">
                <div className="mb-4">
                    <Link to={`/allCategories/${category_id}`}>
                        <button className="btn btn-sm bg-[#67AD5C] block w-full">{name}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;