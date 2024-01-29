import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Components from "./pages/components/Components";
import Header from "./ui/header/Header";
import ScrollAnimations from "./pages/javascript/ScrollAnimations";
import Hero from "./pages/components/hero/Hero";
import Menu from "./pages/components/menus/Menu";
import FormsContainer from "./pages/components/forms/FormsContainer";
import TextAnimationsMain from "./pages/components/text/TextAnimationsMain";
import Lenis from "@studio-freight/lenis";
function App() {
  // smooth scroll lenis
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
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
            <Route path="forms" element={<FormsContainer />} />
            <Route path="text" element={<TextAnimationsMain />} />
          </Route>

          <Route path="/scroll-animations" element={<ScrollAnimations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
