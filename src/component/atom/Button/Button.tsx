import { css } from '@emotion/react';
import styled from '@emotion/styled';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { MQ } from '../../../style/responsiveWebCss';

interface ButtonProps {
    size?: 's' | 'm' | 'l';
    label?: string;
    context?: 'disabled' | 'primary' | 'danger' | 'success' | 'warning';
    fill?: true | false;
    border?: true | false;
    onClick?: (e: React.MouseEvent) => void;
}

export default function Button({
    size = 'm',
    label = 'Button',
    context = 'disabled',
    fill = false,
    border = false,
    onClick
}: ButtonProps) {

    const BTN_COLOR = {
        color: {
            disabled: fill ? '#fff' : '#666',
            primary: fill ? '#fff' : '#007bff',
            danger: fill ? '#fff' : '#dc3545',
            success: fill ? '#fff' : '#28a745',
            warning: fill ? '#fff' : '#ffc107'
        },
        backgroundColor: {
            disabled: fill ? '#b6b6b6' : '#fff',
            primary: fill ? '#007bff' : '#fff',
            danger: fill ? '#dc3545' : '#fff',
            success: fill ? '#28a745' : '#fff',
            warning: fill ? '#ffc107' : '#fff'
        },
        border: {
            disabled: '#b6b6b6',
            primary: '#007bff',
            danger: '#dc3545',
            success: '#28a745',
            warning: '#ffc107'
        },
        hover: {
            color: {
                disabled: fill ? '#fff' : '#444',
                primary: fill ? '#fff' : '#005bbc',
                danger: fill ? '#fff' : '#d92032',
                success: fill ? '#fff' : '#208d39',
                warning: fill ? '#fff' : '#d5a001'
            },
            backgroundColor: {
                disabled: fill ? '#6d6d6d' : '#fff',
                primary: fill ? '#005bbc' : '#fff',
                danger: fill ? '#d92032' : '#fff',
                success: fill ? '#208d39' : '#fff',
                warning: fill ? '#d5a001' : '#fff'
            },
            border: {
                disabled: '#6d6d6d',
                primary: '#005bbc',
                danger: '#d92032',
                success: '#208d39',
                warning: '#d5a001'
            },
        }
    }

    const Button = styled.button({
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        borderWidth: border || fill ? '1px' : '0px',
        borderColor: BTN_COLOR.border[context],
        borderStyle: 'solid',
        cursor: 'pointer',
        transition: '.4s background-color ease',
        backgroundColor: BTN_COLOR.backgroundColor[context],
        color: BTN_COLOR.color[context],
        '&:hover': {
            borderColor: BTN_COLOR.hover.border[context],
            backgroundColor: BTN_COLOR.hover.backgroundColor[context],
            color: BTN_COLOR.hover.color[context],
        },
        [MQ[0]]: {
            // maxWidth: label?.length ? label.length * 4 + 'rem' : '100%',
            padding: `${size === 's' ?
                '0.4rem 0.6rem' : size === 'm' ?
                    '0.6rem 0.8rem' : size === 'l' ?
                        '0.8rem 1rem' : '0.6rem 0.8rem'}`,
            margin: `${size === 's' ?
                '0.1rem 0' : size === 'm' ?
                    '0.2rem 0' : size === 'l' ?
                        '0.3rem 0' : '0.2rem 0'}`,
            borderRadius: '.4rem',
            fontSize: `${size === 's' ?
                '1.2rem' : size === 'm' ?
                    '1.6rem' : size === 'l' ?
                        '2rem' : '1.6rem'}`,
        },
        [MQ[1]]: {
            padding: `${size === 's' ?
                '0.6rem 1.6rem' : size === 'm' ?
                    '1rem 2rem' : size === 'l' ?
                        '1.4rem 2.4rem' : '1rem 2rem'}`,
            margin: `${size === 's' ?
                '0.1rem 0' : size === 'm' ?
                    '0.2rem 0' : size === 'l' ?
                        '0.3rem 0' : '0.2rem 0'}`,
            borderRadius: '.4rem',
            fontSize: `${size === 's' ?
                '1.2rem' : size === 'm' ?
                    '1.6rem' : size === 'l' ?
                        '2rem' : '1.6rem'}`,
        },
        [MQ[2]]: {
            padding: `${size === 's' ?
                '0.6rem 1.6rem' : size === 'm' ?
                    '1rem 2rem' : size === 'l' ?
                        '1.4rem 2.4rem' : '1rem 2rem'}`,
            margin: `${size === 's' ?
                '0.1rem 0' : size === 'm' ?
                    '0.2rem 0' : size === 'l' ?
                        '0.3rem 0' : '0.2rem 0'}`,
            borderRadius: '.4rem',
            fontSize: `${size === 's' ?
                '1.6rem' : size === 'm' ?
                    '2rem' : size === 'l' ?
                        '2.4rem' : '2rem'}`,
        },
    })

    return (
        <Button
            type='button'
            onClick={onClick}
        >
            {label}
        </Button>
    )
}