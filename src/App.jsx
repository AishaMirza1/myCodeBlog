import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import { Suspense, lazy } from "react";
import Components from "./pages/components/Components";
import Header from "./ui/header/Header";
const ScrollAnimations = lazy(() =>
  import("./pages/javascript/ScrollAnimations")
);
const Hero = lazy(() => import("./pages/components/hero/Hero"));
const Menu = lazy(() => import("./pages/components/menus/Menu"));
const FormsContainer = lazy(() =>
  import("./pages/components/forms/FormsContainer")
);
const TextAnimationsMain = lazy(() =>
  import("./pages/components/text/TextAnimationsMain")
);
const Buttons = lazy(() => import("./pages/components/buttons/Buttons"));
const Loader = lazy(() => import("./pages/components/loaders/Loader"));
const AllComponentsCardsContainer = lazy(() =>
  import("./pages/components/AllComponentsCardsContainer")
);
function App() {
  return (
    <div>
      <Suspense>
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
              <Route path="loaders" element={<Loader />} />
            </Route>

            <Route path="/scroll-animations" element={<ScrollAnimations />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
