
import styled from "@emotion/styled";
import { atom, createStore, Provider, useAtom } from "jotai";
import { useAtomCallback } from 'jotai/utils';
import { useCallback, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { removeCookie, setCookie } from "../../../utils/cookieUtils";
import Area from "../../atom/Area/Area";
import Button from "../../atom/Button/Button";
import Input from "../../atom/Input/Input";
import LoginTemplate from "../../template/Login/LoginTemplate";

const loginStore = createStore();
export const loginId = atom('');
loginStore.set(loginId, '');

export default function LoginPage() {

    const [id, setId] = useAtom(loginId);
    const [loginIdValue, setLoginIdValue] = useState('');

    const nav = useNavigate();

    const readLoginId = useAtomCallback(
        useCallback((get) => {
            const currVal = get(loginId);
            setLoginIdValue(currVal);
            return currVal;
        }, [])
    )

    // https://jotai.org/docs/utilities/callback
    // useEffect(() => {
    //     const timer = setInterval(async () => {
    //         console.log(await readLoginId());
    //     }, 1000)
    //     return () => clearInterval(timer);
    // }, [readLoginId])

    return (
        <Provider store={loginStore}>
            <LoginTemplate
                loginForm={
                    <Area>
                        <Input value={id} onChange={setId} placeholder='testman@naver.com' size="l" />
                        <Button label="로그인" fill={true} context="primary" onClick={(e) => {
                            // validate fetch 필요

                            if (id === '' || id === null) {
                                return console.log('id 입력필요');
                            }
                            setCookie('loginId', id, '');
                            setCookie('isLogin', 'Y', '');
                            nav('/gsp-front/');
                        }} />
                    </Area>
                }
            />
        </Provider>
    )
}