import styled from "@emotion/styled";
import { HashTagProps } from "../HashTag/HashTag";
import HashTagList from "../HashTag/HashTagList";
import { MQ } from "../../../style/responsiveWebCss";
import Icon from "../Icon/Icon";
import { MdCheckCircle } from "react-icons/md";

export interface TodoProps {
    todoId: number;
    title: string;
    description: string;
    createdTime: string;
    dueDate?: string | null;
    hashTag: HashTagProps[] | [];
    status: "progress" | "done";
    isDeleted: boolean;

    idx?: number;
    isSelected?: boolean;
    onClick?: any;
}

// wrap
const StyledTodoWrap = styled.div({
    display: "flex",
    justifyContent: "space-between",
});

// todoId 영역
const StyledTodoId = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "12%",
    borderTop: "1px solid #bbb",
    borderLeft: "1px solid #bbb",
    borderBottom: "1px solid #bbb",
    [MQ[0]]: {
        borderRadius: "1.2rem 0 0 1.2rem",
        fontSize: "1.4rem",
    },
    [MQ[1]]: {
        borderRadius: "1.6rem 0 0 1.6rem",
        fontSize: "1.6rem",
    },
    [MQ[2]]: {
        borderRadius: "2rem 0 0 2rem",
        fontSize: "1.8rem",
    },
}, ({ isSelected }: any) => ({
    backgroundColor: isSelected ? '#017bfe' : '#fff',
    color: isSelected ? '#fff' : '#222',
}));

//
const StyledTodo = styled.div(
    {
        border: "1px solid #bbb",
        cursor: "pointer",
        width: "88%",
        [MQ[0]]: {
            padding: "1.6rem 0 .8rem",
            borderRadius: "0 1.2rem 1.2rem 0",
            fontSize: "1.4rem",
        },
        [MQ[1]]: {
            padding: "2.4rem 0 1.2rem",
            borderRadius: "0 1.6rem 1.6rem 0",
            fontSize: "1.6rem",
        },
        [MQ[2]]: {
            padding: "3.2rem 0 1.6rem",
            borderRadius: "0 2rem 2rem 0",
            fontSize: "1.8rem",
        },
    },
    () => ({})
);

// title
const StyledTodoTitle = styled.div({
    fontWeight: "bold",
    [MQ[0]]: {
        fontSize: "2rem",
        padding: "0 .8rem",
        margin: "0 0 1.2rem 0",
    },
    [MQ[1]]: {
        fontSize: "2.4rem",
        padding: "0 1.2rem",
        margin: "0 0 1.6rem 0",
    },
    [MQ[2]]: {
        fontSize: "2.8rem",
        padding: "0 1.6rem",
        margin: "0 0 2rem 0",
    },
});

// description
const StyledTodoDesc = styled.div({
    borderBottom: "1px solid #ddd",
    [MQ[0]]: {
        fontSize: "1.4rem",
        padding: "0 .8rem .8rem",
        margin: "0 0 .8rem 0",
    },
    [MQ[1]]: {
        fontSize: "1.6rem",
        padding: "0 1.2rem 1.2rem",
        margin: "0 0 1.2rem 0",
    },
    [MQ[2]]: {
        fontSize: "1.8rem",
        padding: "0 1.6rem 1.6rem",
        margin: "0 0 1.6rem 0",
    },
});

export default function Todo({
    todoId,
    title,
    description,
    hashTag,
    idx,
    onClick = () => { },
    isSelected,
    ...props
}: TodoProps) {

    const todoData = {
        todoId,
        title,
        description,
        hashTag,
        idx,
        onClick,
        ...props
    };

    return (
        <StyledTodoWrap onClick={(e) => onClick(e, todoData)}>
            <StyledTodoId isSelected={isSelected}>
                {
                    isSelected ? <Icon icon={<MdCheckCircle size={30} />} /> : idx
                }
            </StyledTodoId>
            <StyledTodo>
                <StyledTodoTitle>{title}</StyledTodoTitle>
                <StyledTodoDesc>{description}</StyledTodoDesc>
                {hashTag && <HashTagList data={hashTag} />}
            </StyledTodo>
        </StyledTodoWrap>
    );
}
