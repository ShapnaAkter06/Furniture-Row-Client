import React from 'react';

const CategoryCard = ({ category }) => {
    const { name, image } = category;
    console.log(category);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="card-actions">
                    <button className="btn btn-primary block w-full">{name}</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;