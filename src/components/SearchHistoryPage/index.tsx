import React, { Reducer, useCallback, useEffect, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Typography } from 'antd';
import { IAction } from 'app/types';
import { removeSearchHistoryItems } from '../../_store';
import ContentWrapper from '../../shared/components/ContentWrapper';
import { useCountDown } from '../../shared/hooks';
import HistoryList from './components/HistoryList';
import UndoButton from './components/UndoButton';

const reducer = (state: string[], action: IAction<string | undefined>): string[] => {
    switch (action.type) {
        case 'add':
            return [...state, action.payload! as string];
        case 'removeAll':
            return [];
        default:
            return state;
    }
};

const SearchHistoryPage: React.FC = (): React.JSX.Element => {
    const [idsToDelete, dispatchIdsToDeleteAction] = useReducer<Reducer<string[], IAction<string | undefined>>>(
        reducer,
        []
    );
    const dispatch = useDispatch();
    const [countDownValue, setCountDownValue] = useCountDown(0);

    useEffect(() => {
        // remove history items after 5 seconds if user doesn't undo
        if (countDownValue === 0 && idsToDelete.length > 0) {
            dispatch(removeSearchHistoryItems(idsToDelete as string[]));
        }
    }, [countDownValue, dispatch]);

    const handleRemoveHistoryItem = useCallback(
        (e: React.MouseEvent<HTMLElement>, id: string): void => {
            e.preventDefault();
            setCountDownValue(5);
            dispatchIdsToDeleteAction({ type: 'add', payload: id } as IAction<string>);
        },
        [setCountDownValue, dispatchIdsToDeleteAction]
    );

    const undoRemoveHistoryItem = useCallback(
        (e: React.MouseEvent<HTMLElement>): void => {
            e.preventDefault();
            setCountDownValue(0);
            dispatchIdsToDeleteAction({ type: 'removeAll' } as IAction<undefined>);
        },
        [dispatchIdsToDeleteAction, setCountDownValue]
    );

    return (
        <ContentWrapper maxWidth={860}>
            <Typography.Title level={2}>Search History</Typography.Title>
            {countDownValue > 0 && <UndoButton countDownValue={countDownValue} onClick={undoRemoveHistoryItem} />}
            <HistoryList idsToDelete={idsToDelete} handleOnRemoveButtonClick={handleRemoveHistoryItem} />
        </ContentWrapper>
    );
};

export default SearchHistoryPage;
