import React from "react";
import Picture from "./picture";

import ArticleTitle from "./articleTitle";
import Link from "next/link";
import Move from "./move";
import { fromArticle } from "../lib/link";

const ArticleSplash = ({ category, title, picture, className, id }) => (
  <Link href={fromArticle({ category, title })}>
    <a>
      <div className="title">
        <ArticleTitle title={title} category={category} />
      </div>
      <div className={"article-splash " + (className || "")} id={id}>
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
          transform: scale(1);
          transition: 1s;
        }
        a:hover {
          transform: scale(0.85);
          transition: 1s;
        }

        .container {
          flex-direction: column;
          max-width: 39vw;
          width: 100%;
        }
      `}</style>

      <style jsx>{`
        //SMARTPHONE & TABLETTE

        @media (max-width: 800px) {
          .article-splash {
            margin: auto;
          }

          .container {
            max-width: 67vw;
            width: 100%;
            margin: auto;
          }
          .title {
            font-size: 1.5rem;
          }
        }
        @media (max-width: 400px) {
          .title {
            font-size: 1rem;
          }
        }
      `}</style>
    </a>
  </Link>
);

export default ArticleSplash;
