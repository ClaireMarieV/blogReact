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
          height: 100%;
          line-height: 1.875vw;
          margin: 0 0 1em;
        }
        .vertical-title .content {
          padding-top: 1rem;
        }

        .vertical-title h3 {
          text-align: center;
          letter-spacing: 0.5rem;
          font-family: astoria-sans-condensed, sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 1.2em;
        }
        .vertical-title .content a {
          text-decoration: none;
          padding: 0 0 0.35em;
          line-height: 1.4;
          transition: all 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }

        .vertical-title .content a::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 4rem;
          height: 1rem;
          opacity: 0.3;
          transform: scale3d(0, 1, 1);
          transform-origin: 0% 50%;
          transition: transform 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
        .vertical-title .content a:hover,
        .vertical-title .content a:focus {
          color: #563440;
        }
        .vertical-title .content a::before {
          background: #563440;
        }
        .vertical-title:hover .content a::before,
        .vertical-title:focus .content a::before {
          transform: scale3d(1, 1, 1);
        }
      `}
    </style>
  </div>
);

export default VerticalTitle;
