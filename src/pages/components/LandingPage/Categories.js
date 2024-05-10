import React from 'react'
import CategoryCard from '../Cards/CategoryCard'

const Categories = ({categoriesData}) => {
  return (
    <div className='my-10'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6'>Categories</h2>
        <div className="grid grid-cols-4 gap-4">
          {categoriesData.map((category) => (
            <CategoryCard categoryData={category}/>
          ))}
        </div>
    </div>
  )
}

export default Categories