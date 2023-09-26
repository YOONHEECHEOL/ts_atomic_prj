import { useEffect, useState } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { getCookie } from "../../../utils/cookieUtils";
import TodoList from "../../molecule/Todo/TodoList";
import TodoListHeader from "../../molecule/Todo/TodoListHeader";
import TodoListTemplate from "../../template/Todo/TodoListTemplate";
import styled from "@emotion/styled";
import Input from "../../atom/Input/Input";
import Button from "../../atom/Button/Button";
import { atom, useAtom } from "jotai";
import Todo, { TodoProps } from "../../atom/Todo/Todo";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { MQ, ResponsiveBreakPoint } from "../../../style/responsiveWebCss";

const tempData: TodoProps[] = [
    {
        todoId: 1,
        title: "알고리즘 공부하기",
        description: "기초부터 탄탄히, 퇴근 전 알고리즘 공부를 합시다.",
        createdTime: "2023-09-15",
        dueDate: "",
        isDeleted: false,
        hashTag: [
            {
                value: "이직",
                color: "#222",
            },
            {
                value: "알고리즘",
                color: "#222",
            },
            {
                value: "자료구조",
                color: "#222",
            },
        ],
        status: "done",
    },
    {
        todoId: 2,
        title: "알고리즘 공부하기2",
        description: "기초부터 탄탄히, 퇴근 전 알고리즘 공부를 합시다.",
        createdTime: "2023-09-15",
        dueDate: "",
        isDeleted: false,
        hashTag: [
            {
                value: "이직",
                color: "#222",
            },
            {
                value: "알고리즘",
                color: "#222",
            },
            {
                value: "자료구조",
                color: "#222",
            },
        ],
        status: "done",
    },
];

export const originData = atom(tempData);
export const currentData = atom<TodoProps[]>(tempData);

export default function TodoListPage() {
    const [origin, setOrigin] = useAtom(originData);
    const [curr, setCurr] = useAtom(currentData);

    useEffect(() => {
        // const loginId = getCookie("loginId");
        // const isLogin = getCookie("isLogin");
        // console.log(loginId);
        // console.log(isLogin);
        // if (isLogin === "N") redirect("/gsp-front/login");
    }, []);

    return (
        <TodoListTemplate
            header={<TodoListHeader />}
            addTodo={<AddTodoButton />}
            // body={<TodoList data={curr} />}
            body={
                <>
                    <StyledTodoList>
                        {
                            curr && curr?.length > 0 && curr?.map((todo, idx) => {
                                return (
                                    <Todo
                                        key={todo.title + idx}
                                        idx={idx + 1}
                                        todoId={todo?.todoId}
                                        title={todo?.title}
                                        description={todo?.description}
                                        hashTag={todo?.hashTag}
                                        status={todo?.status}
                                        createdTime={""}
                                        isDeleted={false}
                                        isSelected={todo?.isSelected}
                                        onClick={(e: any, data: any) => {
                                            const sel = [...curr];
                                            setCurr(sel?.map((el): any => {
                                                if (el.todoId === data.todoId) el['isSelected'] = !el['isSelected'];
                                                return el;
                                            }))
                                        }}
                                    />
                                )
                            })
                        }
                    </StyledTodoList>
                </>
            }
        />
    );
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

const StyledAddTodoButton = styled.div({
    [MQ[0]]: { width: "100%", margin: "calc(7vh + .2rem) 0 0 0" },
    [MQ[1]]: { width: "100%", margin: "calc(7vh + .3rem) 0 0 0" },
    [MQ[2]]: { width: "100%", margin: "calc(7vh + .4rem) 0 0 0" },
    display: "flex",
    justifyContent: "left",
    flexDirection: "column",
});
const AddTodoButton = () => {
    const [curr, setCurr] = useAtom(currentData);

    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [hashTag, setHashTag] = useState<string>("");

    // ui
    const [mode, setMode] = useState<"R" | "I">("R");

    return (
        <StyledAddTodoButton>
            {mode === "R" ? (
                // <MdOutlineAddToPhotos size={30} />
                <Button
                    label="추가"
                    fill={true}
                    context={"primary"}
                    onClick={() => setMode("I")}
                />
            ) : (
                <></>
            )}
            {mode === "I" ? (
                <>
                    <Input
                        placeholder={"title"}
                        value={title}
                        onChange={(e: any) => setTitle(e)}
                    />
                    <Input
                        placeholder={"desc"}
                        value={desc}
                        onChange={(e: any) => setDesc(e)}
                    />
                    <Input
                        placeholder={"HashTag"}
                        value={hashTag}
                        onChange={(e: any) => setHashTag(e)}
                    />
                    <Button
                        label="입력"
                        fill={true}
                        context="success"
                        onClick={() => {
                            let result = [...curr];

                            const hashTagVal = [
                                {
                                    value: hashTag,
                                    color: "#222",
                                },
                            ];

                            const val: TodoProps = {
                                todoId: 0,
                                title: title,
                                description: desc,
                                hashTag: hashTagVal,
                                status: "done",
                                createdTime: "",
                                isDeleted: false,
                            };

                            if (val) result.push(val);
                            setCurr(result);
                            setTitle("");
                            setDesc("");
                            setHashTag("");
                        }}
                    />
                    <Button
                        label="취소"
                        fill={true}
                        context="danger"
                        onClick={() => setMode("R")}
                    />
                </>
            ) : (
                <></>
            )}
        </StyledAddTodoButton>
    );
};
