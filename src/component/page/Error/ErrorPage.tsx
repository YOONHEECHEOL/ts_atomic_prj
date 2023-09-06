import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error: any = useRouteError();
    console.log(error);

    return (
        <div id="error-page">
            <div>{error?.statusText + ' ' + error?.statusText}</div>
            <div>{error?.error?.message}</div>
        </div>
    )
}