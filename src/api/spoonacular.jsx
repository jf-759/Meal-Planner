export const fetchRecipes = async (query, filters = []) => {
  const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
  const baseURL = 'https://api.spoonacular.com/recipes/complexSearch';


  if (!API_KEY) {
    console.error('Missing API key');
    return { data: [], error: 'Missing API key' };
  }
  if (!query || query.trim() === '') {
    console.error('Search query is required');
    return { data: [], error: 'Search query is required' };
  }
  if (!Array.isArray(filters)) {
    console.error('Filters must be an array');
    return { data: [], error: 'Filters must be an array' };
  }


  const allowedFilters = ['vegetarian', 'vegan', 'gluten free', 'dairy free', 'pescetarian', 'ketogenic'];
  const invalidFilters = filters.filter(
    (f) => typeof f !== 'string' || !allowedFilters.includes(f.toLowerCase())
  );
  if (invalidFilters.length > 0) {
    console.error('Invalid filters:', invalidFilters);
    return { data: [], error: 'One or more filters are invalid' };
  }

  const params = new URLSearchParams({
    query,
    apiKey: API_KEY,
    number: 10,
    ...(filters.length > 0 && { diet: filters.join(',') }),
  });

  const url = `${baseURL}?${params.toString()}`;
  console.log('Fetching URL:', url);

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Spoonacular fetch failed');
    const data = await res.json();
    return { data: data.results, error: null };
  } catch (error) {
    console.error('Fetch Error:', error);
    return { data: [], error: error.message || 'Unknown error' };
  }
};
