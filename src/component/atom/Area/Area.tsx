import styled from "@emotion/styled";
import { ComponentProps, forwardRef } from "react";

interface AreaProps {
    children: string | JSX.Element | JSX.Element[] | null;
}

const StyledAreaAtom = styled.div({
    position: "relative",

    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignContent: "space-between",
    alignItems: "center",

    width: "100%",
    padding: "2vh 0",
})

const RefAreaAtom = forwardRef((props: ComponentProps<any>, ref) => {
    return (
        <StyledAreaAtom>
            {props?.children}
        </StyledAreaAtom>
    )
})

export default function Area({ children = null }: AreaProps) {
    return (
        <RefAreaAtom>{children}</RefAreaAtom>
    );
}
