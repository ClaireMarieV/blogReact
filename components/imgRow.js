import React from "react";

const imgRow = ({ children }) => (
  <div className="imgRow">
    {children}
    <style jsx>{`
      .imgRow{
        display: flex
        flex-direction: column;
        max-width: 50rem;
        margin: auto;
      }

    `}</style>
  </div>
);
export default imgRow;
