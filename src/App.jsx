import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import Components from "./pages/components/Components";
import Header from "./ui/header/Header";
import ScrollAnimations from "./pages/javascript/ScrollAnimations";
import Hero from "./pages/components/hero/Hero";
import Menu from "./pages/components/menus/Menu";
import FormsContainer from "./pages/components/forms/FormsContainer";
import TextAnimationsMain from "./pages/components/text/TextAnimationsMain";
import Buttons from "./pages/components/buttons/Buttons";
import AllComponentsCardsContainer from "./pages/components/AllComponentsCardsContainer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Navigate replace to="components" />} />
          <Route path="/components" element={<Components />}>
            <Route index element={<AllComponentsCardsContainer />} />
            <Route path="hero" element={<Hero />} />
            <Route path="menu" element={<Menu />} />
            <Route path="forms" element={<FormsContainer />} />
            <Route path="text" element={<TextAnimationsMain />} />
            <Route path="buttons" element={<Buttons />} />
          </Route>

          <Route path="/scroll-animations" element={<ScrollAnimations />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
