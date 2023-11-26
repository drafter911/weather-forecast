import React from 'react';
import { Card } from 'antd';
import Description, { IDescriptionProps } from './components/Description';

interface IWeatherInfoItemProps extends IDescriptionProps {
    title: string;
}

const WeatherInfoItem: React.FC<IWeatherInfoItemProps> = ({ title, value, units }): React.JSX.Element => {
    return <Card.Meta title={title} description={<Description value={value} units={units} />} />;
};

export default WeatherInfoItem;
