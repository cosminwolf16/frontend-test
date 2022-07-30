import { configureStore } from '@reduxjs/toolkit';
import { peopleReducer } from './reducers/peopleReducer';

export const store = configureStore({
  reducer: {
    // @ts-ignore
    people: peopleReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
