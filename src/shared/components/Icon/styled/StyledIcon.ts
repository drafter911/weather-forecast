import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import styled from 'styled-components';

interface IStyledIconProps {
    $color?: string;
    $size?: string;
    component: React.ComponentType<CustomIconComponentProps>;
    spin?: boolean;
}

export const StyledIcon = styled(Icon)<IStyledIconProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    color: ${({ $color = 'inherit' }) => $color};
    font-size: ${({ $size = 'inherit' }) => $size};
    line-height: ${({ $size = 'inherit' }) => $size};
    height: ${({ $size = 'fit-content' }) => $size};
`;
