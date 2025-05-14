import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipesThunk } from '../features/recipes/recipesThunks';

const SearchForm = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState([]);
    
    const dietOptions = ['vegetarian', 'vegan', 'gluten free', 'low carb'];

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setSelectedFilters((prevFilters) => 
            checked
                ? [...prevFilters, value]
                : prevFilters.filter((filter) => filter !== value)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchRecipesThunk({ searchTerm, filters: selectedFilters }));
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-xl mx-auto mt-6 space-y-6"
        >
            {/* Search input */}
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Diet filters */}
            <fieldset className="flex flex-wrap gap-4 justify-center">
                {dietOptions.map((diet) => (
                    <label key={diet} className="flex items-center text-sm space-x-2">
                        <input
                            type="checkbox"
                            value={diet}
                            checked={selectedFilters.includes(diet)}
                            onChange={handleCheckboxChange}
                            className="accent-indigo-300 w-5 h-5"
                        />
                        <span>{diet.charAt(0).toUpperCase() + diet.slice(1)}</span>
                    </label>
                ))}
            </fieldset>

            {/* Submit button */}
            <button
                type="submit"
                className="w-full bg-indigo-400 text-white p-3 rounded-md hover:bg-indigo-600 transition-colors"
            >
                Search
            </button>
        </form>
    );
};

export default SearchForm;
