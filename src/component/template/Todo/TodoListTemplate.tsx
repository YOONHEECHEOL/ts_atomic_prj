import styled from "@emotion/styled";
import { MdOutlineSettings, MdTag } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { removeCookie, setCookie } from "../../../utils/cookieUtils";
import Button from "../../atom/Button/Button";
import HashTag, { HashTagProps } from "../../atom/HashTag/HashTag";
import HashTagList from "../../atom/HashTag/HashTagList";
import Todo, { TodoProps } from "../../atom/Todo/Todo";
import Id from "../../organism/User/Id";

interface TodoListTemplateProps {
    header?: JSX.Element | JSX.Element[] | null;
    addTodo?: JSX.Element | JSX.Element[] | null;
    body?: JSX.Element | JSX.Element[] | null;
}
export default function TodoListTemplate({
    header,
    addTodo,
    body,
}: TodoListTemplateProps) {

    return (
        <>
            {header}
            {addTodo}
            {body}
            <TodoFooter />
        </>
    );
}

// footer
interface TodoFooterProps {
    text?: string | null;
}

const TodoFooter = ({ text }: TodoFooterProps) => {
    return <div>{text}</div>;
};
