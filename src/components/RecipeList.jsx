import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipes } from '../features/recipes/recipesSlice';

const RecipeList = ({ onRecipeClick }) => {
  const recipes = useSelector(selectRecipes);

  const handleClick = (id) => {
    if (onRecipeClick) {
      onRecipeClick(id);
    }
  };

  return (
    <div className="px-8 py-6 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-auto-fill-250 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden text-center transition-transform duration-200 ease-in-out cursor-pointer hover:transform hover:-translate-y-1 hover:shadow-xl"
            onClick={() => handleClick(recipe.id)}
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <h3 className="text-lg py-4 text-gray-800">{recipe.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
