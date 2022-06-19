import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Stack from "react-bootstrap/Stack";
import Posts from "./components/Posts";

function App() {
  
  return (
    <Container fluid className="App" id="App">
      <Header />
      <Stack direction="horizontal">
          <SideBar />
          <Container>
        
            <Posts />
          </Container>
    </Stack>
        
      
    </Container>
    
    
  );
}

export default App;
