import '../../styles/components/layout/Nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <Navbar bg="light" sticky="top">
            <Container fluid>
                <b><NavLink exact to="/" className="NavTitle" activeClassName="active">Universidad</NavLink></b>
                <Nav classNameName="justify-content-end">
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><NavLink exact to="/" className="NavButton yellow" activeClassName="active yellow">Home</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><NavLink exact to="/servicios" className="NavButton lightblue" activeClassName="active">Services</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><NavLink exact to="/novedades" className="NavButton fucsia" activeClassName="active">News</NavLink></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1"><NavLink exact to="/contacto" className="NavButton grey" activeClassName="active">Contact Us</NavLink></Nav.Link>
                    </Nav.Item>  
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Navigation;