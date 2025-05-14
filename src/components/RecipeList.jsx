import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipes } from '../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';

const RecipeList = ({ onRecipeClick }) => {
  const recipes = useSelector(selectRecipes) || [];

  const handleClick = (id) => {
    if (onRecipeClick) {
      onRecipeClick(id);
    }
  };

  if (recipes.length === 0) {
    return <p className="text-center text-gray-500">No recipes found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((meal) => (
        <div key={meal.id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold mb-2">{meal.title}</h3>
          {meal.image && (
            <img 
              src={meal.image} 
              alt={meal.title} 
              className="w-full h-48 object-cover rounded-md mb-2"
            />
          )}
          <Link 
            to={`/recipe/${meal.id}`} 
            onClick={() => handleClick(meal.id)}
            className="text-blue-500 hover:text-blue-700 text-sm p-1 rounded-full hover:bg-blue-100 transition-colors inline-block mt-2"
          >
             ➕ Add to Meal Plan
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;