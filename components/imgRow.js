import React from "react";

const imgRow = ({ children }) => (
  <div className="imgRow">
    {children}
    <style jsx global>{`
      .imgRow img {
      }
    `}</style>
  </div>
);
export default imgRow;
