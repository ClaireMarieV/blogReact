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
          transition: all 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
          z-index: 2;
          content: "";
          position: absolute;
          height: 5rem;
          opacity: 0.8;
          background-color: #ffff;
          transform: scale3d(1, 1, 1);
          transform-origin: 0% 50%;
          transition: transform 0.5s;
          transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
        }

        // .article-title:hover .content h1::before,
        // .article-title:focus .content h1::before {
        //   transform: scale3d(1, 1, 1);
        // }

        .article-title h1 {
          text-align: center;
          letter-spacing: 0.05rem;
          font-family: astoria-sans-condensed, sans-serif;
          margin-bottom: 0;
          font-weight: 400;
          webkit-stoke:
          line-height: 1.4;
          color: #160F11;
        }
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
