import styled from 'styled-components';

interface IStyledContentWrapperProps {
    $maxWidth?: string | number;
}

export const StyledContentWrapper = styled.div<IStyledContentWrapperProps>`
    width: 100%;
    max-width: ${({ $maxWidth = '1200px' }: IStyledContentWrapperProps): string =>
        typeof $maxWidth === 'number' ? `${$maxWidth}px` : $maxWidth};
    margin: 0 auto;
    padding: 0 16px;
`;
