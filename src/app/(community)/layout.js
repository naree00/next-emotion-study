"use client";
import styled from "@emotion/styled";

const Title = styled.h1`
    font-size: 26px;
    font-weight: 700;
    color: ${(props) => props.theme.textColors.title};
    text-align: center;
    padding: 50px;
`;
const Container = styled.div`
    padding: 50px;
`;
export default function RootLayout({ children }) {
    return (
        <>
            <Title>COMMUNITY</Title>
            <Container>{children}</Container>
        </>
    );
}
