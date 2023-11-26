import React from 'react';
import { Col, Image, Row, Typography } from 'antd';
import { StyledTitleWrapper } from './styled';

interface ITitleProps {
    city: string;
    country: string;
    image: string;
}

const Title: React.FC<ITitleProps> = ({ city, country, image }): React.JSX.Element => {
    return (
        <StyledTitleWrapper>
            <Row gutter={32} align='middle' justify='center'>
                <Col>
                    <Typography.Title level={3}>
                        {city}, {country}
                    </Typography.Title>
                </Col>
                <Col>
                    <Image width={64} src={image} />
                </Col>
            </Row>
        </StyledTitleWrapper>
    );
};

export default Title;
