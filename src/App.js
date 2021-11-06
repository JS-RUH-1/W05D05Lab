import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Anime from "./components/Anime";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./style.css";

function App() {
  return (
    <>
      <div class="container">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/anime/:id" element={<Anime />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
