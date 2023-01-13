import React from "react";
import { Link, useNavigate } from 'react-router-dom';

const SearchResult = (props) => {
  const { strMeal, strCategory, strArea, strMealThumb,} = props.meal;
  const navigate = useNavigate();

  const  showFoodDetail = () =>{
     const path= `/meal/${strMeal}`
     navigate(path)
  };
  return (
    <div>
      <div className="flex justify-center mt-5">
        <div className="rounded-lg shadow-lg bg-white max-w-xs">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              className="rounded-t-lg"
              src={strMealThumb}
              alt=""
            />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">{strMeal}</h5>
            <p className="text-gray-700 text-base mb-4">
            Category: {strCategory}
            </p>
            <p className="text-gray-700 text-base mb-4">
            Origin: {strArea}
            </p>
            <button
              onClick={showFoodDetail}
              type="button"
              className=" inline-block px-6 py-2.5 bg-lime-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-lime-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
             Details
            </button>
            <small className="text-gray-500 m-5 bg-lime-100 rounded-md"><Link to={'/meal/cook/'+ strMeal}>see cooking procedure</Link></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
