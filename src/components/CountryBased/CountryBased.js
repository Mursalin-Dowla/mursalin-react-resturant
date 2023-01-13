import React, { useEffect, useState } from "react";

const CountryBased = () => {
  const [origin, setOrigin] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrigin(data.meals));
  }, []);

  return (
    <div className="max-w-[1400px] h-full min-h-[800px]">
      <h1 className="flex justify-center pt-5 font-mono font-semibold text-4xl tracking-wider text-gray-800">
        We serve foods from {origin.length} Origin
      </h1>
      {origin.map((category) => {
        return (
          <div className="grid grid-cols-1 m-10">
            <h2
              className="flex justify-center text-lime-400 
                           font-mono font-semibold text-2xl lg:border-hidden md:border-hidden border border-y-pink-400">
              {category.strArea}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default CountryBased;
