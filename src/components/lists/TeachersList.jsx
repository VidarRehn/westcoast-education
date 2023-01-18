import { Link } from "react-router-dom"
import { GridList, GridListItem } from "../../styles/styled-components"

const TeachersList = ({ teachersList }) => {

    return (
        <GridList>
            {teachersList && teachersList.map(teacher => {
                return (
                    <GridListItem key={teacher.teacherId}>
                        <strong>{teacher.firstName} {teacher.lastName}</strong>
                        <Link to={`/teachers/${teacher.teacherId}`} state={teacher}>Läs mer om läraren</Link>
                    </GridListItem>
                )
            })}
        </GridList>
    )
}

export default TeachersList