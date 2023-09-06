import styled from "@emotion/styled";
import { ComponentProps, forwardRef, useEffect, useRef, useState } from "react";

// interface Type 지정
interface InputWrapProps {
    size: string | null;
}

// style component 생성
const InputWrap = styled.input<InputWrapProps>(
    // 고정적인 CSS
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
    // 가변적인 CSS
    (props: any) => ({
        fontSize: `${
            props.size === "s"
                ? "1.6rem"
                : props.size === "m"
                ? "2rem"
                : props.size === "l"
                ? "2.4rem"
                : "2rem"
        }`,
        minHeight: `${
            props.size === "s"
                ? "2rem"
                : props.size === "m"
                ? "2.4rem"
                : props.size === "l"
                ? "2.8rem"
                : "2.4rem"
        }`,
    })
);

// ref를 위한 forwordRef로 감싼 컴포넌트
const InputTest = forwardRef((props: ComponentProps<any>, ref) => {
    return (
        <InputWrap
            ref={ref}
            id={props.id}
            name={props.name}
            autoComplete={"off"}
            maxLength={props.maxlength}
            onBlur={props.onBlur}
            onChange={props.onChange}
            style={{ width: "100px" }}
            size={"l"}
            {...props}
        />
    );
});
export default InputTest;

// state 를 가지고 있는 컴포넌트
export const TestInput = () => {
    let [isOk, setIsOk] = useState("");
    let testRef = useRef<any>(null);

    useEffect(() => {
        console.log(isOk);
    }, [isOk]);

    return (
        <div
            onClick={() => {
                if (testRef?.current) testRef.current?.focus();
            }}
        >
            <span>123</span>
            <br />
            <br />
            <br />
            <br />
            <br />
            <InputTest
                ref={testRef}
                onChange={(e: any) => setIsOk(e.target.value)}
            />
            {/* <InputWrap /> */}
        </div>
    );
};
