/** @jsxImportSource @emotion/react */
import React, {
    createContext,
    FC,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Global } from "@emotion/react";
import { reset } from "./style/reset";
import {
    createBrowserRouter,
    Link,
    Navigate,
    redirect,
    Route,
    RouterProvider,
    Routes,
    useLocation,
    useNavigate,
} from "react-router-dom";
import ErrorPage from "./component/page/Error/ErrorPage";
import { getCookie, setCookie } from "./utils/cookieUtils";
import LoginTemplate from "./component/template/Login/LoginTemplate";
import styled from "@emotion/styled";
import Button from "./component/atom/Button/Button";
import InputTest, { TestInput } from "./component/atom/Input/InputTest";
import LoginPage from "./component/page/Login/LoginPage";
import { Provider } from "jotai";
import TodoListPage from "./component/page/Todo/TodoListPage";
import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const ROOT_PATH = "gsp-front";

const ContainerWrap = styled.div({
    width: "100%",
    height: "100vh",
    margin: "0",
    padding: "0",
});

const Container = styled.div({
    position: 'relative',
    maxWidth: "1240px",
    minWidth: "320px",
    width: "calc(100% - 4vw)",
    margin: "0 auto",
    padding: "2vh 2vw",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
});

const authCheck = (children: any) => {
    // 로그인 시 세션 체크 로직 생성

    const LOGIN_URL = ROOT_PATH + "/login";

    const isLogin = getCookie("isLogin");
    const loginId = getCookie("loginId");
    console.log(isLogin);
    console.log(loginId);

    // 값이 없을 경우 추가
    if (!isLogin) setCookie("isLogin", "N", "");
    if (!loginId) setCookie("loginId", "", "");

    if (isLogin === "N" || loginId === "") redirect(LOGIN_URL);

    return (
        <ContainerWrap>
            <Container>
                <>{children}</>
            </Container>
        </ContainerWrap>
    );
};

const routerData = [
    {
        path: "/",
        errorElement: <ErrorPage />,
        withAuth: false,
    },
    {
        path: ROOT_PATH + "/login",
        element: <LoginPage />,
        withAuth: false,
    },
    {
        // todo list
        path: ROOT_PATH + "/",
        element: <TodoListPage />,
        withAuth: true,
    },
];

// https://velog.io/@kmh060020/CreateBrowserRouter%EC%99%80-%ED%9A%A1%EB%8B%A8-%EA%B4%80%EC%8B%AC%EC%82%AC
interface AuthGuardLayoutProps {
    children:
    | EmotionJSX.Element
    | EmotionJSX.Element[]
    | JSX.Element
    | JSX.Element[]
    | null;
}
const AuthGuardLayout: FC<AuthGuardLayoutProps> = ({ children }) => {
    const [userProfile, setUserProfile] = useState<string | null>(null);
    const nav = useNavigate();

    // https://hayeondev.gatsbyjs.io/230202-usememo-and-usecallback/
    const fetchUserProfile = useCallback(() => {
        const isLogin = getCookie("isLogin");

        // auth validate logic
        const userProfileResponse = isLogin;

        if (userProfileResponse !== 'Y') {
            nav("/gsp-front/login");
            return;
        }
        setUserProfile(userProfileResponse);
    }, [nav, setUserProfile]);

    useEffect(() => {
        fetchUserProfile();
    }, [fetchUserProfile, nav]);

    if (userProfile === null) return <></>;

    return userProfile ? <>{children}</> : <Navigate to={"/gsp-front/login"} />;
};

const router = createBrowserRouter(
    routerData.map((route) => {
        if (route.withAuth) {
            return {
                path: route.path,
                element: (
                    <AuthGuardLayout>
                        {route.element ? route.element : <></>}
                    </AuthGuardLayout>
                ),
            };
        } else {
            return {
                path: route.path,
                element: route.element,
            };
        }
    })
);

root.render(
    <>
        {/* React-query provider */}
        <Provider>
            <QueryClientProvider client={queryClient}>
                {/* emotion Global CSS */}
                <Global styles={reset} />
                {/* react-router-dom provider */}
                <ContainerWrap>
                    <Container>
                        <RouterProvider
                            router={router}
                            fallbackElement={null}
                        />
                    </Container>
                </ContainerWrap>
            </QueryClientProvider>
        </Provider>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
