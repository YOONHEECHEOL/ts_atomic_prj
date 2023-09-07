import styled from "@emotion/styled";

export interface HashTagProps {
    value: string;
    color: string;
}
const StyledHashTag = styled.div(
    {
        padding: ".4rem",
        border: "1px solid #222",
        color: "#fff"
    },
    (props: any) => ({
        backgroundColor: props.color,
    })
);
export default function HashTag({ value, color }: HashTagProps) {
    return <StyledHashTag color={color}>{value}</StyledHashTag>;
};