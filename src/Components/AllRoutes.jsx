import { Routes, Route } from "react-router-dom";
import { About } from "./About";
import Contacts from "./Contacts";
import Home from "./Home";
import Project from "./Project";
import Resume from "./Resume";

function AllRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/project" element={<Project />}></Route>
      </Routes>
    );
  }
  
  export default AllRoutes;