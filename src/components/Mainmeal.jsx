import React from "react";
import mealData from "./data/meals";
import Cards from "./utilities/Cards";

const Mainmeal = () => {
  return (
    <main>
      <h1 className='text-center text-2xl font-bold my-4'>Meal Types</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 place-content-center lg:grid-cols-4 gap-4'>
        {mealData.map((meal) => (
          <Cards
            key={meal.id}
            image={meal.img.src}
            alt={meal.img.alt}
            name={meal.name}
            mealType={meal.mealType}
          />
        ))}
      </div>
    </main>
  );
};

export default Mainmeal;
