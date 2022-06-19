import { Navbar, NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function Header() {
    return(
        <Navbar bg="light" sticky="top" className="Header">
            
                <NavbarBrand style={{marginLeft:30}}>MicroBlog</NavbarBrand>
            
        </Navbar>
    )
}