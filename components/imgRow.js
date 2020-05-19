import React from "react";

const imgRow = ({ children }) => (
  <div className="imgRow">
    {children}
    <style jsx global>{`
      .imgRow {
        height: 30rem;
        display: flex;
        margin: 0.5em;
      }
      .imgRow img {
        margin: 0.5em;
      }
      @media (max-width: 600px) {
        .imgRow {
          display: inline-block;
        }
      }
    `}</style>
  </div>
);
export default imgRow;
