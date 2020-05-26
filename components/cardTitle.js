import React from "react";

const ArticleTitle = ({ category, title, date }) => (
  <div className="card-title">
    <div className="content">
      <h3>{title}</h3>
    </div>

    <style jsx>
      {`
        .card-title {
          text-align: right;
          display: flex;
        }
        .card-title .content {
          margin: auto;
        }

        .card-title h4 {
          font-family: astoria-sans-condensed, sans-serif;
          font-weight: 100;
          font-size: 1.3rem;
          margin-top: 0.5rem;
        }

        .card-title h3 {
          text-align: center;
          letter-spacing: -0.03rem;
          font-family: arboria, sans-serif;
          font-weight: 500;
          font-style: normal;
          font-size: 1.2em;
          margin-bottom: 0.5em;
        }

        .card-title h3:hover {
          color: #b36353;
        }

        .card-title a {
          text-decoration: none;
        }
      `}
    </style>
  </div>
);

export default ArticleTitle;
