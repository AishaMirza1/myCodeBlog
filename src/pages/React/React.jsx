import Heading1 from "../../ui/Heading1";
import { navLinks } from "../../ui/nav/data";

export default function React() {
  return (
    <main>
      <Heading1 heading="React" color={navLinks[1].color} />
    </main>
  );
}
