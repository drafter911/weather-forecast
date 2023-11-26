import { getIsTemperatureUnit } from './getIsTemperatureUnit';

export const getViewValue = (value: number | string, unit?: string): number | string => {
    if (typeof value === 'string') return value;
    const isTemperatureUnit = getIsTemperatureUnit(unit);
    return isTemperatureUnit ? Math.round(value) : value;
};
