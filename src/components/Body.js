import { Container } from "react-bootstrap";
import { Stack } from "react-bootstrap";
import SideBar from "./SideBar";

const Body = ({sidebar, children}) =>{
    return(
        <Container>
            <Stack direction="horizontal" className="Body">
                {sidebar && <SideBar />}
                <Container className="Content">
                    {children}
                </Container>
            </Stack>
        </Container>
    )
}
export default Body;