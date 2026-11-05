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

  useEffect(() => {
    if (!ingredients) {
      setMeals([]);
      return;
    }
    async function loadMeals() {
      const mealIdeas = await fetchMealIdeas(ingredients);
      setMeals(mealIdeas);
    }
    loadMeals();
  }, [ingredients]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">
        {ingredients ? `Meal ideas for "${ingredients}"` : "No item selected"}
      </h1>

      {ingredients && meals.length === 0 && (
        <p className="text-red-600">No meal ideas found for this ingredient.</p>
      )}

      <ul className="grid grid-cols-2 gap-3">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="bg-black-200 p-2 rounded">
            <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
