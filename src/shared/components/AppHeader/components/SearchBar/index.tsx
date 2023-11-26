import React, { useEffect } from 'react';
import { useMatch, useNavigate, useSearchParams } from 'react-router-dom';
import { ROUTE_PATHS } from '../../../../constants';
import { StyledInputSearch } from './styled';

const SearchBar: React.FC = (): React.JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchValue, setSearchValue] = React.useState<string>(searchParams.get('q') || '');
    const navigate = useNavigate();
    const match = useMatch(ROUTE_PATHS.ROOT);

    useEffect(() => {
        // update search value if it was changed in url
        if (searchParams.get('q') !== searchValue) {
            setSearchValue(searchParams.get('q') || '');
        }
    }, [searchParams]);

    const handleSearch = (value?: string): void => {
        if (!match) navigate('/');
        return setSearchParams({ q: value! });
    };

    return (
        <StyledInputSearch
            value={searchValue}
            placeholder='Search weather by city name'
            allowClear
            size='large'
            onSearch={handleSearch}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchValue(event.target.value)}
        />
    );
};

export default SearchBar;
