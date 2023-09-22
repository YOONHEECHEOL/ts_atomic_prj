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
import { TodoProps } from "../../atom/Todo/Todo";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { MQ, ResponsiveBreakPoint } from "../../../style/responsiveWebCss";

const tempData = [
    {
        title: "알고리즘 공부하기",
        desc: "기초부터 탄탄히, 퇴근 전 알고리즘 공부를 합시다.",
        seq: 1,
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
        title: "장보기",
        desc: "다 먹고 살자고 하는 일, 영양분 구매합시다.",
        seq: 2,
        hashTag: [
            {
                value: "마트",
                color: "#222",
            },
            {
                value: "식비",
                color: "#222",
            },
        ],
        status: "done",
    },
    {
        title: "코테 문제 풀기",
        desc: "이직 이직 절대 이직",
        seq: 3,
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
        title: "잠자기",
        desc: "내일을 위한 휴식",
        seq: 4,
        hashTag: [
            {
                value: "휴식",
                color: "#222",
            },
        ],
        status: "done",
    },
];

export const originData = atom(tempData);
export const currentData = atom(tempData);



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
            body={<TodoList data={curr} />}
        />
    );
}

interface AddTodoProps {
    todoInfo?: {
        title?: string;
        desc?: string;
        hashTag?: string;
        status?: string;
    } | null;
}
const StyledAddTodoButton = styled.div({
    [MQ[0]]: { width: '100%', margin: '7vh 0 0 0', },
    [MQ[1]]: { width: '100%' },
    [MQ[2]]: { width: '100%' },
    display: 'flex',
    justifyContent: 'left',
    flexDirection: 'column',
});
const AddTodoButton = () => {
    const [curr, setCurr] = useAtom(currentData);

    const [title, setTitle] = useState<string>("");
    const [desc, setDesc] = useState<string>("");
    const [hashTag, setHashTag] = useState<string>("");

    // ui
    const [mode, setMode] = useState<'R' | 'I'>('R');

    return (
        <StyledAddTodoButton>
            {
                mode === 'R' ?
                    // <MdOutlineAddToPhotos size={30} />
                    <Button
                        label="추가"
                        fill={true}
                        context={'primary'}
                        onClick={() => setMode('I')}
                    />
                    : <></>
            }
            {
                mode === 'I' ?
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

                                const hashTagVal = [{
                                    value: hashTag,
                                    color: '#222'
                                }];

                                const val: TodoProps = {
                                    title: title,
                                    desc: desc,
                                    hashTag: hashTagVal,
                                    seq: 0,
                                    status: "done"
                                };

                                if (val) result.push(val);
                                setCurr(result);
                                setTitle('');
                                setDesc('');
                                setHashTag('');
                            }}
                        />
                        <Button
                            label="취소"
                            fill={true}
                            context="danger"
                            onClick={() => setMode('R')}
                        />
                    </>
                    : <></>
            }
        </StyledAddTodoButton>
    );
};
