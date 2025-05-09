import React, { useState } from 'react'

const RecipeSearch = ({ onSearch }) => {
    const [query, setQuery] = useState('')

    const handleSearch = () => {
        onSearch(query)
    }

    return (
        <div className="p-4">
            <input
                type="text"
                className="border p-2 rounded"
                placeholder="Search for recipes"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="bg-blue-500 text-white p-2 ml-2 rounded"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
    )
}

export default RecipeSearch