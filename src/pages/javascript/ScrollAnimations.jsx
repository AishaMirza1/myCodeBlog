import HeaderParallelScroll from "./fullPageAnimations/heroParallelScroll/HeaderParallelScroll";

// import Lenis from "@studio-freight/lenis";

export default function Javascript() {
  // smooth scroll lenis
  // const lenis = new Lenis();
  // function raf(time) {
  //   lenis.raf(time);
  //   requestAnimationFrame(raf);
  // }

  // requestAnimationFrame(raf);
  console.log("page 1 loaded");
  return (
    <div>
      <HeaderParallelScroll />
    </div>
  );
}
