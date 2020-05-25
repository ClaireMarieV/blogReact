import React from "react";

const Index = ({ children }) => (
  <div className="index">
    {children}
    <style jsx global>{`
      .index {
        display: flex;
        flex-direction: column;
        width: 100%;
        transition: opacity 0.5s ease 0.3s;
        margin: 9rem;
      }
      @media (max-width: 720px) {
        .index {
          margin: 0;
        }
      }
    `}</style>
  </div>
);
export default Index;
