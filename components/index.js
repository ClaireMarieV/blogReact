import React from "react";

const Index = ({ children }) => (
  <div className="index">
    {children}
    <style jsx global>{`
      .index {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 9rem;
      }
      @media (max-width: 720px) {
        .index {
          margin-top: 5vw;
        }
      }
    `}</style>
  </div>
);
export default Index;
