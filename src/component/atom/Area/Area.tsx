import { css } from "@emotion/react";
import { useState } from "react";

interface AreaProps {
    children: string | JSX.Element | JSX.Element[] | null;
}

export default function Area({ children = null }: AreaProps) {
    return (
        <div
            css={css({
                position: "relative",

                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignContent: "space-between",
                alignItems: "center",

                width: "100%",
                padding: "2rem 0",
            })}
        >
            {children}
        </div>
    );
}
