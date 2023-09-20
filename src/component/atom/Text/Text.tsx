import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

interface StyledTextAtomProps {
    size?: 's' | 'm' | 'l' | string;
    color?: string;
    align?: 'left' | 'center' | 'right';
}

const StyledTextAtom = styled.div<StyledTextAtomProps>({
    padding: '0.5vh 0.5vw'
},
    ({ size, color, align }) => ({
        color: color,
        fontSize: `${size === 's' ?
            '1.6rem' : size === 'm' ?
                '2rem' : size === 'l' ?
                    '2.4rem' : size}`,
        textAlign: `${align === 'left' ?
            'left' : align === 'center' ?
                'center' : align === 'right' ?
                    'right' : 'left'}`,
    })
)

export interface TextProps {
    text?: string;
    size?: 's' | 'm' | 'l' | string;
    color?: string;
    align?: 'left' | 'center' | 'right';
    placeholder?: string | null;
}

export default function Text({
    text = '',
    size = 's',
    color = '#222',
    align = 'left',
    placeholder = '',
}: TextProps) {
    const isText = text?.length > 0;

    return (
        <StyledTextAtom size={size} color={isText ? color : '#bbb'} align={align}>
            {
                isText ?
                    text : placeholder
            }
        </StyledTextAtom>
    )
}