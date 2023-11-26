import { useEffect } from 'react';
import { notification } from 'antd';
import { IErrorData } from 'app/types';

export const useShowError = (error?: IErrorData): void => {
    useEffect(() => {
        if (error) {
            notification.error({ message: error?.data.error.message });
        }
    }, [error]);
};
