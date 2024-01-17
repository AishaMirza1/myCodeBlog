import Heading1 from "../../ui/Heading1";
import { navLinks } from "../../ui/nav/data";
export default function Css() {
  return (
    <main>
      <Heading1 heading="Css" color={navLinks[2].color} />
    </main>
  );
}
