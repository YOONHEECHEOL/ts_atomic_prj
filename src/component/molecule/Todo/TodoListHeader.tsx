import styled from "@emotion/styled";
import { MdOutlineSettings, MdTag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../../utils/cookieUtils";
import Button from "../../atom/Button/Button";
import Id from "../../organism/User/Id";

interface TodoListHeaderProps {
    height?: string;
    children?: HTMLElement | HTMLElement[] | JSX.Element | JSX.Element[] | null;
}
const StyledTodoHeaderListWrap = styled.div(
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
export default function TodoListHeader({ height, children }: TodoListHeaderProps) {
    const nav = useNavigate();

    return (
        <StyledTodoHeaderListWrap height={height}>
            {/* hash tag button */}
            <MdTag size={30} onClick={() => console.log("hashtag!")} />

            {/* title */}
            <Id size={"30px"} backword="님" />
            <Button
                label="로그아웃"
                fill={true}
                context="danger"
                size="s"
                onClick={(e) => {
                    removeCookie("loginId", "");
                    removeCookie("isLogin", "");
                    nav("/gsp-front/login");
                }}
            />
            {/* settings */}
            <MdOutlineSettings
                size={30}
                onClick={() => console.log("settings!")}
            />
        </StyledTodoHeaderListWrap>
    );
};