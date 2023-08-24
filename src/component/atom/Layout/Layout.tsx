import { css } from "@emotion/react";
import { useState } from "react";

interface LayoutProps {
    children?: string | JSX.Element | JSX.Element[] | null;
}

export default function Layout({ children = null }: LayoutProps) {
    return (
        <span
            css={css({
                position: "relative",
                overflowY: "scroll",
                overflowX: "hidden",
                width: "100%",
                height: "100%",

                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignContent: "space-between",
                alignItems: "stretch",
            })}
        >
            {children}
        </span>
    );
}
