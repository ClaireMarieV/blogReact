import React from "react";
import Picture from "./picture";

import ArticleTitle from "./articleTitle";
import Link from "next/link";
import { fromArticle } from "../lib/link";

const ArticleSplash = ({ category, title, date, picture, className, id }) => (
  <Link href={fromArticle({ category, title })}>
    <a>
      <div className={"article-splash " + (className || "")} id={id}>
        <Picture picture={picture} />
        <ArticleTitle title={title} />
      </div>
      <style jsx global>{`
        .article-splash img {
          max-height: 28rem;
          background-color: #fcf9f5;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 300px) and (max-width: 600px) {
         .article-splash {
            margin-bottom: 1em;

          }
        }
        @media (max-width: 400px) {
          .article-splash {
            margin-bottom: 1em;
          }
      `}</style>
    </a>
  </Link>
);

export default ArticleSplash;
