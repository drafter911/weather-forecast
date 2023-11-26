import React from 'react';
import { Col, Row } from 'antd';
import WeatherInfoItem from './components/WeatherInfoItem';

interface IWeatherForecastContent {
    description: string;
    currentTemperature: number;
    minTemperature: number;
    maxTemperature: number;
    windSpeed: number;
}

const WeatherForecastContent: React.FC<IWeatherForecastContent> = ({
    description,
    currentTemperature,
    minTemperature,
    maxTemperature,
    windSpeed
}): React.JSX.Element => {
    return (
        <Row gutter={[16, 24]}>
            <Col md={12} xs={24}>
                <WeatherInfoItem title='Weather description' value={description} />
            </Col>
            <Col md={12} xs={24}>
                <WeatherInfoItem title='Current temperature' value={currentTemperature} units='celsius' />
            </Col>
            <Col md={12} xs={24}>
                <WeatherInfoItem title='Min temperature' value={minTemperature} units='celsius' />
            </Col>
            <Col md={12} xs={24}>
                <WeatherInfoItem title='Max temperature' value={maxTemperature} units='celsius' />
            </Col>
            <Col md={12} xs={24}>
                <WeatherInfoItem title='Wind speed' value={windSpeed} units='kph' />
            </Col>
        </Row>
    );
};

export default WeatherForecastContent;
