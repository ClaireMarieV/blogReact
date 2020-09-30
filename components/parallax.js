import React from "react";

import { Parallax } from "react-scroll-parallax";

const ParallaxImage = ({ children }) => (
  <div className="parallax" y={[-20, 20]} tagOuter="figure">
    <div className="parallax_inner">{children}</div>
    <style jsx>{`
      .parallax {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 100%;
        max-width: 50rem;
        margin: auto;
      }
      .parallax_inner {
        transform: translateY(-85px, 0, 0);
      }
    `}</style>
  </div>
);

export default ParallaxImage;
