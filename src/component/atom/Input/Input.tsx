import { css, keyframes } from '@emotion/react';
import {  useRef, useState } from 'react';

interface InputProps {
    value?: string;
    placeholder?: string;
    border?: true | false;
    size?: 's' | 'm' | 'l';
}

export default function Input({
    value = '',
    placeholder = '입력하세요',
    border = true,
    size = 'm',
}: InputProps) {

    const refObj = useRef<HTMLInputElement>(null);

    let [inputValue, setInputValue] = useState(value);

    // useEffect(() => {
    //     return inputRef.current.focus();
    // }, [])

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
        <div
            css={css({
                position: 'relative',
                display: 'flex',
                justifyContent: 'left',
                fontSize: `${size === 's' ?
                    '1.6rem' : size === 'm' ?
                        '2rem' : size === 'l' ?
                            '2.4rem' : '2rem'}`,
                overflow: 'hidden',

                width: '100%',
                minWidth: '100%',
                minHeight: `${size === 's' ?
                    '2rem' : size === 'm' ?
                        '2.4rem' : size === 'l' ?
                            '2.8rem' : '2.4rem'}`,
                padding: '0 0 .2rem 0',

                borderBottom: '1px solid #222',
            })}
            onClick={() => {
                console.log(refObj)
                refObj?.current?.focus();
            }}
        >
            <input
                ref={refObj}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
                css={css({
                    position: 'absolute',
                    top: '-4px',
                    left: '0',

                    display: 'block',
                    marginTop: '-1rem',

                    borderWidth: border ? '1px' : '0px',
                    borderStyle: border ? 'solid' : '',
                    borderColor: border ? '#222' : '#fff',
                    borderRadius: border ? '0.4rem' : '0',
                    borderBottom: '1px solid #222',

                    // cursor 스타일
                    caretColor: 'transparent',

                    // input 기본 스타일 초기화
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    appearance: 'none',

                    // focus 효과 초기화
                    '&:focus': {
                        outline: 'none',
                    },

                    // placeholder 스타일
                    '&::placeholder': {
                        color: '#ddd'
                    }
                })}
            />
            {
                inputValue.length === 0 ?
                    <span
                        css={css({
                            display: 'block',

                            // borderWidth: border ? '1px' : '0px',
                            // borderStyle: border ? 'solid' : '',
                            // borderColor: border ? '#ddd' : '#fff',
                            // borderRadius: border ? '0.4rem' : '0',
                            // borderBottom: '1px solid #222',

                            color: '#ddd'
                        })}
                    >{placeholder}</span>
                    : <span
                        css={css({
                            display: 'block',

                            // borderWidth: border ? '1px' : '0px',
                            // borderStyle: border ? 'solid' : '',
                            // borderColor: border ? '#222' : '#fff',
                            // borderRadius: border ? '0.4rem' : '0',
                            // borderBottom: '1px solid #222',

                            color: '#222'
                        })}
                    >{inputValue}</span>
            }        
            <span css={css({
                display: 'block',
                borderLeft: '.4rem solid #222',
                animation: `${blink} 1s ease infinite`,
            })}></span>
        </div>
    )
}