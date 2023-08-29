
import styled from "@emotion/styled";
import { atom, createStore, Provider, useAtom } from "jotai";
import { useAtomCallback } from 'jotai/utils';
import { useCallback, useEffect, useState } from "react";
import LoginTemplate from "../../template/LoginTemplate";

const loginStore = createStore();
export const loginId = atom('');
loginStore.set(loginId, '');

export default function LoginPage() {

    // const [id, setId] = useAtom(loginId);
    const [loginIdValue, setLoginIdValue] = useState('');

    const readLoginId = useAtomCallback(
        useCallback((get) => {
            const currVal = get(loginId);
            setLoginIdValue(currVal);
            return currVal;
        }, [])
    )

    // https://jotai.org/docs/utilities/callback
    useEffect(() => {
        const timer = setInterval(async () => {
            console.log(await readLoginId());
        }, 1000)
        return () => clearInterval(timer);
    }, [readLoginId])

    return (
        <Provider store={loginStore}>
            <>
                <LoginTemplate />
            </>
        </Provider>
    )
}