import React from "react";

const VerticalTitle = ({ title }) => (
  <div className="vertical-title">
    <h3>{title}</h3>
    <style jsx>
      {`
        @media (max-width: 500px) {
          .vertical-title {
            line-height: normal;
            right: -6.5vw;
          }
        }
        @media (min-width: 400px) and (max-width: 730px) {
          .vertical-title h3 {
            font-size: 1rem;
          }
        }
        @media (min-width: 307px) and (max-width: 399px) {
          .vertical-title h3 {
            font-size: 0.8rem;
          }
        }
        @media (max-width: 306px) {
          .vertical-title h3 {
            font-size: 0.7rem;
          }
        }
      `}
    </style>
  </div>
);

export default VerticalTitle;
