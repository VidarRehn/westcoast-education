import { render, screen } from '@testing-library/react';
import Courses from './Courses'

describe('Courses list page tests', () => {
    const setup = () => render(<Courses/>)
    test('title exists', () => {
        setup()
        const title = screen.getByText('Våra utbildningar')
        expect(title).toBeInTheDocument()
    })
});