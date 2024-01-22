import MainComponentsHeader from "../../../ui/MainComponentsHeader";
import HeaderVoid from "./headers/HeaderVoid";

export default function Hero() {
  return (
    <main>
      <MainComponentsHeader heading="Heros" />
      <div style={{ marginBottom: "8rem" }}>
        <HeaderVoid />
      </div>

      <HeaderVoid />
    </main>
  );
}
