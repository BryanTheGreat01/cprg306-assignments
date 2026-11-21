"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();
    if (!data.meals) {
      return [];
    }
    return data.meals;
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    };
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      {meals.length === 0 ? (
        <p className="text-xl mb-6 text-black font-bold">
          No meal ideas found for {ingredient}.
        </p>
      ) : (
        <>
          <h2 className="text-xl mb-6 text-black font-bold">
            Meal Ideas for {ingredient}
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="flex flex-col shadow-md rounded-md p-2 border-2 bg-white"
              >
                <h3 className="text-slate-800 font-semibold text-sm pb-2">
                  {" "}
                  {meal.strMeal}
                </h3>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-auto mt-auto rounded-sm border-2 border-blue-900"
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
