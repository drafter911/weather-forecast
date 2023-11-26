import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { List, PaginationProps } from 'antd';
import { ISearchHistoryItem, selectSearchHistoryItems } from '../../../../_store';
import HistoryItem from './components/HistoryItem';

interface IHistoryList {
    idsToDelete: string[];
    handleOnRemoveButtonClick: (e: React.MouseEvent<HTMLElement>, id: string) => void;
}

const HistoryList: React.FC<IHistoryList> = ({ idsToDelete, handleOnRemoveButtonClick }): React.JSX.Element => {
    const historyItems: ISearchHistoryItem[] = useSelector(selectSearchHistoryItems);

    return (
        <List
            pagination={
                {
                    pageSize: 10,
                    position: 'bottom',
                    hideOnSinglePage: true
                } as PaginationProps
            }
            size='large'
            bordered
            dataSource={historyItems}
            renderItem={(item: ISearchHistoryItem) => (
                <HistoryItem
                    key={item.id}
                    value={item.value}
                    isRemoved={idsToDelete.includes(item.id)}
                    onClick={(e) => handleOnRemoveButtonClick(e, item.id)}
                />
            )}
        />
    );
};

export default memo(HistoryList);
