import { Link } from "react-router-dom"
import { GridList, GridListItem } from "../../styles/styled-components"

const CourseList = ({ courseList }) => {

    return (
        <GridList>
            {courseList && courseList.map(course => {
                return (
                    <GridListItem key={course.courseId}>
                        <strong>{course.title} <span>({course.courseId})</span></strong>
                        <p>{course.startDate ? `Startdatum: ${course.startDate} ` : null}<span>({course.length})</span></p>
                        <Link to={`/courses/${course.courseId}`} state={course}>Läs mer om kursen</Link>
                    </GridListItem>
                )
            })}
        </GridList>
    )
}

export default CourseList