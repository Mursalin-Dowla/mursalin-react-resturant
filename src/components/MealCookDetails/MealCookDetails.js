import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MealCookDetails = () => {
  const { strMeal } = useParams();
  const [meal, setMeal] = useState([]);
  console.log(meal);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [strMeal]);
  return (
    <div className="min-h-[800px]">
      <div className="flex justify-center mt-5">
        <div className="rounded-lg shadow-lg bg-white lg:max-w-4xl md:max-w-md max-w-xs">
            <p className="text-lime-400 m-5 text-4xl">
              Cooking Procedure of {meal.strMeal}:
              </p>
              <p className="text-gray-700 m-7 text-2xl">{meal.strInstructions}</p>
            
          </div>
        </div>
      </div>
  );
};

export default MealCookDetails;
