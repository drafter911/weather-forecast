import React from 'react';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import { LEFT_INDENTS, ROUTE_PATHS } from '../../../../constants';
import Icon from '../../../Icon';

const HomeButton: React.FC = (): React.JSX.Element => (
    <Link to={ROUTE_PATHS.ROOT} style={LEFT_INDENTS.XS}>
        <Icon color='white' size='20px' component={() => <HomeOutlined />} />
    </Link>
);

export default HomeButton;
