import { fetchRecipes } from '../api/spoonacular'

const testFetch = async () => {
    const { data, error } = await fetchRecipes('chicken', ['vegetarian'])
    if (error) { 
        console.log('API Error: ', error)
    } else {
        console.log('Fetched Recipes:', data)
    }
}

testFetch();