//CSS
import styled from "styled-components"
import { flex } from "../../styles/partials"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <Container>
            <NavList>
                <li><Link to={'/'}>Hem</Link></li>
                <li><Link to={'/courses'}>Utbildningar</Link></li>
                <li><Link to={'/teachers'}>Lärare</Link></li>
            </NavList>
        </Container>
    )
}

const Container = styled.nav`
    background-color: white;
    position: fixed;
    padding: 20px;
    width: 100%;
    ${flex('row', 'center', 'center')};


    a {
        text-decoration: none;
    }

    .logo {
        font-size: 50px;
        font-weight: bold;
        color: black;
    }
`
const NavList = styled.ul`
    list-style-type: none;
    ${flex('row', 'center', 'center')};
    gap: 20px;

    a {
        font-size: 16px;
        color: black;

        &:hover {
            text-decoration: underline;
        }
    }
`

export default Navbar