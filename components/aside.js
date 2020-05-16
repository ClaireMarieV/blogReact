import React from "react";

const Aside = ({ children, className, id }) => (
  <div className={"aside " + (className || "")} id={id}>
    {children}
    <style jsx>{`
      .aside {
        width: calc(30% - 1.875rem);
        max-width: 15rem;
        opacity: 0.9;
        padding-left: 1em;
        padding-top: 1em;
        background-color: white;
      }

      @media (max-width: 990px) {
        .aside {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Aside;
