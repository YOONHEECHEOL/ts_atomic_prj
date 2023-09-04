import styled from "@emotion/styled";
import { MdOutlineSettings, MdTag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removeCookie, setCookie } from "../../../utils/cookieUtils";
import Button from "../../atom/Button/Button";
import Id from "../../organism/User/Id";

export default function TodoListTemplate() {
    return (
        <>
            <TodoHeader id="홍길동" />
            <TodoList
                data={[
                    {
                        title: "test",
                        description: "test desc!",
                        no: 0,
                        hashTag: "kill",
                    },
                ]}
            />
            <TodoFooter />
        </>
    );
}

// header
const StyledTodoHeaderWrap = styled.div(
    {
        minWidth: "320px",
        maxWidth: "720px",
        width: "100%",
        height: "80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px",
    },
    (props: any) => ({
        height: props?.height,
    })
);

interface TodoHeaderProps {
    id?: string;
    height?: string;
    children?: HTMLElement | HTMLElement[] | JSX.Element | JSX.Element[] | null;
}

const TodoHeader = ({ id, height, children }: TodoHeaderProps) => {
    const nav = useNavigate();

    return (
        <StyledTodoHeaderWrap text={id} height={height}>
            {/* hash tag button */}
            <MdTag size={30} onClick={() => console.log("hashtag!")} />

            {/* title */}
            <Id size={"30px"} backword="님" />
            <Button
                label="로그아웃"
                fill={true}
                context="danger"
                onClick={(e) => {
                    removeCookie("loginId", "");
                    removeCookie("isLogin", "");
                    nav("/login");
                }}
            />
            {/* settings */}
            <MdOutlineSettings
                size={30}
                onClick={() => console.log("settings!")}
            />
        </StyledTodoHeaderWrap>
    );
};

// body
interface TodoListProps {
    data?: object[] | null;
}
const TodoList = ({ data }: TodoListProps) => {
    const listData = data && data?.length > 0 ? data : [];
    return (
        <div>
            {data?.map(() => {
                return <Todo title={"test todo"} no={0} />;
            })}
        </div>
    );
};

interface TodoProps {
    title: string;
    description?: string;
    no: number;
    hashTag?: string;
}
const Todo = ({ title, description, no, hashTag }: TodoProps) => {
    return (
        <div>
            <span>{title}</span>
            <span>{description}</span>
            <span>{no}</span>
            <span>{hashTag}</span>
        </div>
    );
};

// footer
interface TodoFooterProps {
    text?: string | null;
}

const TodoFooter = ({ text }: TodoFooterProps) => {
    return <div>{text}</div>;
};
