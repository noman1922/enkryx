import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function ScrambledText({
  children,
  duration = 0.6,
  chars = ".:",
}) {
  const textRef = useRef(null);
  const original = useRef(children);

  useEffect(() => {
    const el = textRef.current;

    const enter = () => {
      gsap.to(el, {
        duration,
        scrambleText: {
          text: original.current,
          chars,
          speed: 0.4,
        },
      });
    };

    el.addEventListener("mouseenter", enter);

    return () => {
      el.removeEventListener("mouseenter", enter);
    };
  }, [duration, chars]);

  return <span ref={textRef}>{children}</span>;
}
