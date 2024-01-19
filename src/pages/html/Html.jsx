import Heading1 from "../../ui/Heading1";
import { navLinks } from "../../ui/nav/data";
export default function Html() {
  return (
    <main>
      <Heading1 heading="html" color={navLinks[3].color} />
    </main>
  );
}
