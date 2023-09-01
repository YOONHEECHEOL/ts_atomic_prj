import styled from "@emotion/styled"
import { MdOutlineSettings, MdTag } from "react-icons/md"
import { useNavigate } from "react-router-dom";
import { removeCookie, setCookie } from "../../../utils/cookieUtils";
import Button from "../../atom/Button/Button";
import Id from "../../organism/User/Id";

export default function TodoListTemplate() {
    return (<TodoHeader id="홍길동" />)
}


// header
const StyledTodoHeaderWrap = styled.div({
    minWidth: '320px',
    maxWidth: '720px',
    width: '100%',
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '20px',
}, (props: any) => ({
    height: props?.height,
}))

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
            <MdTag size={30} onClick={() => console.log('hashtag!')} />

            {/* title */}
            <Id size={'30px'} backword="님" />
            <Button label="로그아웃" fill={true} context="danger" onClick={(e) => {

                removeCookie('loginId', '');
                removeCookie('isLogin', '');
                nav('/login');
            }} />
            {/* settings */}
            <MdOutlineSettings size={30} onClick={() => console.log('settings!')} />

        </StyledTodoHeaderWrap>
    )
}


// body


// footer

