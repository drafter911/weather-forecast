import React from 'react';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import { StyledIcon } from './styled';

interface IIconProps {
    color?: string;
    size?: string;
    component: React.ComponentType<CustomIconComponentProps>;
    style?: React.CSSProperties;
}

const Icon: React.FC<IIconProps> = ({ color, size, component, style }): React.JSX.Element => {
    return (
        <StyledIcon $color={color} $size={size} component={component} style={style} data-testid='ut-custom-icon'>
            Dumb Icon component
        </StyledIcon>
    );
};

export default Icon;
