"use client";
import styled from "@emotion/styled";
import Button from "../_components/button";

const SectionTitle = styled.h1`
    padding: 20px 0;
    font-size: 20px;
`;

export default function page() {
    return (
        <div>
            <SectionTitle>Basic button</SectionTitle>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <SectionTitle>Text button</SectionTitle>
            <Button>Primary</Button>
            <Button disabled>Disabled</Button>
            <Button href="#text-buttons">Link</Button>

            <SectionTitle>Contained button</SectionTitle>
            <Button variant="contained">Contained</Button>
            <Button variant="contained" disabled>
                Disabled
            </Button>
            <Button variant="contained" href="#contained-buttons">
                Link
            </Button>

            <SectionTitle>Color</SectionTitle>
            <Button color="secondary">Secondary</Button>
            <Button variant="contained" color="success">
                Success
            </Button>
            <Button variant="outlined" color="error">
                Error
            </Button>

            <SectionTitle>size</SectionTitle>
            <Button variant="contained" color="success" size="lg">
                Large
            </Button>
            <Button variant="contained" color="success" size="md">
                Medium
            </Button>
            <Button variant="contained" color="success" size="sm">
                Small
            </Button>
        </div>
    );
}
