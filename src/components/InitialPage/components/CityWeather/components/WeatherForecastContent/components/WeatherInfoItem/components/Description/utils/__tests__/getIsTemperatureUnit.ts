import { getIsTemperatureUnit } from '../getIsTemperatureUnit';

describe('src/components/InitialPage/components/CityWeather/components/WeatherForecastContent/components/WeatherInfoItem/components/Description/utils/getIsTemperatureUnit', () => {
    it('should return true when unit is celsius', () => {
        const result: boolean = getIsTemperatureUnit('celsius');
        expect(result).toBe(true);
    });

    it('should return true when unit is fahrenheit', () => {
        const result: boolean = getIsTemperatureUnit('fahrenheit');
        expect(result).toBe(true);
    });

    it('should return false when unit is not celsius or fahrenheit', () => {
        const result: boolean = getIsTemperatureUnit('kelvin');
        expect(result).toBe(false);
    });
});
