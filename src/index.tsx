/** @jsxImportSource @emotion/react */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Global } from '@emotion/react';
import { reset } from './style/reset';
import { createBrowserRouter, Link, Navigate, redirect, Route, RouterProvider, Routes } from 'react-router-dom';
import ErrorPage from './component/page/ErrorPage/ErrorPage';
import { getCookie } from './utils/cookieUtils';
import LoginTemplate from './component/template/LoginTemplate';
import styled from '@emotion/styled';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const ROOT_PATH = "gsp-front";

const authCheck = (children: any) => {

    const Test = styled.div({ display: 'flex', justifyContent: 'right', flexDirection: 'column', alignItems: 'center' })

    const isLogin = getCookie('isLogin');
    if (isLogin !== 'Y')
        return (
            <Navigate to={'/login'} replace={false} />
        )
    else
        return (
            <div>
                <Test>
                    <span style={{ width: '300px' }}>
                        {children}
                    </span>
                </Test>
            </div>
        )
}

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
    },
    {
        path: ROOT_PATH + "/",
        element: authCheck(<div>Hello! / <Link to="1234">Check</Link></div>),
    },
    {
        path: ROOT_PATH + "/App",
        element: <App />,
    },
    {
        path: "/login",
        element: <LoginTemplate><div>123</div></LoginTemplate>
    },
]);

root.render(
    <React.StrictMode>
        {/* React-query provider */}
        <QueryClientProvider client={queryClient}>
            {/* emotion Global CSS */}
            <Global styles={reset} />
            {/* react-router-dom provider */}
            <RouterProvider router={router} fallbackElement={null} />
        </QueryClientProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
