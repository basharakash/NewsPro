import React from 'react';

const CategorySelation = ({onSelectedCategory, activeCategory}) => {
    const categories = ["Tech", "Apps", "Health", "Fintech","AI", "Security","Work", "Gadgets"]


  return (
    <div className='px-4 mb-8 lg:space-x-10 flex flex-wrap border-b-2 py-5 text-gray-900 font-semibold'>
      <button onClick={() => onSelectedCategory(null)} className={`lg:ml-12 ${activeCategory ? "" :"active-button-color"}`}>All</button>
      {
        categories.map((category) => (
            <button 
            className={`mr-2 space-x-16 ${activeCategory === category ? "active-button-color" : ""}`}
            onClick={() => onSelectedCategory(category)}
            key={category}>
                {category}
            </button>
        ))
      }
    </div>
  );
}

export default CategorySelation;
