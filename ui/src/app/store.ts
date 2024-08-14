import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import favoriteReducer from '../features/favorite/favorite.slice';

export const store = configureStore({
  reducer: {
    data: favoriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
