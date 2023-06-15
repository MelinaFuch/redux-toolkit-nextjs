import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import userApiReducer, { userApi } from './api/userApi';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        counterReducer,
        'userApi': userApiReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([userApi.middleware])
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch