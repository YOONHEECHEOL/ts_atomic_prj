import { useState } from "react";
import Text from "../atom/Text.tsx/Text";
import Input from "../atom/Input/Input";
import Button from "../atom/Button/Button";
import { css } from "@emotion/react";

interface LoginTemplateProps {
    children: HTMLElement[]
}

export default function LoginTemplate({
    children
}: LoginTemplateProps) {
    return(
        <div
            css={css({
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
            })}
        >
                <Text
                    size="l"
                    color="#222"
                    text="Who are you?"
                />
                <Input />
                <Button />
                <Text
                size="s"
                color="#bbb"
                text="Copyright @Geshphan project"
                />
            </div>
        )
}