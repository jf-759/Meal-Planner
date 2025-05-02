import { createSlice } from '@reduxjs/toolkit'

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        mealPlan: {
            Monday: null,
            Tuesday: null,
            Wednesday: null,
            Thursday: null,
            Friday: null,
            Saturday: null,
            Sunday: null,
        },
    },

    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload;
        },
        setMealPlan: (state, action) => {
            state.mealPlan = {...state.mealPlan, ...action.payload }
        },
    },
})

export const { setRecipes, setMealPlan } = recipesSlice.actions

export const selectRecipes = (state) => state.recipes.recipes
export const selectMealPlan = (state) => state.recipes.mealPlan

export default recipesSlice.reducer