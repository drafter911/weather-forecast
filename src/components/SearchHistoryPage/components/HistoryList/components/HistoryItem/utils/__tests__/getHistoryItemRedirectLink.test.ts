import { getHistoryItemRedirectLink } from '../getHistoryItemRedirectLink';

describe('src/components/SearchHistoryPage/components/HistoryList/components/HistoryItem/utils/getHistoryItemRedirectLink', () => {
    it('should return correct link with defined search value (one word)', () => {
        const searchValue = 'test';
        const expected = `/?q=${searchValue}`;

        expect(getHistoryItemRedirectLink(searchValue)).toBe(expected);
    });

    it('should return correct link with defined search value (space before and after word)', () => {
        const searchValue = ' test ';
        const expected = '/?q=test';

        expect(getHistoryItemRedirectLink(searchValue)).toBe(expected);
    });

    it('should return correct link with defined search value (many words with spaces)', () => {
        const searchValue = 'test test';
        const expected = '/?q=test+test';

        expect(getHistoryItemRedirectLink(searchValue)).toBe(expected);
    });

    it('should return correct link with defined search value (many words with spaces and special characters)', () => {
        const searchValue = 'test, test! test.&test';
        const expected = '/?q=test%2C+test%21+test.%26test';

        expect(getHistoryItemRedirectLink(searchValue)).toBe(expected);
    });
});
