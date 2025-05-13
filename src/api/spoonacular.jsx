const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

export const fetchRecipes = async (query, filters = []) => {
  const baseURL = 'https://api.spoonacular.com/recipes/complexSearch';

  const params = new URLSearchParams({
    query,
    apiKey: API_KEY,
    number: 10, // max 100
    ...(filters.length > 0 && { diet: filters.join(',') }),
  });

  const url = `${baseURL}?${params.toString()}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Spoonacular fetch failed');
    const data = await res.json();
    return data.results;
  } catch (error) {
    console.error('Fetch Error:', error);
    return [];
  }
};
