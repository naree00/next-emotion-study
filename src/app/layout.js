"use client";
import styled from "@emotion/styled";
import StyledProvider from "./providers/styledProvider";
import Link from "next/link";

const ThemeTest = styled.div`
    color: ${(props) => props.theme.colors.primary};
`;

const Wrap = styled.div`
    width: 700px;
    margin: 0 auto;
`;
const Header = styled.header`
    width: 100%;
    padding: 10px;
    background: #777;
`;
const Main = styled.main`
    padding: 10px;
    min-height: 500px;
`;
const Footer = styled.footer`
    padding: 10px;
    background: #777;
`;
export default function RootLayout({ children }) {
    return (
        <html>
            <StyledProvider>
                <body>
                    <Wrap>
                        <Header>
                            <h1>로고</h1>
                            <ul>
                                <li>
                                    <Link href="/">home</Link>
                                </li>
                                <li>
                                    <Link href="/">list</Link>
                                </li>
                            </ul>
                        </Header>
                        <Main>
                            <ThemeTest>1111</ThemeTest>
                            {children}
                        </Main>
                        <Footer>footer</Footer>
                    </Wrap>
                </body>
            </StyledProvider>
        </html>
    );
}
