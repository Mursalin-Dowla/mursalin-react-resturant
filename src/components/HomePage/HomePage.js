import React, { useEffect, useState } from "react";
import backgroundImage from '../../images/homepage_background.jpg'

const HomePage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?s";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div  className='max-w-[1400px] h-[1000px]'>
       <p style={{ backgroundImage: `url(${backgroundImage})`,backgroundRepeat:'no-repeat',backgroundAttachment:'fixed',backgroundSize:'100% 100%'}} 
       className='w-full h-[800px] flex justify-center text-white pt-[10%] font-mono text-3xl' >Limited {meals.length} Meals To 
       <p className="text-lime-400"><br/>Satisfy Your Appetite...</p></p>
      <div className="grid grid-cols-1  pt-11 lg:ml-[40%] lg:mr-[40%] md:ml-[40%] md:mr-[40%] ml-[20%] mr-[20%]">
        <h1 className="flex justify-center text-white bg-slate-400 rounded-full  font-semibold">mursalin<p className="pr-1 text-lime-400">'s</p> <ion-icon name="hand-right-outline"></ion-icon></h1>
      
        <h3 className="flex justify-center text-black bg-lime-400 rounded-full font-semibold mt-2">A name of <p className="text-red-400 pl-1 font-bold">TRUST</p></h3>
      </div>
    </div>
  );
};

export default HomePage;
