import * as React from 'react';
import { css } from '@emotion/react';

interface TestBoxProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label?: string;
    onClick?: () => void;
}

export const TestBox = ({primary, backgroundColor, size, label}: TestBoxProps) => {
    return (
            <div
                css={css({
                    backgroundColor: backgroundColor ? backgroundColor : 'black',
                    width: '200px',
                    height: '45px',
                })}
            >
                {label}
            </div>
        )
}
