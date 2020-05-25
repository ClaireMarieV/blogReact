import React from "react";

const Aside = ({ children, className, id }) => (
  <div className={"aside " + (className || "")} id={id}>
    {children}
    <style jsx>{`
      .aside {
        max-width: 15rem;
        opacity: 0.9;
        padding: 2.5em;

        background-color: #fcf9f5;
      }

      @media (max-width: 610px) {
        .aside {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Aside;
