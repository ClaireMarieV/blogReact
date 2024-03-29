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
          margin: 0 0 1em;
        }
        .vertical-title .content {
          padding-top: 1rem;
          transition: all 1s;
        }

        .vertical-title h3 {
          text-align: center;
          letter-spacing: 0.5rem;
          font-size: 1.5rem;
        }
        .vertical-title .content h3 {
          text-decoration: none;
          padding: 0 0 0.35em;
          line-height: 1.4;
          transition: all 1s;
          transition-timing-function: cubic-bezier(0.5, 1, 0.6, 1);
        }

        .vertical-title .content h3::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 1rem;
          height: 13rem;
          opacity: 0.8;
          left: 0;
          transform: scale3d(0, 1, 1);
          transform-origin: 0% 50%;
          transition: transform 0.3s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
        .vertical-title .content h3:hover,
        .vertical-title .content h3:focus {
          color: #ffff;
        }
        .vertical-title .content h3::before {
          background: #c1bdfc;
        }
        .vertical-title:hover .content h3::before,
        .vertical-title:focus .content h3::before {
          transform: scale3d(1, 1, 1);
        }
        @media (max-width: 500px) {
          .vertical-title h3 {
            font-size: 1rem;
          }
        }
      `}
    </style>
  </div>
);

export default VerticalTitle;
