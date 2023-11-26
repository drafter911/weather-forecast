import React from 'react';
import { StyledContentWrapper } from './styled/StyledContentWrapper';

interface IContentWrapperProps {
    children: React.ReactNode;
    maxWidth?: string | number;
}

const ContentWrapper: React.FC<IContentWrapperProps> = ({ children, maxWidth }): React.JSX.Element => {
    return <StyledContentWrapper $maxWidth={maxWidth}>{children}</StyledContentWrapper>;
};

export default ContentWrapper;
