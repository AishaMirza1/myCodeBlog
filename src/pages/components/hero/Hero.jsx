import MainComponentsHeader from "../../../ui/MainComponentsHeader";
import HeaderVoid from "./headers/HeaderVoid";
// import HeaderParallelScroll from "./heroParallelScroll/HeaderParallelScroll";

export default function Hero() {
  return (
    <main>
      <MainComponentsHeader heading="Heros" />
      {/* <HeaderParallelScroll /> */}
      <HeaderVoid />
    </main>
  );
}
