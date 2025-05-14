import React from 'react';
import ViewRecipeButton from './components/ViewRecipeButton'; // Adjust if needed based on your folder structure
import AddToCalendarButton from './Components/AddToCalendarButton'; // Same here

const RecipeCard = ({ recipe }) => {
  // Event Handlers
  const handleViewRecipe = (recipeId) => {
    console.log("Viewing recipe with id:", recipeId);
    // Your logic to view the recipe details
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 border border-gray-200 hover:scale-[1.01] transform transition-transform">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-800">{recipe.title}</h2>

      <div className="mt-4 flex gap-2">
        {/* Use the ViewRecipeButton and AddToCalendarButton components */}
        <ViewRecipeButton 
          recipeId={recipe.id} 
          handleViewRecipe={handleViewRecipe} 
        />
      </div>
    </div>
  );
};

export default RecipeCard;
