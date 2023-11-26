import React from 'react';
import { IRoutes } from 'app/types';
import InitialPage from '../components/InitialPage';
import Page404 from '../components/Page404';
import SearchHistoryPage from '../components/SearchHistoryPage';
import { ROUTE_PATHS } from '../shared/constants/routePaths';

export const ROUTES: IRoutes<React.JSX.Element> = [
    {
        path: ROUTE_PATHS.ROOT,
        element: <InitialPage />
    },
    {
        path: ROUTE_PATHS.SEARCH_HISTORY,
        element: <SearchHistoryPage />
    },
    {
        path: '*',
        element: <Page404 />
    }
];
