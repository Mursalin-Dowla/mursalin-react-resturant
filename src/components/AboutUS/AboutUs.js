import React from "react";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg"

const AboutUs = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 max-w-[1400px] min-h-[500px]">
        <h1
          className="m-2 w-full h-[300px] text-white font-semibold font-mono text-2xl pl-10 pt-20"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          Cooked with Love
        </h1>
        <h1 className="flex justify-center pt-[20%] text-lime-400 font-mono font-semibold text-2xl">
          Enjoy Your Every bite
        </h1>
        <h1 className="flex justify-center pt-[20%] text-lime-400 font-mono font-semibold text-2xl">
          Feels Like Home
        </h1>
        <h1
          className="m-2 w-full h-[300px] text-white font-semibold font-mono text-2xl flex justify-center pt-40"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          Hygienic Ingredients
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-center pt-10 pb-10 bg-slate-200">
        <div class="flex justify-center">
          <div class="flex flex-col md:flex-row md:max-w-3xl max-w-sm rounded-lg bg-white shadow-lg">
            <img
              class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={image3}
              alt=""
            />
            <div class="p-6 flex flex-col justify-start">
              <h5 class="text-gray-900 text-xl font-medium mb-2">Message from the CEO</h5>
              <p class="text-gray-700 text-base mb-4">
                My message for the future supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.<br/>
                <small className="font-mono font-semibold text-lime-400">Md Mursalin Dowla</small> 
              </p>
              <p class="text-gray-600 text-xs">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
