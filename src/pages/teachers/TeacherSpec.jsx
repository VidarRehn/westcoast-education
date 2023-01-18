import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { SectionContainer, PageTitle } from '../../styles/styled-components'

const TeacherSpec = () => {

    const location = useLocation()
    const [teacher, setTeacher] = useState(null)

    useEffect(() => {
        if (location.state){
            setTeacher(location.state)
        }
    }, [])

    return (
        <SectionContainer>
        {teacher && 
        <>
        <PageTitle>{teacher.firstName} {teacher.lastName}</PageTitle>
        <p>Email: {teacher.email}</p>
        <p>Telefonnummer: {teacher.telephone}</p>
        <p>Personnummer: {teacher.personalNumber}</p>
        </>
        }
        </SectionContainer>
    )
}

export default TeacherSpec