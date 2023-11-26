import { configureStore, ConfigureStoreOptions, EnhancedStore } from '@reduxjs/toolkit';
import { weatherApi } from './sevices/weatherApi';
import searchHistoryReducer from './slices/searchHistorySlice';

const store: EnhancedStore = configureStore({
    reducer: {
        searchHistory: searchHistoryReducer,
        [weatherApi.reducerPath]: weatherApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
} as ConfigureStoreOptions);

export default store;

export * from './sevices/weatherApi';
export * from './slices/searchHistorySlice';
