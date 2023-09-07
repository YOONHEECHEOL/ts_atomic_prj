import styled from "@emotion/styled";
import { HashTagProps } from "../HashTag/HashTag";
import HashTagList from "../HashTag/HashTagList";

export interface TodoProps {
    title: string;
    desc?: string;
    seq: number;
    hashTag?: HashTagProps[];
    status: string;
}
const StyledTodo = styled.div(
    {
        padding: "2rem",
        border: "1px solid #bbb",
        cursor: "pointer",
        fontSize: "1.4rem",
        "&:hover": {
            backgroundColor: "#f1f1f1",
        },
    },
    () => ({})
);
export default function Todo({ title, desc, seq, hashTag }: TodoProps) {
    return (
        <StyledTodo>
            <span>{title}</span>
            <br />
            <span>{desc}</span>
            <br />
            <span>{seq}</span>
            <br />
            {hashTag && <HashTagList data={hashTag} />}
        </StyledTodo>
    );
};