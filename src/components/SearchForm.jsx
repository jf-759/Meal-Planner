import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchRecipesThunk } from '../features/recipes/recipesThunks'


const SearchForm = () => {
    const dispatch = useDispatch()
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedFilters, setSelectedFilters] = useState([])
    
    const dietOptions = ['vegetarian', 'vegan', 'gluten free', 'low carb']

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target
        setSelectedFilters((prevFilters) => 
            checked
                ? [...prevFilters, value]
                : prevFilters.filter((filter) => filter !== value)
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(fetchRecipesThunk({ searchTerm, filters: selectedFilters }))
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-xl mx-auto mt-6 space-y-5 px-4"  // added px-4 for padding
        >
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />

            <fieldset className="flex flex-wrap gap-4">
                {dietOptions.map((diet) => (
                    <label key={diet} className="flex items-center gap-2 text-sm text-gray-700 py-2">
                        <input
                            type="checkbox"
                            value={diet}
                            checked={selectedFilters.includes(diet)}
                            onChange={handleCheckboxChange}
                            className="accent-blue-500 w-4 h-4"
                        />
                        {diet.charAt(0).toUpperCase() + diet.slice(1)}
                    </label>
                ))}
            </fieldset>

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg transition w-full sm:w-auto"
            >
                Search
            </button>
        </form>
    )
}

export default SearchForm
