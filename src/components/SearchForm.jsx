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
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-w-xl mx-auto mt-6 space-y-6"
        >
            <input
                type="text"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            />


            <fieldset className="flex flex-wrap gap-4 justify-center">
                {dietOptions.map((diet) => (
                    <label
                        key={diet}
                        className="flex items-center text-sm space-x-2 text-black dark:text-white"
                    >
                        <input
                            type="checkbox"
                            value={diet}
                            checked={selectedFilters.includes(diet)}
                            onChange={handleCheckboxChange}
                            className="accent-indigo-500 dark:accent-indigo-300 w-5 h-5"
                        />
                        <span className="dark:text-white">
                            {diet.charAt(0).toUpperCase() + diet.slice(1)}
                        </span>
                    </label>
                ))}
            </fieldset>

            <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-md transition-colors dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
                Search
            </button>
        </form>
    );
};

export default SearchForm;
