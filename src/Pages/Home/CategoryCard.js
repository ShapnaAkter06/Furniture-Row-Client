import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const { name, image, category_id } = category;
    // console.log(category); 
    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="card-actions">
                    <Link to={`/allCategories/${category_id}`}>
                        <button className="btn btn-primary block w-full">{name}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;