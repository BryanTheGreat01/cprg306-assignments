import { resolve } from "styled-jsx/css";
import { useEffect, useState } from "react";
// "use client"
export default function MealIdeas() {
  let [meals, setMeals] = useState([]);
  let [searchTerm, setSearchTerm] = useState("chicken");

  async function fetchMeals(selectedIngredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${selectedIngredient}`,
      );
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error(error);
    }
  }

  async function loadMeals() {
    const newMeals = await fetchMeals(searchTerm);
    setMeals(newMeals);
    console.log(newMeals);
  }
  // use default search term
  useEffect(() => {
    loadMeals();
  }, []);
  return (
    <div>
      <h1>Meal ideas for "{searchTerm}"</h1>
      <ul>
        {meals.map((meal) => {
          <li>{meal.strMeal}</li>;
        })}
      </ul>
    </div>
  );
}
