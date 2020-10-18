import React from "react";
import Picture from "./picture";

import ArticleTitle from "./articleTitle";
import Link from "next/link";
import Move from "./move";
import { fromArticle } from "../lib/link";

const ArticleSplash = ({ category, title, date, picture, className, id }) => (
  <Link href={fromArticle({ category, title })}>
    <a>
      <div className={"article-splash " + (className || "")} id={id}>
        <div className="title">
          <ArticleTitle title={title} />
        </div>
        <div className="container">
          <Picture picture={picture} />
        </div>
      </div>
      <style jsx>{`
        .article-splash {
          display: flex;
          height: auto;
          justify-content: center;
          align-items: center;
          align-self: auto;
        }

        a {
          display: flex;
          flex-direction: row;
          justify-content: center;
          flex-wrap: nowrap;
          align-items: center;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 4rem;
          transform: scale(1.15);
          transition: 2s;
        }
        a:hover {
          transform: scale(1.05);
          transition: 1s;
        }

        .container {
          margin: 4rem;
          flex-direction: column;
          max-width: 39vw;
          width: 100%;
        }

        .title {
          position: absolute;
          z-index: 3;
          font-size: 2.5rem;
        }
      `}</style>

      <style jsx>{`
        //SMARTPHONE & TABLETTE

        @media (max-width: 800px) {
          .article-splash {
            margin: auto;
          }
          .title {
            font-size: 1rem;
          }
          .container {
            max-width: 67vw;
          }
        }
        @media (max-width: 400px) {
          .container {
            width: 85vw;
            margin: 0;
          }
        }
      `}</style>
    </a>
  </Link>
);

export default ArticleSplash;
