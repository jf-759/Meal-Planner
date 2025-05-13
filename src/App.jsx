import React from 'react'
import RecipeSearch from './components/RecipeSearch'
import MealCalendar from './components/MealCalendar'
import SearchForm from './components/SearchForm'
import RecipeList from './components/RecipeList'
import { useSelector } from 'react-redux'
import { selectMealPlan } from './features/recipes/recipesSlice'
import './App.css'

const App = () => {
  const mealPlan = useSelector(selectMealPlan)

  return (
    <div className="app-container">
      <div className="app-inner">
        <header className="app-header">
          <h1 className="app-title">🥗 Meal Planner</h1>
          <p className="app-subtitle">Search, plan, and visualize your meals</p>
        </header>

        <section className="app-section">
          <SearchForm />
        </section>

        <section className="app-section">
          <MealCalendar mealPlan={mealPlan} />
        </section>

        <section className="app-section">
          <h2 className="section-title">Recipe Search Results</h2>
          <RecipeList />
        </section>
      </div>
    </div>
  )
}

export default App
