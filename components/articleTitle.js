import React from "react";

const ArticleTitle = ({ category, title, date }) => (
  <div className="article-title">
    <h4>{category}</h4>
    <h3>{title}</h3>
    <h5>{date}</h5>

    <style jsx>
      {`
        .article-title {
          text-align: center;
          display: flex;
          flex-direction: column;
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
      `}
    </style>
  </div>
);

export default ArticleTitle;
