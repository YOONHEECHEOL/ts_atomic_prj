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
        no: 1,
        hashTag: "알고리즘|코테|자료구조",
    },
    {
        title: "장보기",
        desc: "다 먹고 살자고 하는 일, 영양분 구매합시다.",
        no: 2,
        hashTag: "식사|마트|식비",
    },
    {
        title: "코테 문제 풀기",
        desc: "이직 이직 절대 이직",
        no: 3,
        hashTag: "이직|알고리즘|자료구조",
    },
    {
        title: "잠자기",
        desc: "내일을 위한 휴식",
        no: 4,
        hashTag: "휴식|잠|종료",
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
                        no={todo?.no}
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
    no: number;
    hashTag?: string;
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
const Todo = ({ title, desc, no, hashTag }: TodoProps) => {
    const hashTagList = hashTag?.split("|");
    return (
        <StyledTodo>
            <span>{title}</span>
            <br />
            <span>{desc}</span>
            <br />
            <span>{no}</span>
            <br />
            {hashTagList?.length && <HahsTagList data={hashTagList} />}
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
    },
    (props: any) => ({
        backgroundColor: props.color,
    })
);
const HashTag = ({ value, color }: HashTagProps) => {
    return <StyledHashTag color={color}>{value}</StyledHashTag>;
};

interface HashTagListProps {
    data: HashTagProps | HashTagProps[] | null;
}
const StyledHashTagList = styled.div({
    display: "flex",
    justifyContent: "left",
    gap: ".2rem",
});
const HahsTagList = (props: HashTagListProps) => {
    const dataList = [props.data];
    return (
        <StyledHashTagList>
            {dataList &&
                dataList?.map((el: any) => {
                    return (
                        <HashTag value={el.value} color={el.color}></HashTag>
                    );
                })}
        </StyledHashTagList>
    );
};
