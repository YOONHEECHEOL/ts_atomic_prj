import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef, useRef, useState } from "react";

interface InputProps {
    value?: string;
    placeholder?: string;
    border?: true | false;
    size?: "s" | "m" | "l";
}

export default function Input({
    value = "",
    placeholder = "입력하세요",
    border = true,
    size = "m",
}: InputProps) {
    const refObj = useRef<HTMLInputElement | any>(null);

    let [inputValue, setInputValue] = useState(value);

    const blink = keyframes`
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: #222
        }
    `;

    const InputWrap = styled.div<{ size: string; onClick: any }>(
        {
            position: "relative",
            display: "flex",
            justifyContent: "left",
            overflow: "hidden",
            width: "100%",
            minWidth: "100%",
            padding: "0 0 .2rem 0",
            borderBottom: "1px solid #222",
        },
        (props: any) => ({
            fontSize: `${props.size === "s"
                    ? "1.6rem"
                    : props.size === "m"
                        ? "2rem"
                        : props.size === "l"
                            ? "2.4rem"
                            : "2rem"
                }`,
            minHeight: `${props.size === "s"
                    ? "2rem"
                    : props.size === "m"
                        ? "2.4rem"
                        : props.size === "l"
                            ? "2.8rem"
                            : "2.4rem"
                }`,
        })
    );
    const RenderInputWrap = forwardRef((props: any, ref: any) => {
        return (
            <InputWrap size={"m"} onClick={(e: any) => ref?.current?.focus()}>
                {props?.children}
            </InputWrap>
        );
    });

    const InputArea = styled.input<{ ref: any }>({
        position: "absolute",
        top: "-4px",
        left: "0",

        display: "block",
        marginTop: "-1rem",

        borderWidth: border ? "1px" : "0px",
        borderStyle: border ? "solid" : "",
        borderColor: border ? "#222" : "#fff",
        borderRadius: border ? "0.4rem" : "0",
        borderBottom: "1px solid #222",

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
    });
    const RenderInputArea = forwardRef((props: any, ref: any) => {
        return <InputArea ref={ref} />;
    });

    const InputText = styled.span<{ t: string }>`
        display: block;
        color: #222;
    `;

    const Cursor = styled.span({
        display: "block",
        borderLeft: ".4rem solid #222",
        animation: `${blink} 1s ease infinite`,
    });

    return (
        <RenderInputWrap
            onClick={() => {
                console.log(refObj);
            }}
            size={"m"}
        >
            <RenderInputArea
                ref={refObj}
                type="text"
                value={inputValue}
                onChange={(e: any) => {
                    setInputValue(e.target.value);
                    console.log(e.target.value);
                }}
                placeholder={placeholder}
            />
            {inputValue.length === 0 ? (
                <span>{placeholder}</span>
            ) : (
                <span>{inputValue}</span>
            )}
            <Cursor></Cursor>
        </RenderInputWrap>
    );
}
