import styled from "@emotion/styled";

interface AreaProps {
    children: string | JSX.Element | JSX.Element[] | null;
}

export default function Area({ children = null }: AreaProps) {

    const Area = styled.div({
        position: "relative",

        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignContent: "space-between",
        alignItems: "center",

        width: "100%",
        padding: "2rem 0",
    })

    return (
        <Area>
            {children}
        </Area>
    );
}
