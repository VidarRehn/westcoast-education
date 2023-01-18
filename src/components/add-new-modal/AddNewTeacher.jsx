import { InputForm, AddNewButton } from "../../styles/styled-components"
import { useContext, useRef, useState } from "react"
import AppContext from "../../context/AppContext"

const AddNewTeacher = () => {

    const {setOpenModal, teachersList, setTeachersList} = useContext(AppContext)
    const [formActive, setFormActive] = useState(false)

    const firstNameInputRef = useRef()
    const lastNameInputRef = useRef()
    const emailInputRef = useRef()
    const telephoneInputRef = useRef()
    const personalNumberInputRef = useRef()
    const expertiseRef = useRef()

    const postTeacher = async (teacher) => {
        const res = await fetch('http://localhost:8000/teachers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teacher)
        })
        const data = await res.json()
        setTeachersList([...teachersList, data])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTeacher = {
            teacherId: Math.floor(Math.random() * 9000) + 1000,
            firstName: firstNameInputRef.current.value,
            lastName: lastNameInputRef.current.value,
            email: emailInputRef.current.value,
            telephone: telephoneInputRef.current.value,
            personalNumber: personalNumberInputRef.current.value,
            expertise: expertiseRef.current.value
        }
        postTeacher(newTeacher)
        setOpenModal(false)
    }

    const handleChange = () => {
        if (firstNameInputRef.current.value !== '' && 
            lastNameInputRef.current.value !== '' && 
            emailInputRef.current.value !== '' && 
            telephoneInputRef.current.value !== '' &&
            personalNumberInputRef.current.value !== '' &&
            expertiseRef.current.value !== ''){

            setFormActive(true)
        } else {
            setFormActive(false)
        }
    }

    return (
        <InputForm onSubmit={(e) => handleSubmit(e)} onChange={handleChange}>
            <div>
                <label htmlFor="teacher-first-name-input">Förnamn</label>
                <input ref={firstNameInputRef} id="teacher-first-name-input" type="text" required/>
            </div>
            <div>
                <label htmlFor="teacher-last-name-input">Efternamn</label>
                <input ref={lastNameInputRef} id="teacher-last-name-input" type="text" required/>
            </div>
            <div>
                <label htmlFor="teacher-email-input">E-mail</label>
                <input ref={emailInputRef} type="email" id="teacher-email-input" required/>
            </div>
            <div>
                <label htmlFor="teacher-telephone-input">Telefonnummer</label>
                <input ref={telephoneInputRef} type="tel" id="teacher-telephone-input" required/>
            </div>
            <div>
                <label htmlFor="teacher-personal-number-input">Personnummer</label>
                <input ref={personalNumberInputRef} type="text" id="teacher-personal-number-input" required/>
            </div>
            <div>
                <label htmlFor="teacher-expertise-input">Kompetenser</label>
                <textarea ref={expertiseRef} id="teacher-expertise-input" cols="30" rows="5" required></textarea>                 
            </div>
            <AddNewButton disabled={!formActive}>Lägg till</AddNewButton>
        </InputForm>
    )
}

export default AddNewTeacher