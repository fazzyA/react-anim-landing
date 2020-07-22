import * as React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

import "./style.css";

const Anim =() => {
  const { ref, animate } = useWebAnimations();

  React.useEffect(() => {
    document.addEventListener("mousemove", e => {
      try {
        animate({
          keyframes: { transform: `translate(${e.clientX}px, ${e.clientY}px)` },
          timing: { duration: 500, fill: "forwards" }
        });
      } catch (error) {
        // Ifnore error
      }
    });
  }, [animate]);

  return (
    <div className="App">
      <span
        className="target"
        role="img"
        aria-label="useWebAnimations"
        ref={ref}
      >
        🍿
      </span>
    </div>
  );
};
export default Anim