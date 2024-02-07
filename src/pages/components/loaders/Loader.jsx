import MainComponentsHeader from "../../../ui/MainComponentsHeader";
import Loader1 from "./loader1/Loader";
import Loader2 from "./loader2/Loader";

export default function Loader() {
  return (
    <main>
      <MainComponentsHeader heading="Loaders" />
      <Loader1 />
      <Loader2 />
    </main>
  );
}
