import React from 'react';

const ViewRecipeButton = ({ recipeId, handleViewRecipe }) => {
  return (
    <button
      onClick={() => handleViewRecipe(recipeId)}
      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
    >
      View Recipe
    </button>
  );
};

export default ViewRecipeButton;
