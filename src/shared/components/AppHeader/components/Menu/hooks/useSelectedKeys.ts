import { useMemo } from 'react';
import { Location, useLocation } from 'react-router-dom';
import { IMenuItem, MENU_ITEMS } from '../constants';

export const useSelectedKeys = (): string[] => {
    const location: Location = useLocation();
    return useMemo(
        () => MENU_ITEMS.map((item: IMenuItem) => item.key).filter((key: string) => location.pathname === key),
        [location.pathname]
    );
};
