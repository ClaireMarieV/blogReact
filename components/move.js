import React, { useEffect, useRef, createRef } from "react";
import gsap from "gsap";

const Move = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (document) {
      const rect = document.body.getBoundingClientRect();
      let mouse = { x: 0, y: 0, moved: false };

      const onMouseMove = (event) => {
        mouse.moved = true;
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
      };

      document.body.addEventListener("mousemove", onMouseMove);

      // Ticker event will be called on every frame
      gsap.ticker.add(function () {
        if (mouse.moved) {
          gsap.to(ref.current, {
            x: ((mouse.x - rect.width / 2) / rect.width) * -100,
            y: ((mouse.y - rect.height / 2) / rect.height) * -100,
          });
        }
        mouse.moved = false;
      });

      /*$(window).on("resize scroll", function () {
        rect = $("#container")[0].getBoundingClientRect();
      });*/

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
      };
    }
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default Move;
