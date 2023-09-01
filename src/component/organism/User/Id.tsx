import { useEffect, useState } from "react";
import { getCookie } from "../../../utils/cookieUtils";
import Text from "../../atom/Text/Text";
import { loginId } from "../../page/Login/LoginPage";

interface IdProps {
    size?: string;
    backword?: null | string;
}

export default function Id({ size = 'l', backword }: IdProps) {

    const [id, setId] = useState('-');

    useEffect(() => {
        const validateVal = getCookie('loginId');
        console.log(validateVal);
        if (validateVal === '' || validateVal === undefined) return;
        if (validateVal !== id) return setId(validateVal);
        if (validateVal === id) return;
        // return null;
    }, [id])

    return (
        <Text text={id} size={size} />
    )
}