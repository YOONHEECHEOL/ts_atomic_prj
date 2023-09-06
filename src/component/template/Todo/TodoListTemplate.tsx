import styled from "@emotion/styled";
import { MdOutlineSettings, MdTag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removeCookie, setCookie } from "../../../utils/cookieUtils";
import Button from "../../atom/Button/Button";
import Id from "../../organism/User/Id";

const tempData = [
    {
        title: "알고리즘 공부하기",
        desc: "기초부터 탄탄히, 퇴근 전 알고리즘 공부를 합시다.",
        seq: 1,
        hashTag: [
            {
                value: '이직',
                color: '#222'
            },
            {
                value: '알고리즘',
                color: '#222'
            },
            {
                value: '자료구조',
                color: '#222'
            },
        ],
        status: 'done',
    },
    {
        title: "장보기",
        desc: "다 먹고 살자고 하는 일, 영양분 구매합시다.",
        seq: 2,
        hashTag: [
            {
                value: '마트',
                color: '#222'
            },
            {
                value: '식비',
                color: '#222'
            },
        ],
        status: 'done',
    },
    {
        title: "코테 문제 풀기",
        desc: "이직 이직 절대 이직",
        seq: 3,
        hashTag: [
            {
                value: '이직',
                color: '#222'
            },
            {
                value: '알고리즘',
                color: '#222'
            },
            {
                value: '자료구조',
                color: '#222'
            },
        ],
        status: 'done',
    },
    {
        title: "잠자기",
        desc: "내일을 위한 휴식",
        seq: 4,
        hashTag: [
            {
                value: '휴식',
                color: '#222'
            },
        ],
        status: 'done',
    },
];

export default function TodoListTemplate() {
    return (
        <>
            <TodoHeader id="홍길동" />
            <TodoList data={tempData} />
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
    data?: TodoProps[];
}
const StyledTodoList = styled.div({
    display: "flex",
    flexDirection: "column",
    width: "calc(100% - 5rem)",
    padding: "2rem",
    gap: ".4rem",
});
const TodoList = ({ data }: TodoListProps) => {
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
                    />
                );
            })}
        </StyledTodoList>
    );
};

interface TodoProps {
    title: string;
    desc?: string;
    seq: number;
    hashTag?: HashTagProps[];
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
const Todo = ({ title, desc, seq, hashTag }: TodoProps) => {
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

// footer
interface TodoFooterProps {
    text?: string | null;
}

const TodoFooter = ({ text }: TodoFooterProps) => {
    return <div>{text}</div>;
};

// hashTag
interface HashTagProps {
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
const HashTag = ({ value, color }: HashTagProps) => {
    return <StyledHashTag color={color}>{value}</StyledHashTag>;
};

interface HashTagListProps {
    data: HashTagProps[] | null;
}
const StyledHashTagList = styled.div({
    display: "flex",
    justifyContent: "left",
    gap: ".2rem",
});
const HashTagList = (props: HashTagListProps) => {

    return (
        <StyledHashTagList>
            {props?.data && props?.data?.map((el: any, idx: number) => {
                // console.log(el);
                return (
                    <HashTag key={idx + el?.value} value={el?.value} color={el?.color} />
                );
            })}
        </StyledHashTagList>
    );
};