import { render, screen } from '@testing-library/react';
import Teachers from './Teachers'

describe('Courses list page tests', () => {
    const setup = () => render(<Teachers/>)
    test('List of courses show on render', () => {
        setup()
        const list = screen.getByRole('list')
        expect(list).toBeInTheDocument()
    })
    test('title exists', () => {
        setup()
        const title = screen.getByText('Våra lärare')
        expect(title).toBeInTheDocument()
    })
    // test('list should contain list items', async () => {

    // })
});