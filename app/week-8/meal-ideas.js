"use client";
import { useEffect, useState } from "react";

async function fetchMeals(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`,
    );
    const data = await response.json();
    return data.meals;
    // each meal has meal mealID, strMeal, strMealThumb: url
  } catch (error) {
    console.error(error);
  }
}

export default function MealIdeas({ searchedIngredient }) {
  let [meals, setMeals] = useState([]);

  async function loadMeals(ingredient) {
    const newMeals = await fetchMeals(ingredient);
    setMeals(newMeals);
    console.log(newMeals);
  }
  // use default search term
  useEffect(() => {
    loadMeals(searchedIngredient);
  }, [searchedIngredient]);

  return (
    <div>
      <h1>Meal ideas for "{searchedIngredient}"</h1>
      <ul className="p-5">
        {meals
          ? meals.map((meal) => {
              return (
                <li key={meal.idMeal} className="m-3">
                  {meal.strMeal}
                </li>
              );
            })
          : "No results"}
      </ul>
    </div>
  );
}
