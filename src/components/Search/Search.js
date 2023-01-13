import React, { useEffect, useState } from "react";
import SearchResult from "../SearchResult/SearchResult";

const Search = () => {
  const [inputText, setInputText] = useState("");
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [inputText]);

  const searchInput = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="min-h-[800px]">
      <div>
        <h1 className="flex justify-center m-5 p-5 text-lime-400 text-4xl font-black tracking-widest">Search Our Foods</h1>
        <div  className="flex justify-center m-5 p-5">
        <input onChange={searchInput} type="text" name="" id="" placeholder="Type Here" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        </div>
        
        <p className="flex justify-center m-5 p-5 text-gray-800 text-3xl tracking-tighter">Total {meals.length} Foods Found</p>
      </div>

      <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
        {meals.map((meal) => (
          <SearchResult key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Search;
