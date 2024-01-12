"use client";
import styled from "@emotion/styled";
const LoadingTxt = styled.p`
    text-align: center;
`;

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <LoadingTxt>
                리스트를 로딩중 입니다 조금만 기다려주세요..
            </LoadingTxt>
        </>
    );
}
