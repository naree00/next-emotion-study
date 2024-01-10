"use client";
import styled from "@emotion/styled";
const LoadingTxt = styled.p`
    text-align: center;
`;

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <LoadingTxt>로딩중..</LoadingTxt>
        </>
    );
}
