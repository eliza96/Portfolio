import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Pages/Layout";
import Cover from "./components/Pages/Cover";
import Contents from "./components/Pages/Contents";
import About from "./components/Pages/About";
import Experiences from "./components/Pages/Experiences";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cover" element={<Cover/>} />
        <Route path="contents" element={<Contents />} />
        <Route path="about" element={<About />} />
        <Route path="experiences" element={<Experiences />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
