"use client";

import { Global, ThemeProvider } from "@emotion/react";
import { globalStyle } from "../../styles/globalStyle";
import { theme } from "../../styles/theme";

export default function StyledProvider({ children }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={globalStyle} key="global-style" />
                {children}
            </ThemeProvider>
        </>
    );
}
