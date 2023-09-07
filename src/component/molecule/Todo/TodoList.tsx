import styled from "@emotion/styled";
import Todo, { TodoProps } from "../../atom/Todo/Todo";

interface TodoListProps {
    data?: TodoProps[];
}
const StyledTodoList = styled.div({
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 5rem)",
    padding: "2rem",
    gap: ".4rem",
});
export default function TodoList({ data }: TodoListProps) {
    const listData = data && data?.length > 0 ? data : [];
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