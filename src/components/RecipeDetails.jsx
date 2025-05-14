import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRecipes } from '../api/spoonacular';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipeDetails = async () => {
      const { data, error } = await fetchRecipes(id);
      if (error) {
        setError(error);
        setLoading(false);
        return;
      }
      setRecipe(data[0]); // Update this if the API response is not an array
      setLoading(false);
    };

    getRecipeDetails();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;
  if (!recipe) return <p className="text-center text-gray-500">Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">{recipe.title || 'No title available'}</h2>
      {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title || 'No image available'}
          className="w-full h-auto rounded-lg mb-4"
        />
      )}
      <p className="text-gray-700">{recipe.instructions || 'No instructions available'}</p>
    </div>
  );
};

export default RecipeDetails;