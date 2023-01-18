import { useRef, useContext, useState } from "react"
import { InputForm, AddNewButton } from "../../styles/styled-components"
import AppContext from "../../context/AppContext"

const AddNewCourse = () => {

    const {setOpenModal, courseList, setCourseList} = useContext(AppContext)
    const [formActive, setFormActive] = useState(false)

    const titleInputRef = useRef()
    const courseDescriptionRef = useRef()
    const startDateRef = useRef()
    const courseLengthRef = useRef()

    const postCourse = async (course) => {
        const res = await fetch('http://localhost:8000/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(course)
        })
        const data = await res.json()
        setCourseList([...courseList, data])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newCourse = {
            title: titleInputRef.current.value,
            courseId: Math.floor(Math.random() * 900000) + 100000,
            length: courseLengthRef.current.value,
            startDate: startDateRef.current.value,
            description: courseDescriptionRef.current.value
        }
        postCourse(newCourse)
        setOpenModal(false)
    }

    const handleChange = () => {
        if (titleInputRef.current.value !== '' && 
            courseDescriptionRef.current.value !== '' && 
            courseLengthRef.current.value !== ''){
                
            setFormActive(true)
        } else {
            setFormActive(false)
        }
    }

    return (
        <InputForm onSubmit={(e) => handleSubmit(e)} onChange={handleChange}>
            <div>
                <label htmlFor="course-title-input">Kursnamn</label>
                <input ref={titleInputRef} id="course-title-input" type="text" required />
            </div>
            <div>
                <label htmlFor="course-description-input">Kort beskrivning</label>
                <textarea ref={courseDescriptionRef} id="course-description-input" cols="30" rows="5" required></textarea>
            </div>
            <div>
                <label htmlFor="course-date-input">Startdatum</label>
                <input ref={startDateRef} type="date" id="course-date-input" />
            </div>
            <div>
                <label htmlFor="course-length-input">Kurslängd (veckor)</label>
                <input ref={courseLengthRef} id="course-length-input" type="text" required />
            </div>
            <AddNewButton disabled={!formActive}>Lägg till</AddNewButton>
        </InputForm>
    )
}

export default AddNewCourse