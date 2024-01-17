import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Article from "./pages/article/Article";
import Css from "./pages/css/Css";
import React from "./pages/React/React";
import Projects from "./pages/projects/Projects";
import Html from "./pages/html/Html";
import Nav from "./ui/nav/Nav";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Navigate replace to="articles" />} />
          <Route path="/articles" element={<Article />}></Route>
          <Route path="/css" element={<Css />} />
          <Route path="/react" element={<React />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/html" element={<Html />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
