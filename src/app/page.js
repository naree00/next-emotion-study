"use client";
import Image from "next/image";
import img01 from "/public/images/testimg.jpg";
import styled from "@emotion/styled";
import { PC, TABLET, MOBILE, MediaQuery } from "./_components/responsive";
import MainSlider from "./_components/swiper";

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
            <MainSlider></MainSlider>
        </>
    );
}
