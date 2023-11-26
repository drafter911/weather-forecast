import { TSpeedUnit, TTemperatureUnit } from 'app/types';

export const getUnitsSymbol = (units?: TTemperatureUnit | TSpeedUnit): string => {
    switch (units) {
        case 'celsius':
            return '°C';
        case 'fahrenheit':
            return '°F';
        case 'kph':
            return 'km/h';
        case 'mph':
            return 'm/h';
        default:
            return '';
    }
};
