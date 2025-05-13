import { fetchRecipes } from '../api/spoonacular.jsx'

const testFetch = async () => {
    const { data, error } = await fetchRecipes('chicken', ['vegetarian'])

    if (error) {
        console.error('❌ API Error:', error)
    } else {
        console.log('✅ Fetched Recipes:', data)
    }
}

testFetch()
