import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IErrorData, IWeatherData } from 'app/types';
import { WEATHER_API_KEY, WEATHER_API_URL } from '../../shared/constants';

export interface IGetWeatherByCityQuery {
    data?: IWeatherData;
    error?: IErrorData;
    isLoading: boolean;
}

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: WEATHER_API_URL }),
    endpoints: (builder) => ({
        getWeatherByCity: builder.query<IWeatherData, string>({
            query: (city) =>
                `?${new URLSearchParams({
                    key: WEATHER_API_KEY,
                    q: city
                }).toString()}`
        })
    })
});

export const { useGetWeatherByCityQuery, useLazyGetWeatherByCityQuery } = weatherApi;
