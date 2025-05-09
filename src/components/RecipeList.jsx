import { useSelector } from 'react-redux'
import { selectRecipes, selectStatus, selectError } from '../features/recipes/recipesSlice'
import RecipeCard from './RecipeCard'

const RecipeList = () => { 
    const recipes = useSelector(selectRecipes)
    const status = useSelector(selectStatus)
    const error = useSelector(selectError)

    if (status === 'loading') {
        return <p className="text-center text-blue-500">Loading recipes...</p>
    }

    if (status === 'failed') {
        return <p className="text-center text-red-500">Error: {error}</p>
    }

    if (recipes.length === 0) {
        return <p className="text-center text-gray-500">No recipes found. Try a different</p>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipeList