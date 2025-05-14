import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromMealPlan } from '../features/recipes/recipesSlice';
import { Link } from 'react-router-dom';

const MealCalendar = ({ mealPlan }) => {
    const dispatch = useDispatch();

    const handleRemoveMeal = (day, id) => {
        dispatch(removeFromMealPlan({ day, id }));
    };

    return (
        <div className="p-4">
            <div className="overflow-x-auto">
                <table className="table-auto w-full text-left">
                <thead>
                    <tr>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                        <th key={index} className="px-4 py-2 text-gray-700 font-semibold">
                        {day}
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {Object.keys(mealPlan).map((day, index) => (
                        <td key={index} className="border px-4 py-4">
                        <div className="bg-violet-50 rounded-lg p-4 flex flex-col min-h-[100px] shadow-md">
                            <div className="flex-grow">
                            {mealPlan[day] && mealPlan[day].length > 0 ? (
                                <ul className="space-y-2">
                                {mealPlan[day].map((meal, index) => (
                                    <li 
                                    key={`${day}-${meal.id || index}`} 
                                    className="bg-gray-100 p-2 rounded-md flex items-center justify-between"
                                    >
                                    <div className="flex items-center">
                                        {meal.image && (
                                        <img 
                                            src={meal.image} 
                                            alt={meal.title} 
                                            className="w-8 h-8 rounded-full mr-2 object-cover"
                                        />
                                        )}
                                        <span>{meal.title}</span>
                                    </div>
                                    <Link 
                                        to={`/recipe/${meal.id}`} 
                                        className="text-blue-500 hover:text-blue-700 text-sm p-1 rounded-full hover:bg-blue-100 transition-colors"
                                    >
                                        View Recipe
                                    </Link>
                                    <button
                                        onClick={() => handleRemoveMeal(day, meal.id)}
                                        className="text-red-500 hover:text-red-700 text-sm p-1 rounded-full hover:bg-red-100 transition-colors"
                                        title="Remove meal"
                                    >
                                        ✕
                                    </button>
                                    </li>
                                ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 italic">No meal assigned</p>
                            )}
                            </div>
                        </div>
                        </td>
                    ))}
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
};

export default MealCalendar;