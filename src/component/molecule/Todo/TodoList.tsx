import styled from "@emotion/styled";
import { useEffect } from "react";
import Todo, { TodoProps } from "../../atom/Todo/Todo";

interface TodoListProps {
    data?: TodoProps[];
}
const StyledTodoList = styled.div({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    margin: ".2rem",
    gap: ".4rem",
    overflowX: "hidden",
    overflowY: "scroll",
});
export default function TodoList({ data }: TodoListProps) {
    const listData = data && data?.length > 0 ? data : [];

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <StyledTodoList>
            {listData?.reverse()?.map((todo, idx) => {
                return (
                    <Todo
                        key={todo.title + idx}
                        idx={idx}
                        todoId={todo?.todoId}
                        title={todo?.title}
                        description={todo?.description}
                        hashTag={todo?.hashTag}
                        status={todo?.status}
                        createdTime={""}
                        isDeleted={false}
                    // onClick={ }
                    />
                );
            })}
        </StyledTodoList>
    );
}
