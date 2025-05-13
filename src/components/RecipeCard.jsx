const RecipeCard = ({ recipe }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-4 border border-gray-200 hover:scale-[1.01] transform transition-transform">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-gray-800">{recipe.title}</h2>
        </div>
    )
}

export default RecipeCard