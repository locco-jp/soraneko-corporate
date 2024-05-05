import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedComponent() {
  const componentRef = useRef(null);

  useEffect(() => {
    const element = componentRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
        toggleActions: "play none none none",
      },
    });

    tl.from(element, {
      opacity: 0,
      duration: 1,
    });
  }, []);

  return (
    <div ref={componentRef} className="w-full">
      <h1 className="text-primary">
        This component will fade in as you scroll
      </h1>
    </div>
  );
}
