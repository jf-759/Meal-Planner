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
                        <th key={index} className="px-4 py-2 text-gray-700 dark:text-gray-200 font-semibold">
                        {day}
                        </th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {Object.keys(mealPlan).map((day, index) => (
                        <td key={index} className="border border-gray-200 dark:border-gray-700 px-4 py-4">
                        <div className="bg-violet-50 dark:bg-violet-900 rounded-lg p-4 flex flex-col min-h-[100px] shadow-md">
                            <div className="flex-grow">
                            {mealPlan[day] && mealPlan[day].length > 0 ? (
                                <ul className="space-y-2">
                                {mealPlan[day].map((meal, index) => (
                                    <li 
                                    key={`${day}-${meal.id || index}`} 
                                    className="bg-gray-100 dark:bg-gray-800 p-2 rounded-md flex items-center justify-between"
                                    >
                                    <div className="flex items-center">
                                        {meal.image && (
                                        <img 
                                            src={meal.image} 
                                            alt={meal.title} 
                                            className="w-8 h-8 rounded-full mr-2 object-cover"
                                        />
                                        )}
                                        <span className="text-gray-800 dark:text-gray-200">{meal.title}</span>
                                    </div>
                                    <Link 
                                        to={`https://spoonacular.com/recipes/${meal.title.replace(/\s+/g, '-').toLowerCase()}-${meal.id}`} 
                                        className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm p-1 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors"
                                    >
                                        View Recipe
                                    </Link>
                                    
                                    <button
                                        onClick={() => handleRemoveMeal(day, meal.id)}
                                        className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
                                        title="Remove meal"
                                    >
                                        ✕
                                    </button>
                                    </li>
                                ))}
                                </ul>
                            ) : (
                                <p className="text-gray-500 dark:text-gray-400 italic">No meal assigned</p>
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