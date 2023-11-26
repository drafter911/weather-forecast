import React from 'react';
import { UndoOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { StyledUndoButtonWrapper } from './styled';

interface IUndoButton {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
    countDownValue: number;
}

const UndoButton: React.FC<IUndoButton> = ({ onClick, countDownValue }): React.JSX.Element => {
    return (
        <StyledUndoButtonWrapper>
            <Button type='primary' size='large' title='Undo remove' icon={<UndoOutlined />} onClick={onClick}>
                <Space>
                    <span>Undo</span>
                    <span>{countDownValue}</span>
                </Space>
            </Button>
        </StyledUndoButtonWrapper>
    );
};

export default UndoButton;
