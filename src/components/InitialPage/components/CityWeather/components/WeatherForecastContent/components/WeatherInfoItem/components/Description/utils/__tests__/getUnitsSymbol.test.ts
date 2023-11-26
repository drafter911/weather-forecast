import { getUnitsSymbol } from '../getUnitsSymbol';

describe('src/components/InitialPage/components/CityWeather/components/WeatherForecastContent/components/WeatherInfoItem/components/Description/utils/getUnitsSymbol', () => {
    it('should return correct symbol for celsius', () => {
        expect(getUnitsSymbol('celsius')).toBe('°C');
    });

    it('should return correct symbol for fahrenheit', () => {
        expect(getUnitsSymbol('fahrenheit')).toBe('°F');
    });

    it('should return correct symbol for kph', () => {
        expect(getUnitsSymbol('kph')).toBe('km/h');
    });

    it('should return correct symbol for mph', () => {
        expect(getUnitsSymbol('mph')).toBe('m/h');
    });

    it('should return empty string for undefined', () => {
        expect(getUnitsSymbol()).toBe('');
    });
});
