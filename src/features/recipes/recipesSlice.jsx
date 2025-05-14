import { createSlice } from '@reduxjs/toolkit'
import { fetchRecipesThunk } from './recipesThunks'

export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        recipes: [],
        status: 'idle',
        error: null,
        mealPlan: {
            Monday: [],
            Tuesday: [],
            Wednesday: [],
            Thursday: [],
            Friday: [],
            Saturday: [],
            Sunday: [],
        },
    },

    reducers: {
        setRecipes: (state, action) => {
            state.recipes = action.payload;
        },
        setMealPlan: (state, action) => {
            state.mealPlan = {...state.mealPlan, ...action.payload }
        },
        addToMealPlan: (state, action) => {
            const { day, id } = action.payload;
            
            // Find the recipe in the recipes array
            const recipe = state.recipes.find(recipe => recipe.id === id);
            
            if (recipe && day) {
                // Store the complete recipe object, not just the ID
                const mealToAdd = {
                    id: recipe.id,
                    title: recipe.title,
                    image: recipe.image,
                };
                
                // Add the recipe to the selected day
                state.mealPlan[day] = [...state.mealPlan[day], mealToAdd];
            }
        },
        removeFromMealPlan: (state, action) => {
            const { day, id } = action.payload;
            if (state.mealPlan[day]) {
                state.mealPlan[day] = state.mealPlan[day].filter(meal => meal.id !== id);
            }
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

export const { setRecipes, setMealPlan, addToMealPlan, removeFromMealPlan } = recipesSlice.actions

export const selectRecipes = (state) => state.recipes.recipes
export const selectStatus = (state) => state.recipes.status
export const selectError = (state) => state.recipes.error
export const selectMealPlan = (state) => state.recipes.mealPlan

export default recipesSlice.reducer