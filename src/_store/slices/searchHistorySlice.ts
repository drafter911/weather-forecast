import { createSlice, CreateSliceOptions } from '@reduxjs/toolkit';
import { IAction, TRootState } from 'app/types';

export interface ISearchHistoryItem {
    id: string;
    value: string;
}

export interface ISearchHistoryState {
    historyItems: ISearchHistoryItem[];
}

const initialState: ISearchHistoryState = {
    historyItems: []
};

const searchHistorySlice = createSlice({
    name: 'searchHistorySlice',
    initialState,
    reducers: {
        addSearchHistoryItem: (state: ISearchHistoryState, action: IAction<ISearchHistoryItem>) => ({
            ...state,
            historyItems: [action.payload, ...state.historyItems]
        }),
        removeSearchHistoryItems: (state: ISearchHistoryState, action: IAction<string[]>) => ({
            ...state,
            historyItems: state.historyItems.filter((item) => !action.payload.includes(item.id))
        })
    }
} as CreateSliceOptions<ISearchHistoryState>);

export const { addSearchHistoryItem, removeSearchHistoryItems } = searchHistorySlice.actions;

export const selectSearchHistoryItems = (state: TRootState): ISearchHistoryItem[] => state.searchHistory.historyItems;

export default searchHistorySlice.reducer;
