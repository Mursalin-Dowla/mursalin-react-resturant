import React, { useEffect, useState } from 'react';

const Categories = () => {
    const[categories, SetCategories] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        fetch(url)
          .then(res => res.json())
          .then(data => SetCategories(data.categories));
      }, []);
    
    return (
        <div className='max-w-[1400px] h-full min-h-[800px]'>
            <h1 className='flex justify-center pt-5 font-mono font-semibold text-4xl tracking-wider text-gray-800'>Total Categories:{categories.length}</h1>
            {
                categories.map(category=>{
                    return(
                        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-10'>
                           <h2 className='flex  justify-center lg:pt-[25%] md:pt-[25%] text-lime-400 
                           font-mono font-semibold text-2xl lg:border-hidden md:border-hidden border border-y-pink-400'>{category.strCategory}</h2>
                           <img src={category.strCategoryThumb} alt="" />
                           <p className='border-[1px] border-y-purple-400'>Description:<br/>{category.strCategoryDescription}</p>
                        </div>
                       
                    )
                })
            }
        </div>
    );
};

export default Categories;