import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import AppHeader from './shared/components/AppHeader';

function App() {
    return (
        <Layout>
            <AppHeader />
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    );
}

export default App;
