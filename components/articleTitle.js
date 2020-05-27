import React from "react";

const ArticleTitle = ({ category, title, date }) => (
  <div className="article-title">
    <div className="content">
      <h3>{title}</h3>
      <h4>{date}</h4>
    </div>

    <style jsx>
      {`
        .article-title {
          text-align: right;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          display: flex;
          line-height: 1.875vw;
          transition: all 0.2s ease-in;
        }
        .article-title:hover {
          padding: 0.5em;
        }
        .article-title .content {
          margin: auto;
        }

        .article-title h4 {
          font-family: astoria-sans-condensed, sans-serif;
          font-weight: 100;
          font-size: 1.3rem;
          margin-top: 0.5rem;
        }

        .article-title h3 {
          text-align: center;
          letter-spacing: -0.03rem;
          font-family: arboria, sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 1.2em;
          margin-bottom: 0.5em;
        }

        .article-title h3:hover {
          color: #b36353;
        }

        .article-title h5 {
          font-family: astoria-sans-condensed, sans-serif;
          margin-bottom: 0;
          font-weight: 100;
          font-size: 0.85rem;
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
