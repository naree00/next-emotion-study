"use client";
import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

export const globalStyle = css`
    ${emotionReset}
    * {
        color: pink;
        box-sizing: border-box;
    }
`;
