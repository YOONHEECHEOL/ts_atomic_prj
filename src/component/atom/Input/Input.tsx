import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { atom, useAtom } from "jotai";
import {
    ComponentProps,
    FC,
    forwardRef,
    useEffect,
    useRef,
    useState,
} from "react";
import { loginId } from "../../page/Login/LoginPage";
import Area from "../Area/Area";
import Text, { TextProps } from "../Text/Text";

// interface Type 지정
interface StyledInputAtomProps {
    size: string | null;
    border: boolean | null;
}

// style component 생성
const StyledInputAtom = styled.input<StyledInputAtomProps>(
    // 고정적인 CSS
    {
        position: "absolute",
        top: "-60px",
        left: "0",

        display: "block",
        marginTop: "-1rem",

        // cursor 스타일
        caretColor: "transparent",

        // input 기본 스타일 초기화
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none",

        // focus 효과 초기화
        "&:focus": {
            outline: "none",
        },

        // placeholder 스타일
        "&::placeholder": {
            color: "#ddd",
        },
    },
    // 가변적인 CSS
    ({ size, border, ...props }) => ({
        fontSize: `${
            size === "s"
                ? "1.6rem"
                : size === "m"
                ? "2rem"
                : size === "l"
                ? "2.4rem"
                : "2rem"
        }`,
        minHeight: `${
            size === "s"
                ? "2rem"
                : size === "m"
                ? "2.4rem"
                : size === "l"
                ? "2.8rem"
                : "2.4rem"
        }`,
        borderWidth: border ? "1px" : "0px",
        borderStyle: border ? "solid" : "",
        borderColor: border ? "#222" : "#fff",
        borderRadius: border ? "0.4rem" : "0",
        ...props?.style,
    })
);

// ref를 위한 forwordRef로 감싼 컴포넌트
const RefInput = forwardRef((props: ComponentProps<any>, ref) => {
    return (
        <StyledInputAtom
            ref={ref}
            id={props.id}
            name={props.name}
            maxLength={props.maxlength}
            onBlur={props.onBlur}
            onChange={props.onChange}
            size={"l"}
            {...props}
        />
    );
});

const InputWrap = styled.div<{
    display?: "inline" | "block" | null;
    size?: "s" | "m" | "l";
}>(
    {
        justifyContent: "flex-start",
        overflow: "hidden",
        position: "relative",
        border: "1px solid #bbb",
        borderRadius: "0.4rem",
        padding: "0.4rem",
        width: "calc(100% - 1rem)",
    },
    (props: any) => ({
        display:
            props?.display === "inline" || !props?.display
                ? "inline-flex"
                : "flex",
        height: `${
            props?.size === "s"
                ? "2.4rem"
                : props?.size === "m"
                ? "2.8rem"
                : props?.size === "l"
                ? "3.2rem"
                : "2.4rem"
        }`,
    })
);

const blink = keyframes`
from,
to {
    border-color: transparent;
}
50% {
    border-color: #222
}
`;

const Cursor = styled.span({
    display: "block",
    height: "100%",
    borderLeft: ".6rem solid #222",
    marginLeft: ".4rem",
    animation: `${blink} 1s ease infinite`,
});

interface InputProps extends TextProps {
    value?: string;
    onChange?: any | null;
}

// state 를 가지고 있는 컴포넌트
export default function Input({
    value = "",
    onChange = null,
    ...props
}: InputProps) {
    let inputRef = useRef<any>(null);

    return (
        <Area>
            <InputWrap
                onClick={() => {
                    if (inputRef?.current) inputRef?.current?.focus();
                }}
                size={"l"}
            >
                <Text
                    text={value}
                    size={props?.size}
                    color={props?.color}
                    align={props?.align}
                    placeholder={props?.placeholder}
                />
                <RefInput
                    ref={inputRef}
                    onChange={(e: any) => onChange(e.target.value)}
                />
                <Cursor></Cursor>
            </InputWrap>
        </Area>
    );
}
