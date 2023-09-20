import { atom, createStore, Provider, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../../utils/cookieUtils";
import Area from "../../atom/Area/Area";
import Button from "../../atom/Button/Button";
import Input from "../../atom/Input/Input";
import LoginTemplate from "../../template/Login/LoginTemplate";

const loginStore = createStore();
export const loginId = atom("");
loginStore.set(loginId, "");

export default function LoginPage() {
    const [id, setId] = useAtom(loginId);
    const [isIdValidate, setIsIdValidated] = useState(false);

    const nav = useNavigate();

    useEffect(() => {
        // id input init
        setId('');
    }, [])

    useEffect(() => {
        const loginId = getCookie("loginId");
        const isLogin = getCookie("isLogin");

        if (!loginId || !isLogin) return;
        setCookie("loginId", '', "");
        setCookie("isLogin", "N", "");
    }, [])

    const handleValidateEmailForm = (email: string) => {
        // null 체크
        if (email === "" || email === null) return false;

        // email 형식 체크
        const splitAlphaVal = email.split('@');
        const splitDotVal = email.split('.');

        if (splitAlphaVal.length !== 2 || splitAlphaVal[1] === '') return false;
        if (splitDotVal.length !== 2 || splitDotVal[1] === '') return false;

        const validateRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return validateRegex.test(email);
    }

    const setCookieByPromise = (id: string) => {
        return new Promise((res, rej) => {
            setCookie("loginId", id, "");
            setCookie("isLogin", "Y", "");

            res('Y');
        });
    }

    return (
        <Provider store={loginStore}>
            <LoginTemplate
                loginForm={
                    <Area>
                        <Input
                            value={id}
                            onChange={(val: string) => {
                                setId(val);
                                const isValidated = handleValidateEmailForm(val);
                                if (isValidated) setIsIdValidated(true);
                            }}
                            placeholder="testman@naver.com"
                            size="l"
                        />
                        <Button
                            label="로그인"
                            fill={true}
                            context={isIdValidate ? "primary" : 'disabled'}
                            onClick={async (e) => {
                                if (isIdValidate) {
                                    // validate fetch 필요                                   

                                    await setCookieByPromise(id).then(res => {
                                        debugger;
                                        if (res === 'Y') return nav('/gsp-front/');
                                    });
                                }
                            }}
                        />
                    </Area>
                }
            />
        </Provider>
    );
}
