import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealDetails = () => {
  const { strMeal } = useParams();
  const [meal, setMeal] = useState([]);
  console.log(meal);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [strMeal]);
  return (
    <div className="min-h-screen">
      <div className="flex justify-center mt-5">
        <div className="rounded-lg shadow-lg bg-white lg:max-w-lg md:max-w-md max-w-xs">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg mt-5" src={meal.strMealThumb} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {strMeal}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              Category: {meal.strCategory}
            </p>
            <p className="text-gray-700 text-base mb-4">
              Origin: {meal.strArea}
            </p>
            <p className="text-gray-700 text-base mb-4">
              Type of Meal: {meal.strTags}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetails;
