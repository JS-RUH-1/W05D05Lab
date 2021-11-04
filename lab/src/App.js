import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./componetns/Home";
import Detailes from "./componetns/Detailes";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li style={{ listStyleType: "none" }}>
              <Link style={{ textDecoration: "none", fontSize: 35 }} to="/">
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/detaiels/:name" element={<Detailes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
