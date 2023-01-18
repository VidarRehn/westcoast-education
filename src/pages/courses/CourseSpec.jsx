import { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { SectionContainer } from '../../styles/styled-components'
import styled from 'styled-components'
import { PageTitle } from '../../styles/styled-components'

const Title = styled.h2`
    color:white;
`

const CourseSpec = () => {

    const location = useLocation()
    const [course, setCourse] = useState(null)

    useEffect(() => {
        if (location.state){
            setCourse(location.state)
        }
    }, [])

    return (
        <SectionContainer>
        {course && 
        <>
            <PageTitle>{course.title}</PageTitle>
            <p>{course.description}</p>
            <p>Kursen börjar: {course.startDate}</p>
            <p>Kursens längd: {course.length}</p>
        </>
        }
        </SectionContainer>
    )
}

export default CourseSpec
