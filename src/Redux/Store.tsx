import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './Todo/TodoSlice';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
