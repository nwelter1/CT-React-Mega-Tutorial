import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Stack from "react-bootstrap/Stack";
import Posts from "./components/Posts";
import Body from "./components/Body";
import { LoginPage } from "./pages/LoginPage";
import { ExplorePage } from "./pages/ExplorePage";
import { FeedPage } from "./pages/FeedPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  
  return (
    <Container fluid className="App" id="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      
        
      
    </Container>
    
    
  );
}

export default App;
