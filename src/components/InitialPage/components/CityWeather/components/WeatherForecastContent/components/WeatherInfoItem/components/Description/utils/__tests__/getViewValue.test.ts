import { getIsTemperatureUnit as getIsTemperatureUnitOrigin } from '../getIsTemperatureUnit';
import { getViewValue } from '../getViewValue';

jest.mock('../getIsTemperatureUnit');

const getIsTemperatureUnit = getIsTemperatureUnitOrigin as jest.MockedFunction<typeof getIsTemperatureUnitOrigin>;

getIsTemperatureUnit.mockReturnValue(false);

describe('src/components/InitialPage/components/CityWeather/components/WeatherForecastContent/components/WeatherInfoItem/components/Description/utils/getViewValue', () => {
    it('should return the same value if it is not a number', () => {
        const value = 'Text';
        const result = getViewValue(value);
        expect(result).toBe(value);
    });

    it('should return the same value if unit is not a temperature unit', () => {
        const value = 10.2;
        const unit = 'some unit';
        const result = getViewValue(value, unit);
        expect(result).toBe(value);
    });

    it('should return rounded value if unit is a temperature unit', () => {
        getIsTemperatureUnit.mockReturnValueOnce(true);
        const value = 10.5;
        const unit = 'celsius';
        const result = getViewValue(value, unit);
        expect(result).toBe(11);
    });

    it('should return the same value if unit is a temperature unit but value is not a number', () => {
        getIsTemperatureUnit.mockReturnValueOnce(true);
        const value = 'Text';
        const unit = 'celsius';
        const result = getViewValue(value, unit);
        expect(result).toBe(value);
    });
});
