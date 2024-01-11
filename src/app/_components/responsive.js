"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const PC = ({ children }) => {
    const [isPc, setIsPc] = useState(false);
    const pc = useMediaQuery({
        query: "(min-width:1025px)",
    });
    useEffect(() => {
        setIsPc(pc);
    }, [pc]);

    return <>{isPc && children}</>;
};

export const TABLET = ({ children }) => {
    const [isTab, setIsTab] = useState(false);
    const tablet = useMediaQuery({
        query: "(min-width:769px) and (max-width:1024px)",
    });
    useEffect(() => {
        setIsTab(tablet);
    }, [tablet]);

    return <>{isTab && children}</>;
};

export const MOBILE = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const mobile = useMediaQuery({
        query: "(max-width:768px)",
    });
    useEffect(() => {
        setIsMobile(mobile);
    }, [mobile]);
    return <>{isMobile && children}</>;
};

// mediaquery
const deviceWidth = {
    lg: 1201,
    md: 1025,
    sm: 769,
};
export const MediaQuery = (breakPoint, direction = "over") => {
    const viewport =
        direction === "over"
            ? `min-width: ${deviceWidth[breakPoint]}px`
            : `max-width: ${deviceWidth[breakPoint] - 1}px`;

    return `@media (${viewport})`;
};
