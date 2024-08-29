import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import moodReducer from '../features/moodSlice';

const rootReducer = combineReducers({
  mood: moodReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
