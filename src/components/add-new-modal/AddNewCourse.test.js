import { render, screen } from "@testing-library/react";
import AddNewCourse from "./AddNewCourse";
import userEvent from "@testing-library/user-event";

describe('Popup Modal tests', () => {
    const setup = () => render(<AddNewCourse />) 
    describe('Form inputs', () => {
        test('course title input exists', () => {
            setup()
            const input = screen.getByLabelText('Kursnamn')
            expect(input).toBeInTheDocument()
        })
        test('submit button should be disabled if not all fields are filled', () => {
            setup()
            const SubmitButton = screen.getByRole('button', {name: 'Lägg till'})
            expect(SubmitButton).toBeDisabled()
        })
        test('submit button should be disabled if all fields are filled in', () => {
            setup()
            const titleInput = screen.getByLabelText('Kursnamn')
            const descriptionInput = screen.getByLabelText('Kort beskrivning')
            const courseLength = screen.getByLabelText('Kurslängd (veckor)')
            const SubmitButton = screen.getByRole('button', {name: 'Lägg till'})

            userEvent.type(titleInput, 'Projektledning')
            userEvent.type(descriptionInput, 'Lorem ipsum dolor sit amet')
            userEvent.type(courseLength, '3 månader')

            expect(SubmitButton).toBeEnabled()
        })
    })
})