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
        <div className="article-splash-title">
          <ArticleTitle category={category} title={title} date={date} />
        </div>
      </div>
      <style jsx global>{`
        .article-splash img {
          height: 25rem;
        }
      `}</style>
      <style jsx>{`

        .article-splash .article-splash-title {
          padding-top: 1rem;
        }
        @media (min-width: 401px) and (max-width: 600px) {
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
