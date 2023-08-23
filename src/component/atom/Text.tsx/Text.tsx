import { css } from "@emotion/react";
import { useState } from "react";

interface TextProps {
    text: string;
    size: 's' | 'm' | 'l';
    color: string;
}

export default function Text({
    text = '',
    size = 's',
    color = '#222'
}: TextProps) {

    return (
        <span
            css={css({
                color: color,
                fontSize: `${size === 's' ?
                    '1.6rem' : size === 'm' ?
                        '2rem' : size === 'l' ?
                            '2.4rem' : '2rem'}`,
            })}
        >{text}</span>
    )
}