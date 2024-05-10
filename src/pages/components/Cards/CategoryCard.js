import React from 'react';

const CategoryCard = ({ categoryData }) => {
    return (
        <div key={categoryData.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 flex gap-2">
            <div className="relative h-32 bg-gray-100">
                <img
                    src={categoryData.attributes.image.data.attributes.url}
                    alt={categoryData.attributes.category_name}
                    className="object-cover w-44 h-32 mt-3"
                />
            </div>
            <div className="flex flex-col justify-center">
                <h3 className="text-lg font-semibold capitalize">{categoryData.attributes.category_name}</h3>
                <a href='#' className="text-slate-800 hover:text-slate-500 transition-colors ease-in-out duration-300 font-semibold">Explore Now {">"}</a>
            </div>
        </div>
    );
};

export default CategoryCard;
