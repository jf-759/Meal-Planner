import { createSlice } from '@reduxjs/toolkit'
import { fetchRecipesThunk } from './recipesThunks'

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        status: 'idle',
        error: null,
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipesThunk.pending, (state) => {
                state.status = 'loading'
                state.error = null
            })
            .addCase(fetchRecipesThunk.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.recipes = action.payload
            })
            .addCase(fetchRecipesThunk.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    }
})

export const { setRecipes, setMealPlan } = recipesSlice.actions

export const selectRecipes = (state) => state.recipes.recipes
export const selectStatus = (state) => state.recipes.status
export const selectError = (state) => state.recipes.error
export const selectMealPlan = (state) => state.recipes.mealPlan

export default recipesSlice.reducer