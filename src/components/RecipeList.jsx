import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipes } from '../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';

const RecipeList = ({ onRecipeClick }) => {
  const recipes = useSelector(selectRecipes);

  const handleClick = (id) => {
    if (onRecipeClick) {
      onRecipeClick(id);
    }
  };

  return (
    <div>
      {recipes.map((meal) => (
        <div key={meal.id}>
          <h3>{meal.title}</h3>
            <Link 
                to={`/recipe/${meal.id}`} 
                onClick={() => handleClick(meal.id)}
                className="text-blue-500 hover:text-blue-700 text-sm p-1 rounded-full hover:bg-blue-100 transition-colors"
            >
            View Recipe
            </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;