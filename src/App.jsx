import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import RecipeSearch from './components/RecipeSearch';
import MealCalendar from './components/MealCalendar';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

import { useSelector, useDispatch } from 'react-redux';
import { selectMealPlan, addToMealPlan } from './features/recipes/recipesSlice';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const mealPlan = useSelector(selectMealPlan);
  const dispatch = useDispatch();

  const handleRecipeClick = (id) => {
    console.log('Recipe clicked:', id);

    const dayOptions = Object.keys(mealPlan);
    const selectedDay = prompt('Choose a day for this meal:', 'Monday');

    if (selectedDay && dayOptions.includes(selectedDay)) {
      dispatch(addToMealPlan({ day: selectedDay, id }));
    }
  };

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <div className="app-container">
        <div className="flex justify-end p-4">
          <button
            onClick={toggleDarkMode}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        <div className="app-inner">
          <header className="app-header text-center mb-8 p-6">
            <h1 className="app-title text-3xl font-extrabold">🥗 Meal Planner</h1>
            <p className="app-subtitle mt-2">Search, plan, and visualize your meals</p>
          </header>

          <section className="app-section mb-8">
            <SearchForm />
          </section>

          <section className="app-section mb-8">
            <MealCalendar mealPlan={mealPlan} />
          </section>

          <section className="app-section">
            <h2 className="section-title flex justify-center py-5 text-xl font-semibold">
              Recipe Search Results
            </h2>
            <RecipeList onRecipeClick={handleRecipeClick} />
          </section>
        </div>

        <Routes>
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
