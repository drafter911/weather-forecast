import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import {
    addSearchHistoryItem,
    IGetWeatherByCityQuery,
    ISearchHistoryItem,
    useGetWeatherByCityQuery
} from '../../../../../_store';

export const useSaveSearchedLocationToHistory = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    const query = searchParams.get('q');
    const { data, error, isLoading } = useGetWeatherByCityQuery<IGetWeatherByCityQuery>(query!);

    useEffect(() => {
        if (data && !error && !isLoading) {
            dispatch(
                addSearchHistoryItem({
                    value: `${data.location.name}, ${data.location.country}`,
                    id: Date.now().toString()
                } as ISearchHistoryItem)
            );
        }
    }, [data]);
};
