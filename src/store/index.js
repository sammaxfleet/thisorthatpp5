import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { thisOrThatApi } from './apiSlice'
import usersReducer from './usersSlice'
export const store = configureStore({
    reducer: {
        users: usersReducer,
        // Add the generated reducer as a specific top-level slice
        [thisOrThatApi.reducerPath]: thisOrThatApi.reducer,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thisOrThatApi.middleware),
})
setupListeners(store.dispatch)