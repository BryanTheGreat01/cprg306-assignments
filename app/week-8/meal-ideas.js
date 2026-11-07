"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas() {
    const response = await fetch (`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
}
export default function MealIdeas () {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealList = await fetchMealIdeas(ingredient);
        setMeals(mealList);
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);
}

return (
    <div>
        <h1 className="text-2x1 font-bold">
            Meal Ideas for {ingredient}
        </h1>
        
        <ul>
            {meals.map((meal) => (
                <li key={meal.idMeal}
                className="rounded-md">{meal.strMeal}</li>
            ))}
        </ul>
    </div>
)

