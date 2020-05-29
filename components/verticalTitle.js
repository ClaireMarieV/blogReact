import React from "react";

const VerticalTitle = ({ title }) => (
  <div className="vertical-title">
    <div className="content">
      <h3>{title}</h3>
    </div>
    <style jsx>
      {`
        .vertical-title {
          text-align: right;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          display: flex;
          line-height: 1.875vw;
          position: absolute;
          right: -4.5vw;
          bottom: 0.5rem;
        }

        .vertical-title .content {
          display: flex;
          vertical-align: baseline;
          justify-content: end;
          align-items: end;
          margin-top: 0.5rem;
        }

        .vertical-title h3 {
          text-align: center;
          letter-spacing: -0.03rem;
          font-family: arboria, sans-serif;
          font-weight: 500;
          font-style: normal;
        }

        .vertical-title a {
          text-decoration: none;
        }
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
