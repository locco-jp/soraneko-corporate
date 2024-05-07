import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

export default function Case() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const containerElement = containerRef.current;
    const contentElement = contentRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerElement,
          start: "center center",
          // markers: true,
        },
      })
      .from(contentElement, {
        opacity: 0,
        y: 100,
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="bg-blue-900 h-full w-full flex items-center justify-center overflow-hidden font-bold"
    >
      <div ref={contentRef}>case</div>
    </div>
  );
}
