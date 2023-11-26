import React, { Fragment } from 'react';
import { Empty } from 'antd';
import { BOTTOM_INDENTS } from '../../../../shared/constants';

const NoData: React.FC = (): React.JSX.Element => {
    return (
        <Empty
            description={
                <Fragment>
                    <div style={BOTTOM_INDENTS.S}>Not found</div>
                    <div>Please use the search function to find the weather forecast for a specific city.</div>
                </Fragment>
            }
        />
    );
};

export default NoData;
