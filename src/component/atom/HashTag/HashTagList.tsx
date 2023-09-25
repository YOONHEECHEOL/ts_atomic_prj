import styled from "@emotion/styled";
import HashTag, { HashTagProps } from "./HashTag";
import { MQ } from "../../../style/responsiveWebCss";

interface HashTagListProps {
    data: HashTagProps[] | null;
}
const StyledHashTagList = styled.div({
    display: "flex",
    justifyContent: "left",
    gap: ".2rem",
    [MQ[0]]: {
        padding: "0 .8rem",
    },
    [MQ[1]]: {
        padding: "0 1.2rem",
    },
    [MQ[2]]: {
        padding: "0 1.6rem",
    },
});
export default function HashTagList(props: HashTagListProps) {
    return (
        <StyledHashTagList>
            {props?.data &&
                props?.data?.map((el: any, idx: number) => {
                    // console.log(el);
                    return (
                        <HashTag
                            key={idx + el?.value}
                            value={el?.value}
                            color={el?.color}
                        />
                    );
                })}
        </StyledHashTagList>
    );
}
