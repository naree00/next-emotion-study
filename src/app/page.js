"use client";
import Image from "next/image";
import img01 from "/public/images/testimg.jpg";
import styled from "@emotion/styled";
import { PC, TABLET, MOBILE, MediaQuery } from "./_components/responsive";

const TestMedia = styled.div`
    background: yellow;
    ${MediaQuery("sm")} {
        width: 100%;
        height: 500px;
    }
    ${MediaQuery("sm", "under")} {
        width: 50%;
        height: 100px;
    }
`;

export default function Home() {
    return (
        <>
            <p>home</p>
            <PC>
                <p>PC</p>
            </PC>

            <TABLET>
                <p>Tablet</p>
            </TABLET>

            <MOBILE>
                <p>Mo</p>
            </MOBILE>
            <TestMedia />

            <Image
                src={img01}
                width={500}
                height={500}
                alt="Picture of the test"
            />
        </>
    );
}
