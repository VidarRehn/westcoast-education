import { render, screen } from "@testing-library/react";
import AddNewTeacher from "./AddNewTeacher";
import userEvent from "@testing-library/user-event";

describe('Popup Modal tests', () => {
    const setup = () => render(<AddNewTeacher />) 
    describe('Form inputs', () => {
        test('first input exists', () => {
            setup()
            const input = screen.getByLabelText('Förnamn')
            expect(input).toBeInTheDocument()
        })
        test('submit button should be disabled if not all fields are filled', () => {
            setup()
            const SubmitButton = screen.getByRole('button', {name: 'Lägg till'})
            expect(SubmitButton).toBeDisabled()
        })
        test('submit button should be disabled if all fields are filled in', () => {
            setup()
            const firstNameInput = screen.getByLabelText('Förnamn')
            const lastNameInput = screen.getByLabelText('Efternamn')
            const emailInput = screen.getByLabelText('E-mail')
            const telephoneInput = screen.getByLabelText('Telefonnummer')
            const personalNumberInput = screen.getByLabelText('Personnummer')
            const expertiseInput = screen.getByLabelText('Kompetenser')
            const SubmitButton = screen.getByRole('button', {name: 'Lägg till'})

            userEvent.type(firstNameInput, 'Vidar')
            userEvent.type(lastNameInput, 'Rehn')
            userEvent.type(emailInput, 'vidar@mail.net')
            userEvent.type(telephoneInput, '076-111-1111')
            userEvent.type(personalNumberInput, '19901015-9006')
            userEvent.type(expertiseInput, 'Lorem ipsum dolor sit amet')

            expect(SubmitButton).toBeEnabled()
        })
    })
})