import styled from "@emotion/styled";
import { MdLogout, MdOutlineSettings, MdTag } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "../../../utils/cookieUtils";
import Button from "../../atom/Button/Button";
import Icon from "../../atom/Icon/Icon";
import Id from "../../organism/User/Id";

interface TodoListHeaderProps {
    height?: string;
    children?: HTMLElement | HTMLElement[] | JSX.Element | JSX.Element[] | null;
}
const StyledTodoHeaderListWrap = styled.div(
    {
        width: "calc(100% - 4vw)",
        height: '7vh',
        position: 'fixed',
        top: '0',
        left: '0',
        padding: "2vh 2vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#fff',
        borderBottom: '1px solid #ddd',
        zIndex: '999',
    },
    (props: any) => ({
        height: props?.height,
    })
);
const StyledWrapSettingButtons = styled.div({
    display: 'flex',
    gap: '1rem',
})
export default function TodoListHeader({ height, children }: TodoListHeaderProps) {
    const nav = useNavigate();

    return (
        <StyledTodoHeaderListWrap height={height}>
            {/* hash tag button */}
            <Icon icon={
                <MdTag size={30} onClick={() => console.log("hashtag!")} />}
            />

            {/* title */}
            <StyledWrapSettingButtons>
                <Id backword="님" />
                <Icon icon={
                    <MdLogout
                        size={'100%'}
                        color={'#dc3545'}
                        onClick={(e) => {
                            removeCookie("loginId", "");
                            removeCookie("isLogin", "");
                            nav("/gsp-front/login");
                        }}
                    />
                } />
            </StyledWrapSettingButtons>

            {/* settings */}
            <Icon icon={
                <MdOutlineSettings
                    size={30}
                    onClick={() => console.log("settings!")}
                />
            } />
        </StyledTodoHeaderListWrap>
    );
};