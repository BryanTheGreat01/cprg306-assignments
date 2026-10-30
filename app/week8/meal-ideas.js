"use client";
import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredients) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredients}`,
  );
  const data = await response.json();
  return data.meals ?? [];
}

export default function MealIdeas({ ingredients }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    const newMeals = await fetchMealIdeas(ingredients);
    setMeals(newMeals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredients]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">List of Meals</h1>
      <select>
        {meals.map((meal) => (
          <option key={meal.idMeal}>{meal.strMeal}</option>
        ))}
      </select>
    </div>
  );
}
