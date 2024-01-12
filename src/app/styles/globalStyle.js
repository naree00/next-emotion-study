"use client";
import emotionReset from "emotion-reset";
import { theme } from "./theme";
import { css } from "@emotion/react";

export const globalStyle = css`
    ${emotionReset}
    html, body {
        color: ${theme.textColors.primary};
        font-family: var(--font-notoSansKR), system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,
            "Fira Sans", "Droid Sans", "Open Sans", "Helvetica Neue", sans-serif;
    }
    * {
        box-sizing: border-box;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    .a11y-hidden {
        position: absolute;
        z-index: -1;
        width: 1px;
        height: 1px;
        overflow: hidden;
        margin: -1px;
        padding: 0;
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        -webkit-clip-path: inset(50%);
        white-space: nowrap;
    }
`;
