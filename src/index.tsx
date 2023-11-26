import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { IRoutes } from 'app/types';
import ErrorBoundary from './components/ErrorBoundary';
import store from './_store';
import App from './App';
import { ROUTES } from './constants';
import GlobalStyles from './globalStyles';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const router = createHashRouter([
    // HashRouter required for GitHub Pages deployment
    {
        element: <App />,
        children: ROUTES
    }
] as IRoutes<React.JSX.Element>);

root.render(
    <React.StrictMode>
        <GlobalStyles />
        <ErrorBoundary>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ErrorBoundary>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
