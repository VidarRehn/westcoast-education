import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";


import Navbar from "./Navbar";

describe('Navbar component tests', () => {
    const setup = () => render(<BrowserRouter><Navbar /></BrowserRouter>) 
    describe('Navigation links exist', () => {
        test('to home screen', () => {
            setup()
            const HomeLink = screen.getByText('Hem')
            expect(HomeLink).toHaveAttribute('href', '/')
        })
        test('to teachers list page', () => {
            setup()
            const TeachersLink = screen.getByText('Utbildningar')
            expect(TeachersLink).toHaveAttribute('href', '/courses')
        })
        test('to courses list page', () => {
            setup()
            const CoursesLink = screen.getByText('Lärare')
            expect(CoursesLink).toHaveAttribute('href', '/teachers')
        })
    })
})