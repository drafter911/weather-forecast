import React, { Fragment } from 'react';
import { TSpeedUnit, TTemperatureUnit } from 'app/types';
import { getUnitsSymbol, getViewValue } from './utils';

export interface IDescriptionProps {
    value: number | string;
    units?: TTemperatureUnit | TSpeedUnit;
}

const Description: React.FC<IDescriptionProps> = ({ value, units }): React.JSX.Element => {
    return (
        <Fragment>
            {getViewValue(value, units)}
            {getUnitsSymbol(units)}
        </Fragment>
    );
};

export default Description;
