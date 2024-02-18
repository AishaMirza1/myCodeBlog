import MainComponentsHeader from "../../../ui/MainComponentsHeader";
import Accordian1 from "./accordians/accordian1/Accordian1";
import Accordian2 from "./accordians/accordian2/Accordian";
export default function Accordian() {
  return (
    <main>
      <MainComponentsHeader heading="Accordians" />
      <Accordian2 />
      <Accordian1 />
    </main>
  );
}
