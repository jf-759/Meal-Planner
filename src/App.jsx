import React from 'react'
import RecipeSearch from './components/RecipeSearch'
import MealCalendar from './components/MealCalendar'
import SearchForm from './components/SearchForm'
import RecipeList from './components/RecipeList'

import { useSelector, useDispatch } from 'react-redux'
import { selectMealPlan, addToMealPlan } from './features/recipes/recipesSlice'

const App = () => {
  const mealPlan = useSelector(selectMealPlan)
  const dispatch = useDispatch()

  const handleRecipeClick = (id) => {
    console.log('Recipe clicked:', id)

    const dayOptions = Object.keys(mealPlan);
    
    const selectedDay = prompt(
      'Choose a day for this meal:',
      'Monday'
    );

    if (selectedDay && dayOptions.includes(selectedDay)) {
      dispatch(addToMealPlan({ day: selectedDay, id }))
    }
  }

  return (
    <div className="app-container">
      <div className="app-inner">

        <header className="app-header text-center mb-8 p-6">
          <h1 className="app-title text-3xl font-extrabold text-gray-800">🥗 Meal Planner</h1>
          <p className="app-subtitle text-gray-500 mt-2">Search, plan, and visualize your meals</p>
        </header>

        <section className="app-section mb-8">
          <SearchForm />
        </section>

        <section className="app-section mb-8">
          <MealCalendar mealPlan={mealPlan} />
        </section>

        <section className="app-section">
          <h2 className="section-title flex flex-box justify-center py-5 text-xl font-semibold text-gray-700">Recipe Search Results</h2>
          <RecipeList onRecipeClick={handleRecipeClick}/>
        </section>
      </div>
    </div>
  )
}

export default App
