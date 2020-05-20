import React from "react";

const imgRow = ({ children }) => (
  <div className="imgRow">
    {children}
    <style jsx global>{`
      .imgRow {
        margin: 0.5em;
      }


      }
    `}</style>
  </div>
);
export default imgRow;
