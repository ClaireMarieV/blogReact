import React from "react";

const ArticleTitle = ({ title }) => (
  <div className="article-title">
    <div className="content">
      <h1>{title}</h1>
    </div>

    <style jsx>
      {`
        .article-title .content h1 {
          padding: 0 0 0.35em;
          line-height: 1.4;
          transition: all 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }

        .article-title .content h1::before {
          content: "";
          position: absolute;
          z-index: -1;
          width: 16rem;
          height: 5rem;
          opacity: 0.9;
          transform: scale3d(0, 1, 1);
          transform-origin: 0% 50%;
          transition: transform 0.2s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }
        .article-title h1:hover,
        .article-title h1:focus {
          color: #ffff;
        }
        .article-title h1::before {
          background: #563440;
        }
        .article-title:hover .content h1::before,
        .article-title:focus .content h1::before {
          transform: scale3d(1, 1, 1);
        }

        .article-title h1 {
          text-align: center;
          letter-spacing: 0.05rem;
          font-family: astoria-sans-condensed, sans-serif;
          margin-bottom: 0;
          font-weight: 300;
        }
        .article-title h1 {
          color: #ffff;
        }

        .article-title a {
          text-decoration: none;
        }
        @media (max-width: 623px) {
          .article-title {
            line-height: normal;
            writing-mode: inherit;
            writing-mode: tb-rl;
            transform: rotate(0deg);
            transform: rotate(0deg);
            display: -webkit-inline-box;
            text-align: inherit;
          }
        }
      `}
    </style>
  </div>
);

export default ArticleTitle;
