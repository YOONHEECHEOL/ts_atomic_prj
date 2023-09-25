import Text from "../../atom/Text/Text";
import Input from "../../atom/Input/Input";
import FixedArea from "../../atom/Area/FixedArea";
import styled from "@emotion/styled";
import Button from "../../atom/Button/Button";
import Area from "../../atom/Area/Area";
import { useCallback, useState } from "react";
import { atom, useAtom, useAtomValue } from "jotai";
import { loginId } from "../../page/Login/LoginPage";
import { setCookie } from "../../../utils/cookieUtils";

const StyledLoginTemplate = styled.div({
    width: "100%",
});

interface LoginTemplateProps {
    loginForm?: null | JSX.Element;
}

export default function LoginTemplate({ loginForm }: LoginTemplateProps) {
    const [id, setId] = useAtom(loginId);
    // const [id, setId] = useState('');

    return (
        <StyledLoginTemplate>
            {/* header */}
            <Text
                text={"로그인할 이메일을 입력해주세요."}
                size={"m"}
                color={"#222"}
                align={"center"}
            />

            {/* loginForm */}
            {loginForm}

            {/* footer */}
            <FixedArea align={"bottom"}>
                <Text
                    text={"Copyright Geshphan project all right reserved"}
                    size={"s"}
                    color={"#222"}
                    align={"center"}
                />
            </FixedArea>
        </StyledLoginTemplate>
    );
}
