import React, { useState } from 'react'

const RecipeSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('')

    const handleSearch = () => {
        onSearch(query)
    }

    return (
        <div className="flex flex-col sm:flex-row items-center gap-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 max-w-xl mx-auto mt-6">
            <input
                type="text"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-blue-400 transition"
                placeholder="Search for recipes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    )
}

export default RecipeSearch