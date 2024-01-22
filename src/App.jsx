import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Components from "./pages/components/Components";
import Css from "./pages/css/Css";
import Html from "./pages/html/Html";
import Header from "./ui/header/Header";
import Javascript from "./pages/javascript/Javascript";
import Hero from "./pages/components/hero/Hero";
import Menu from "./pages/components/menus/Menu";
import Form from "./pages/components/forms/form1.jsx/Form";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Navigate replace to="components" />} />
          <Route path="/components" element={<Components />}>
            {/* make a seperate index page for showing all components as cards for now hero is index */}
            <Route index path="hero" element={<Hero />} />
            <Route path="menu" element={<Menu />} />
            <Route path="forms" element={<Form />} />
          </Route>
          <Route path="/css" element={<Css />} />
          <Route path="/javascript" element={<Javascript />} />
          <Route path="/html" element={<Html />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
