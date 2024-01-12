"use client";
import styled from "@emotion/styled";
import Link from "next/link";
import MainLogo from "@/app/shared/components/mainLogo";

const Header = styled.header`
    width: 100%;
    padding: 10px;
    display: flex;

    ul {
        display: flex;
        gap: 20px;
        margin-left: auto;
        li {
            color: ${(props) => props.theme.textColors.title};
            font-weight: 700;
        }
    }
`;
const Logo = styled(`svg`)``;
export default function header() {
    return (
        <Header>
            <h1>
                <MainLogo />
            </h1>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/news">News</Link>
                </li>
                <li>
                    <Link href="/notice">Notice</Link>
                </li>
                <li>
                    <Link href="/qna">Q&A</Link>
                </li>
                <li>
                    <Link href="/error">error</Link>
                </li>
                <li>
                    <Link href="/loading">loading</Link>
                </li>
            </ul>
        </Header>
    );
}
