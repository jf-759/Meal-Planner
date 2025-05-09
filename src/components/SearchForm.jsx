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
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="p-2 border rounded w-full"
            />

            <div className="flex flex-wrap gap-2">
                {dietOptions.map((diet) => (
                    <label key={diet} className="flex items-center gap-1">
                        <input
                            type="checkbox"
                            value={diet}
                            checked={selectedFilters.includes(diet)}
                            onChange={handleCheckboxChange}
                        />
                        {diet}
                    </label>
                ))}
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Search
            </button>
        </form>
    )
}

export default SearchForm