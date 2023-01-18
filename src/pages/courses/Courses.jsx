import { SectionContainer, PageTitle, AddNewButton } from "../../styles/styled-components"
import useHttpClient from "../../hooks & helpers/use-http-client"
import { useEffect, useContext } from "react"
import AppContext from "../../context/AppContext"
import CourseList from "../../components/lists/CourseList"
import Portal from "../../components/add-new-modal/Portal"

const Courses = () => {

    const { openModal, setOpenModal, courseList, setCourseList } = useContext(AppContext)
    const {data} = useHttpClient('courses')

    useEffect(() => {
        if (data) {
            setCourseList(data)
        }
    }, [data])

    return (
        <>
        <Portal wrapperId={'portal'} type={'courses'} />
        <SectionContainer>
            <PageTitle>Våra utbildningar</PageTitle>
            <AddNewButton onClick={() => setOpenModal(!openModal)}>Lägg till ny kurs</AddNewButton>
            <CourseList courseList={courseList}/>
        </SectionContainer>
        </>
    )
}

export default Courses