import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecipes } from '../../api/spoonacular';

export const fetchRecipesThunk = createAsyncThunk(
    'recipes/fetchRecipes',
    async ({ searchTerm, filters }, thunkAPI) => {
        const { data, error } = await fetchRecipes(searchTerm, filters)
        if (error) {
            return thunkAPI.rejectWithValue(error);
        }
        return data
    }
)