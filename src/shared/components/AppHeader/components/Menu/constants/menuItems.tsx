import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTE_PATHS } from '../../../../../constants';

export interface IMenuItem {
    key: string;
    label: string | React.JSX.Element;
    icon?: React.JSX.Element | null;
}

export const MENU_ITEMS: IMenuItem[] = [
    {
        key: ROUTE_PATHS.SEARCH_HISTORY,
        label: <NavLink to={ROUTE_PATHS.SEARCH_HISTORY}>History</NavLink>
    }
];
