import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getFavorites } from "./favorite.api";
import { FavoriteState } from "./favorite.d"
import { RequestParam } from "../../api/api";
import { RootState } from "../../app/store";

const initialState: FavoriteState = {
    favorites: [],
    status: 'idle',
};

export const fetchFavorites = createAsyncThunk(
    'favorite/fetchFavorites',
    async (requestParam: RequestParam) => {
        const response = await getFavorites(requestParam);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavorites.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.status = 'idle';
                state.favorites = action.payload;
            })
            .addCase(fetchFavorites.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const selectFavorites = (state: RootState) => state.data.favorites;


export default favoriteSlice.reducer;
