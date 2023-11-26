import React from 'react';
import { Link } from 'react-router-dom';
import { FrownOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import Icon from '../../shared/components/Icon';
import { BOTTOM_INDENTS, ROUTE_PATHS } from '../../shared/constants';
import { StyledWrapper } from './styled';

const Page404: React.FC = (): React.JSX.Element => {
    return (
        <StyledWrapper>
            <Icon size='120px' component={() => <FrownOutlined />} style={BOTTOM_INDENTS.XL} />
            <Typography.Title level={4} style={BOTTOM_INDENTS.XL}>
                Looks like you&apos;re lost
            </Typography.Title>
            <Link to={ROUTE_PATHS.ROOT}>Go to the main page</Link>
        </StyledWrapper>
    );
};

export default Page404;
