import { Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const SideBar = () => {
    return (
        <Navbar sticky="top" className="flex-column Sidebar">
            <Nav.Item>
                <Nav.Link href="/">Feed</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/">Explore</Nav.Link>
            </Nav.Item>
        </Navbar>
    )
}

export default SideBar;