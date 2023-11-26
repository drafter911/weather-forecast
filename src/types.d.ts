declare module 'app/types' {
    import store from './_store';

    export type TRootState = ReturnType<typeof store.getState>;

    export interface IAction<T> {
        type: string;
        payload: T;
    }
    export interface IRoute<T> {
        path?: string;
        element: T;
        children?: IRoute<T>[];
        exact?: boolean;
    }

    export type IRoutes<T> = IRoute<T>[];

    export type TSearchInputSource = 'input' | 'clear';

    export interface ISearchInputOnSearchCallbackInfo {
        source?: TSearchInputSource;
    }

    export interface IWeatherCondition {
        code: number;
        icon: string;
        text: string;
    }

    export interface IWeatherCurrent {
        cloud: number;
        condition: IWeatherCondition;
        feelslike_c: number;
        feelslike_f: number;
        gust_kph: number;
        gust_mph: number;
        humidity: number;
        is_day: number;
        last_updated: string;
        last_updated_epoch: number;
        precip_in: number;
        precip_mm: number;
        pressure_in: number;
        pressure_mb: number;
        temp_c: number;
        temp_f: number;
        uv: number;
        vis_km: number;
        vis_miles: number;
        wind_degree: number;
        wind_dir: string;
        wind_kph: number;
        wind_mph: number;
    }

    export interface IWeatherLocation {
        country: string;
        lat: number;
        localtime: string;
        localtime_epoch: number;
        lon: number;
        name: string;
        region: string;
        tz_id: string;
    }

    export interface IForecastDay {
        day: {
            maxtemp_c: number;
            maxtemp_f: number;
            mintemp_c: number;
            mintemp_f: number;
            condition: IWeatherCondition;
        };
    }

    export interface IWeatherData {
        current: IWeatherCurrent;
        location: IWeatherLocation;
        forecast: {
            forecastday: IForecastDay[];
        };
    }

    export interface IError {
        code: number;
        message: string;
    }

    export interface IErrorData {
        data: {
            error: IError;
        };
        status: number;
    }

    export type TTemperatureUnit = 'celsius' | 'fahrenheit';

    export type TSpeedUnit = 'kph' | 'mph';
}

declare module 'app/types/styled' {
    export type TFlexDirection = 'row' | 'column';
    export type TFlexWrap = 'nowrap' | 'wrap';
    export type TJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    export type TAlignItems = 'flex-start' | 'center' | 'flex-end';
    export type TAlignContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    export type TAlignSelf = 'flex-start' | 'center' | 'flex-end';
    export type TTextAlign = 'left' | 'center' | 'right' | 'justify';
}
