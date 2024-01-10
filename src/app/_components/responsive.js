"use client";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

export const PC = ({ children }) => {
    const [isPc, setIsPc] = useState(false);
    const pc = useMediaQuery({
        query: "(min-width:1024px)",
    });
    useEffect(() => {
        setIsPc(pc);
    }, [pc]);

    return <>{isPc && children}</>;
};

export const TABLET = ({ children }) => {
    const [isTab, setIsTab] = useState(false);
    const tablet = useMediaQuery({
        query: "(min-width:768px) and (max-width:1023px)",
    });
    useEffect(() => {
        setIsTab(tablet);
    }, [tablet]);

    return <>{isTab && children}</>;
};

export const MOBILE = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);
    const mobile = useMediaQuery({
        query: "(max-width:767px)",
    });
    useEffect(() => {
        setIsMobile(mobile);
    }, [mobile]);
    return <>{isMobile && children}</>;
};
