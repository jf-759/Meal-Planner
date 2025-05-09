import React from 'react'
import RecipeSearch from './components/RecipeSearch'
import MealCalendar from './components/MealCalendar'
import SearchForm from './components/SearchForm'
import RecipeList from './components/RecipeList'
import { useSelector } from 'react-redux'
import { selectMealPlan } from './features/recipes/recipesSlice'

const App = () => {
  const mealPlan = useSelector(selectMealPlan)

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Meal Planner</h1>
      <RecipeSearch />
      <MealCalendar mealPlan={mealPlan} />
      <SearchForm />
      <RecipeList />
    </div>
  )
}

export default App