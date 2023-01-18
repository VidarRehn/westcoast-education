import { render, screen } from '@testing-library/react';
import TeachersList from './TeachersList';
import { BrowserRouter } from 'react-router-dom';

describe('Teachers list component tests', () => {
    
    const mockTeacherArray = [{
        id: 1,
        teacherId: 2356,
        firstName: 'Vidar',
        lastName: 'Rehn',
        email: 'vidar.rehn@gmail.com',
        telephone: '0735556666',
        personalNumber: '19901015-9006',
        expertise: 'React, Framer Motion, Three.JS'
    }]

    const setup = () => render(
    <BrowserRouter>
        <TeachersList teachersList={mockTeacherArray}/>
    </BrowserRouter>)

    test('List is rendered if available data', () => {
        setup()
        const list = screen.getByRole('list')
        expect(list.children.length).toBeGreaterThan(0)
    })
});