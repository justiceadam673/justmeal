import React from "react";

const Cards = ({ key, image, alt, name, mealType }) => {
  return (
    <main>
      <div className='w-full h-64 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out bg-red-300 rounded-3xl p-4  text-center'>
        {key}
        <img src={image} alt={alt} className=' w-full h-2/3 rounded-3xl  ' />
        <h1 className='font-bold text-2xl my-2'>{name}</h1>
        <p>{mealType}</p>
      </div>
    </main>
  );
};

export default Cards;
