import React from 'react';
import { Menu as AntdMenu } from 'antd';
import { MENU_ITEMS } from './constants';
import { useSelectedKeys } from './hooks';

const Menu: React.FC = (): React.JSX.Element => {
    const selectedKeys: string[] = useSelectedKeys();
    return <AntdMenu selectedKeys={selectedKeys} theme='dark' mode='horizontal' items={MENU_ITEMS} />;
};

export default Menu;
