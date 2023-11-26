import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ContentWrapper from '../../shared/components/ContentWrapper';
import CityWeather from './components/CityWeather';
import NoData from './components/NoData';

const InitialPage: React.FC = (): React.JSX.Element => {
    const [searchParams] = useSearchParams();
    const hasQuery: boolean = searchParams.has('q');
    return <ContentWrapper>{hasQuery ? <CityWeather /> : <NoData />}</ContentWrapper>;
};

export default InitialPage;
