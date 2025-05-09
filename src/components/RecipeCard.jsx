const RecipeCard = ({ recipe }) => {
    return (
        <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-40 object-cover rounded mb-2"
            />
            <h2 className="font-bold text-lg">{recipe.title}</h2>
        </div>
    )
}

export default RecipeCard