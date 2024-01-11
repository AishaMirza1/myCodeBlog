import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Article from "./pages/article/Article";
import CodePen from "./pages/codePen/CodePen";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Nav from "./ui/nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Navigate replace to="articles" />} />
        <Route path="/articles" element={<Article />} />
        <Route path="/codepen" element={<CodePen />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
