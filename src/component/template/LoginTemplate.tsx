import Text from "../atom/Text/Text";
import Input from "../atom/Input/Input";
import FixedArea from "../atom/Area/FixedArea";
import styled from "@emotion/styled";
import Button from "../atom/Button/Button";
import Area from "../atom/Area/Area";
import { useCallback, useState } from "react";
import { atom, useAtom, useAtomValue } from "jotai";
import { loginId } from "../page/Login/LoginPage";

const StyledLoginTemplate = styled.div({
    width: '100%',
});

export default function LoginTemplate() {
    const [id, setId] = useAtom(loginId);
    // const [id, setId] = useState('');

    return (
        <StyledLoginTemplate>
            <Text text={"Who are you?"} size={"l"} color={""} align={"center"} />
            <Text text={"로그인할 이메일을 입력해주세요."} size={"s"} color={"#999"} align={"center"} />
            <Area>
                <Input value={id} onChange={setId} placeholder='testman@naver.com' size="l" />
                <Button label="로그인" fill={true} context="primary" onClick={(e) => { }} />
            </Area>
            <FixedArea align={"bottom"}>
                <Text text={"Copyright Geshphan project all right reserved"} size={"s"} color={"#222"} align={"center"} />
            </FixedArea>
        </StyledLoginTemplate>
    );
}