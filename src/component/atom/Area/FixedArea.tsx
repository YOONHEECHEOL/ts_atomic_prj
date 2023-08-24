import { css } from "@emotion/react";
import { useState } from "react";

interface FixedAreaProps {
    align: "top" | "bottom";
    children: string | JSX.Element | JSX.Element[] | null;
}

export default function FixedArea({ align, children = null }: FixedAreaProps) {
    return (
        <div
            css={css({
                position: "fixed",
                top: align === "top" ? "0" : "",
                bottom: align === "bottom" ? "0" : "",
                left: "0",

                width: "100%",
                padding: "2rem 1rem",

                backgroundColor: "rgba(0,0,0,.2)",

                zIndex: "2",
            })}
        >
            {children}
        </div>
    );
}
