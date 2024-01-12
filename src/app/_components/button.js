"use client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const ButtonElement = styled.button`
    /* common styles */
    height: 36px;
    padding: 0 14px;
    font-size: 1.4rem;
    border-radius: 6px;
    font-weight: 500;
    transition: 100ms ease-out;

    /* variant styles based on props */

    ${(props) => {
        switch (props.variant) {
            case "contained":
                return css`
                    background-color: ${props.theme.colors.primary};
                    color: #fff;
                    ${buttonSize(props.size, props.variant)}
                `;
            case "outlined":
                return css`
                    border: 2px solid ${props.theme.colors.primary};
                    color: ${props.theme.colors.primary};
                    ${buttonSize(props.size, props.variant)}
                `;
            default:
                return css``; // No styles for the default case
        }
    }}

    /* color styles based on props */
    ${(props) => {
        switch (props.color) {
            case "secondary":
                return css`
                    background-color: #3498db;
                    color: #fff;
                `;
            case "success":
                return css`
                    border: 2px solid #2ecc71;
                    color: #2ecc71;
                `;
            case "error":
                return css`
                    border: 2px solid #e74c3c;
                    color: #e74c3c;
                `;
            default:
                return null; // No styles for the default case
        }
    }}

    /* state styles based on props */
    ${(props) =>
        props.disabled &&
        css`
            opacity: 0.5;
            cursor: not-allowed;
        `}
`;

const buttonSize = (size, variant) => {
    switch (size) {
        case "sm":
            return variant === "contained"
                ? css`
                      /* specific styles for sm and contained variant */
                  `
                : css`
                      /* specific styles for sm and outlined variant */
                  `;
        case "md":
            return variant === "contained"
                ? css`
                      /* specific styles for md and contained variant */
                  `
                : css`
                      /* specific styles for md and outlined variant */
                  `;
        case "lg":
            return variant === "contained"
                ? css`
                      /* specific styles for lg and contained variant */
                  `
                : css`
                      /* specific styles for lg and outlined variant */
                  `;
        default:
            return null;
    }
};

// variants( text (default), contained, and outlined.)
// state = normal, disable
// color = success, error
// size = small, medium, large

export default function Button({ children, ...props }) {
    return <ButtonElement {...props}>{children}</ButtonElement>;
}
