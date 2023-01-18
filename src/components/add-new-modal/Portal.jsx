import { createPortal } from "react-dom";
import styled from "styled-components"
import { flex } from "../../styles/partials"
import { useContext, useState } from "react"
import AddNewCourse from "./AddNewCourse"
import AddNewTeacher from './AddNewTeacher'
import AppContext from "../../context/AppContext";

const Portal = ({ wrapperId, type }) => {

    const { openModal, setOpenModal } = useContext(AppContext)
    const [typeOfForm, setTypeOfForm] = useState(type)

    if (!openModal) return null

    return createPortal(
        <>
        <Overlay>
            <Container>
                <CloseButton onClick={() => setOpenModal(!openModal)}>stäng</CloseButton>
                <div>
                    <TypePicker onClick={() => setTypeOfForm('courses')} className={typeOfForm === 'courses' ? 'active' : ''}>Ny kurs</TypePicker>
                    <TypePicker onClick={() => setTypeOfForm('teachers')}  className={typeOfForm === 'teachers' ? 'active' : ''}>Ny lärare</TypePicker>
                </div>
                {typeOfForm === 'courses' ? <AddNewCourse /> : <AddNewTeacher />}
            </Container>
        </Overlay>
        </>,
        document.getElementById(wrapperId)
    )
}

const Overlay = styled.div`
    position: fixed;
    ${flex('column', 'center', 'center')};
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
`
const Container = styled.div`
    background-color: white;
    ${flex('column', 'center', 'center')};
    gap: 10px;
    padding: 30px;
    min-width: 260px;

    >div {
        ${flex()};
        margin: 10px 0px;
        gap: 10px;
    }
`
const CloseButton = styled.button`
    padding: 5px;
    align-self: flex-end;
`
const TypePicker = styled.button`
    background-color: transparent;
    border: none;
    font-size: 16px;

    &:hover, &.active {
        text-decoration: underline;
    }

`


export default Portal