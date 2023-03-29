import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "../CSS/App.css";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home.js";
import Projects from "./Projects.js";
import NavBar from "./NavBar";

function App() {
  return (
    <body>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="BenDCHomepage/" element={<Home />} />
          <Route path="BenDCHomepage/Projects" element={<Projects />} />
          <Route path="BenDCHomepage/About" element={<About />} />
        </Routes>
      </div>
    </body>
  );
}

export default App;
