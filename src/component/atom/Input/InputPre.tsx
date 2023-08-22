import { css, keyframes } from '@emotion/react';
import { useState } from 'react';

interface InputProps {
    value?: string;
    placeholder?: string;
    border?: true | false;
    size?: 's' | 'm' | 'l';
}

export default function InputPre({
    value = '',
    placeholder = '입력하세요',
    border = true,
    size = 'm'
}) {
    let [inputValue, setInputValue] = useState(value);

    const blink = keyframes`
        from,
        to {
            border-color: transparent;
        }
        50% {
            border-color: #222
        }
    `

    return (
        <pre
            css={css({
                
            })}
        >
            {inputValue}
            <span css={css({
                borderLeft: '4px solid #222',
                animation: `${blink} 1s ease infinite`,
            })}></span>
        </pre>
    )
}