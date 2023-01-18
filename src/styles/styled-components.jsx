import styled from "styled-components"
import { fonts, colors, flex } from "./partials"

export const SectionContainer = styled.main`
    padding: 100px 20px;
    min-height: 100vh;
    background-color: ${colors.main};

    strong {
        color: white;
        font-size: 18px;
    }

    p {
        color: white;
        font-size: 14px;
    }

    a {
        color: ${colors.cto};
        font-size: 12px;
    }
`
export const PageTitle = styled.h2`
    font-size: ${fonts.subhheading};
    font-weight: 400;
    color: white;
    margin-bottom: 20px;
`
export const GridList = styled.ul`
    list-style-type: none;
    font-size: ${fonts.paragraph};
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(max(230px, calc(25% - 40px)),1fr));
    gap: 20px;
`
export const GridListItem = styled.li`
    ${flex('column')};
    gap: 10px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    background-color: ${colors.secondary};
`
export const InputForm = styled.form`
    ${flex('column', 'center', 'center')};
    gap: 10px;
    width: 100%;

    >div {
    ${flex('column')};
    gap: 5px;
    width: 100%;
    }

    input, textarea, button {
    width: 100%;
    padding: 10px;
    }

    label {
        font-size: 12px;
    }
`
export const AddNewButton = styled.button`
    background-color: ${colors.cto};
    color: white;
    border: none;
    padding: 10px 20px;
    margin-bottom: 20px;

    &:hover {
        background-color: ${colors.ctoOnHover};
    }

    &:disabled {
        background-color: grey;
        cursor: auto;
    }
`