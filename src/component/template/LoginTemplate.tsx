import { useState } from "react";
import Text from "../atom/Text.tsx/Text";
import Input from "../atom/Input/Input";
import Button from "../atom/Button/Button";
import { css } from "@emotion/react";
import Layout from "../atom/Layout/Layout";
import Area from "../atom/Area/Area";
import FixedArea from "../atom/Area/FixedArea";

interface LoginTemplateProps {
    children?: HTMLElement | HTMLElement[] | JSX.Element | JSX.Element[];
}

export default function LoginTemplate({ children }: LoginTemplateProps) {
    return (
        <div css={css({})}>
            <Layout>
                <Area>
                    <Text size="l" color="#222" text="Who are you?" />
                    <Input />
                    <Button
                        size="l"
                        border={true}
                        fill={true}
                        context="primary"
                        label="입력"
                    />
                    <Area>Copyright @Geshphan project</Area>
                </Area>
                <FixedArea align="bottom">
                    Copyright @Geshphan project
                </FixedArea>
            </Layout>
        </div>
    );
}
