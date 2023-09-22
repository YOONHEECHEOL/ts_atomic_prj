import styled from "@emotion/styled";
import { useEffect } from "react";
import Todo, { TodoProps } from "../../atom/Todo/Todo";

interface TodoListProps {
    data?: TodoProps[];
}
const StyledTodoList = styled.div({
    display: "flex",
    flexDirection: "column",
    width: '100%',
    height: '100%',
    gap: ".4rem",
    overflowX: "hidden",
    overflowY: "scroll",
});
export default function TodoList({ data }: TodoListProps) {
    const listData = data && data?.length > 0 ? data : [];

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <StyledTodoList>
            {listData?.map((todo, idx) => {
                return (
                    <Todo
                        key={todo.title + idx}
                        title={todo?.title}
                        seq={todo?.seq}
                        desc={todo?.desc}
                        hashTag={todo?.hashTag}
                        status={todo?.status}
                    />
                );
            })}
        </StyledTodoList>
    );
};