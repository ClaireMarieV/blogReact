import React from "react";

const Index = ({ children }) => (
  <div className="index">
    {children}
    <style jsx global>{`
      .index {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      @media (max-width: 600px) {
        .index {
          margin: 0;
        }
      }
    `}</style>
  </div>
);
export default Index;
