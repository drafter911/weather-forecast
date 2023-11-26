import { ROUTE_PATHS } from '../../../../../../../shared/constants';

export const getHistoryItemRedirectLink = (searchValue: string): string =>
    `${ROUTE_PATHS.ROOT}?${new URLSearchParams({
        q: searchValue.trim()
    }).toString()}`;
