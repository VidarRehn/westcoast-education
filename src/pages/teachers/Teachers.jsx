import { SectionContainer, PageTitle, AddNewButton } from "../../styles/styled-components"
import useHttpClient from "../../hooks & helpers/use-http-client"
import { useEffect, useContext } from "react"
import AppContext from "../../context/AppContext"
import TeachersList from "../../components/lists/TeachersList"
import Portal from "../../components/add-new-modal/Portal"

const Teachers = () => {

    const { openModal, setOpenModal, teachersList, setTeachersList } = useContext(AppContext)
    const {data} = useHttpClient('teachers')

    useEffect(() => {
        if (data) {
            setTeachersList(data)
        }
    }, [data])

    return (
        <>
        <Portal wrapperId={'portal'} type={'teachers'} />
        <SectionContainer>
            <PageTitle>Våra lärare</PageTitle>
            <AddNewButton onClick={() => setOpenModal(!openModal)}>Lägg till ny lärare</AddNewButton>
            <TeachersList teachersList={teachersList}/>
        </SectionContainer>
        </>
    )
}

export default Teachers