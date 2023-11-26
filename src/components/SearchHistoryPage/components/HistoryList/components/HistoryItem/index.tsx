import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, List, Typography } from 'antd';
import { StyledLink } from './styled';
import { getHistoryItemRedirectLink } from './utils';

interface IHistoryItem {
    value: string;
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    isRemoved: boolean;
}

const HistoryItem: React.FC<IHistoryItem> = ({ value, onClick, isRemoved }): React.JSX.Element | null => {
    return isRemoved ? null : (
        <List.Item>
            <StyledLink to={getHistoryItemRedirectLink(value)}>
                <Typography.Title level={5}>{value}</Typography.Title>
            </StyledLink>
            <Button title='Remove item' icon={<DeleteOutlined />} onClick={onClick} />
        </List.Item>
    );
};

export default HistoryItem;
