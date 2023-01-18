import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from "./Home";

describe('Course list page tests', () => {
    const setup = () => render(<BrowserRouter><Home /></BrowserRouter>) 
    describe('Page layout', () => {
        test('Main title exists', () => {
            setup()
            const title = screen.getByRole('heading', {level: 1})
            expect(title).toBeInTheDocument()
        })
    })
})