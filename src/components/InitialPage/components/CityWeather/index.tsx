import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from 'antd';
import { IGetWeatherByCityQuery, useGetWeatherByCityQuery } from '../../../../_store';
import NoData from '../NoData';
import Title from './components/Title';
import WeatherForecastContent from './components/WeatherForecastContent';
import { useSaveSearchedLocationToHistory, useShowError } from './hooks';

const CityWeather: React.FC = (): React.JSX.Element => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const { data, error, isLoading } = useGetWeatherByCityQuery<IGetWeatherByCityQuery>(query!);

    useShowError(error);
    useSaveSearchedLocationToHistory();

    if (isLoading) return <div>loading...</div>;

    return data ? (
        <Card
            title={
                <Title
                    city={data.location.name!}
                    country={data.location.country!}
                    image={data.forecast.forecastday[0].day.condition.icon!}
                />
            }
        >
            <WeatherForecastContent
                description={data.forecast.forecastday[0].day.condition.text}
                currentTemperature={data.current.temp_c}
                minTemperature={data.forecast.forecastday[0].day.mintemp_c}
                maxTemperature={data.forecast.forecastday[0].day.maxtemp_c}
                windSpeed={data.current.wind_kph}
            />
        </Card>
    ) : (
        <NoData />
    );
};

export default CityWeather;
