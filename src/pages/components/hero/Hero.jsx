import MainComponentsHeader from "../../../ui/MainComponentsHeader";
import HeaderVoid from "./headers/HeaderVoid";
import Header1 from "./headers/header1/Header1";

export default function Hero() {
  return (
    <main>
      <MainComponentsHeader heading="Heros" />

      <Header1 />
      <HeaderVoid />
    </main>
  );
}
