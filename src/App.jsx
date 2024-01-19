import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Components from "./pages/components/Components";
import Css from "./pages/css/Css";
import Html from "./pages/html/Html";
import Nav from "./ui/nav/Nav";
import Javascript from "./pages/javascript/Javascript";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index element={<Navigate replace to="components" />} />
          <Route path="/components" element={<Components />}></Route>
          <Route path="/css" element={<Css />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/html" element={<Html />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
