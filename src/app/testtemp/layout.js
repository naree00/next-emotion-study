"use client";
import React, { useEffect } from "react";

export default function useTemplate({ children }) {
    useEffect(() => {
        console.log("render");
    }, []);
    return (
        <>
            <p>not template</p>
            {children}
        </>
    );
}
