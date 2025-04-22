import React from "react";

const Cards = ({ key, image, alt, name, mealType }) => {
  return (
    <main>
      <div className='lg:w-full w-80 my-3 lg:h-full h-full place-self-center place-content-center max-h-100 transition-transform transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out bg-red-200 rounded-3xl p-4 text-center '>
        {key}
        <img
          src={image}
          alt={alt}
          className=' w-full h-2/3 rounded-3xl object contain '
        />
        <h1 className='font-bold  my-2'>{name}</h1>
        <p className='text-black/80'>{mealType}</p>
      </div>
    </main>
  );
};

export default Cards;
