"use client";
import emotionReset from "emotion-reset";
import { css } from "@emotion/react";

export const globalStyle = css`
    ${emotionReset}
    * {
        color: blue;
        box-sizing: border-box;
    }
`;
