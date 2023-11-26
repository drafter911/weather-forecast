import React from 'react';
import { Col, Layout, Row, Space } from 'antd';
import ContentWrapper from '../ContentWrapper';
import HomeButton from './components/HomeButton';
import Menu from './components/Menu';
import SearchBar from './components/SearchBar';

const AppHeader: React.FC = (): React.JSX.Element => {
    return (
        <Layout.Header>
            <ContentWrapper>
                <Row gutter={16} wrap={false} justify='space-between' align='middle'>
                    <Col>
                        <Space>
                            <HomeButton />
                        </Space>
                    </Col>
                    <Col flex={1}>
                        <SearchBar />
                    </Col>
                    <Col>
                        <Menu />
                    </Col>
                </Row>
            </ContentWrapper>
        </Layout.Header>
    );
};

export default AppHeader;
