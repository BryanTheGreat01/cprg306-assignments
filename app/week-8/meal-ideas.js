"use client";

import { useState, useEffect, useCallback } from "react";

// Fetch meal ideas from TheMealDB API.
async function fetchMealIdeas(ingredient) {
  if (!ingredient) {
    return [];
  }

  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(ingredient)}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch meal ideas.");
  }

  const data = await response.json();

  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load meal ideas based on the selected ingredient.
  const loadMealIdeas = useCallback(async () => {
    if (!ingredient) {
      setMeals([]);
      setError("");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    } catch (error) {
      console.error("Error loading meal ideas:", error);
      setMeals([]);
      setError("Unable to load meal ideas. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [ingredient]);

  // Reload whenever the selected ingredient changes.
  useEffect(() => {
    loadMealIdeas();
  }, [loadMealIdeas]);

  return (
    <div className="bg-slate-900 text-white rounded-lg shadow-lg p-6 w-full">
      <h2 className="text-3xl font-bold mb-6">
        Meal Ideas
        {ingredient && ` for ${ingredient}`}
      </h2>

      {!ingredient && (
        <p className="text-slate-300">
          Select an item from your shopping list to see meal ideas.
        </p>
      )}

      {loading && (
        <p className="text-slate-300">
          Loading meal ideas...
        </p>
      )}

      {error && (
        <p className="text-red-400">
          {error}
        </p>
      )}

      {!loading && ingredient && meals.length === 0 && !error && (
        <p className="text-slate-300">
          No meal ideas found for {ingredient}.
        </p>
      )}

      <ul className="space-y-3">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-slate-800 rounded-md p-4 text-lg"
          >
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}