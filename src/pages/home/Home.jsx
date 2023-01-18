//CSS
import styled from "styled-components"
import { fonts, flex, colors } from "../../styles/partials"
//react components 
import { Link } from 'react-router-dom'
//resources
import Background from '../../resources/students-bg.jpg'

const Container = styled.main`
    ${flex('column', 'center', 'center')}
    height: 100vh;
    width: 100%;
    background: url(${Background}) rgba(35, 35, 35, 0.8);
    background-blend-mode: overlay;
    background-size: cover;
    background-position: center;
`
const Title = styled.h1`
    font-size: clamp(100px, 16em, 180px);
    color: white;
`
const SubHeading = styled.h2`
    font-size: ${fonts.subhheading};
    color: #ffffff;
`
const ExploreButton = styled.button`
    margin-top: 40px;
    background-color: ${colors.cto};
    color: white;
    font-size: 16px;
    border: none;
    width: 240px;
    height: 50px;

    &:hover  {
        background-color: ${colors.ctoOnHover};
    }
`

const Home = () => {

    return (
        <>
        <Container>
            <Title>WCE</Title>
            <SubHeading>West Coast Education</SubHeading>
            <Link to={`/courses`}>
                <ExploreButton>Se våra utbildningar</ExploreButton>
            </Link>
        </Container>
        </>
    )
}

export default Home