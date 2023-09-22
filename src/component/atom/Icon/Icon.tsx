import styled from "@emotion/styled";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { MQ } from "../../../style/responsiveWebCss";

interface IconProps {
    icon: ReactNode;
}

const StyledIconWrapper = styled.div({
    [MQ[0]]: {
        width: '3rem',
    },
    [MQ[1]]: {
        width: '4rem',
    },
    [MQ[2]]: {
        width: '5rem',
    },
})

export default function Icon({ icon }: IconProps) {

    return <StyledIconWrapper>{icon}</StyledIconWrapper>;
}