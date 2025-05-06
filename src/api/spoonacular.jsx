import axios from 'axios'

const API_BASE_URL = 'https://api.spoonacular.com/recipes/complexSearch'

export const fetchRecipes = async (searchTerm = '', filters = []) => {
    try {
        const response = await axios.get(API_BASE_URL, {
            params: {
                apiKey: import.meta.env.SPOONACULAR_API_KEY,
                query: searchTerm,
                number: 20,
                diet: filters.join(','),
                addRecipeInformation: true
            },
        })
        return { data: response.data.results, error: null }
    } catch (error) {
        console.error('Error fetching recipes:', error)
        return {data: [], error: error.message || 'An error occured' }
    }
}