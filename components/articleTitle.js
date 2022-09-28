import React from "react";
import Link from "next/link";
import { fromArticle } from "../lib/link";

const ArticleTitle = ({ category, title }) => (
  <>
    <div className="article-title">
      <div className="content">
        <h1>{title}</h1>
      </div>
    </div>

    <style jsx>
      {`
        .article-title .content {
          font-size: 2.5rem;
          padding: 0 0 0.35em;
          z-index: 2;
          position: absolute;
          height: 5rem;
          opacity: 0.8;
          background-color: #ffff;
        }
        .article-title h1 {
          text-align: center;
          letter-spacing: 0.05rem;
          font-family: astoria-sans-condensed, sans-serif;
          margin-bottom: 0;
          font-weight: 400;
          webkit-stoke:
          line-height: 1.4;        }

    //EFFECT STRIKETHROUGH
        .content:before, .content:after {
          content: '';
          position: absolute;
          width: 0%;
          height: 0.5rem;
          top: 50%;
          margin-top: -0.5px;
        }

        .content:before  {
          right: -0.5px;
        }
        .content:after {
          left: 0.5px;
          background: #160F11;
          transition: 1s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

      .content:hover:after {
          width: 100%;
          transition: 0s;
          transition: width 1s cubic-bezier(0.22, 0.61, 0.36, 1);
        }

      //RESPONSIVE
        @media (max-width: 700px) {
          .article-title .content {
            font-size: 1.5rem;
            height: 2rem;
          }
        }
        @media (max-width: 400px) {
          .article-title .content {
            font-size: 1rem;

          }
        }
      `}
    </style>
  </>
);

export default ArticleTitle;
