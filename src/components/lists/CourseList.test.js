import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';
import { BrowserRouter } from 'react-router-dom';

describe('Courses list component tests', () => {
    
    const mockCourseArray = [{
        id: 1,
        title: "Title",
        courseId: 111111,
        length: "10 veckor",
        startDate: "2023-08-14",
        description: "Lorem ipsum dolor sit amet"
    }]

    const setup = () => render(
    <BrowserRouter>
        <CourseList courseList={mockCourseArray}/>
    </BrowserRouter>)

    test('List is rendered if available data', () => {
        setup()
        const list = screen.getByRole('list')
        expect(list.children.length).toBeGreaterThan(0)
    })
    test('list items contain a title', () => {
        setup()
        const title = screen.getByText('Title')
        expect(title).toBeInTheDocument()
    })
});