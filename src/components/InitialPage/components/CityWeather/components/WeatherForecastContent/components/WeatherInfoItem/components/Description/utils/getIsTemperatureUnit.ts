import { TTemperatureUnit } from 'app/types';
import { TEMPERATURE_UNITS } from '../../../../../../../../../../../shared/constants';

export const getIsTemperatureUnit = (unit?: string): boolean =>
    Object.values(TEMPERATURE_UNITS).includes(unit as TTemperatureUnit);
