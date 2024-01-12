"use client";
import styled from "@emotion/styled";
import StyledProvider from "./shared/providers/styledProvider";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { Noto_Sans_KR } from "next/font/google";

const notoSansKR = Noto_Sans_KR({
    weight: ["400", "700"],
    style: ["normal"],
    subsets: ["latin"],
    variable: "--font-notoSansKR",
    display: "swap",
});

const ThemeTest = styled.div`
    color: ${(props) => props.theme.colors.primary};
`;

const Wrap = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const Container = styled.main``;

export default function RootLayout({ children }) {
    return (
        <html>
            <StyledProvider>
                <body className={`${notoSansKR.variable}`}>
                    <Wrap>
                        <Header />
                        <Container>{children}</Container>
                        <Footer />
                    </Wrap>
                </body>
            </StyledProvider>
        </html>
    );
}
