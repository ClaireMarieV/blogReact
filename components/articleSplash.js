import React from "react";
import ArticleTitle from "./articleTitle";
import Link from "next/link";
import { fromArticle } from "../lib/link";

const ArticleSplash = ({ category, title, date, picture, className, id }) => (
  <Link href={fromArticle({ category, title })}>
    <a>
      <div className={"article-splash " + (className || "")} id={id}>
        <img src={picture} />
        <div className="article-splash-title">
          <ArticleTitle category={category} title={title} date={date} />
        </div>
      </div>
      <style jsx>{`
        .article-splash {
          display: flex;
          flex-direction: column;
        }

        .article-splash .article-splash-title {
          padding-top: 1rem;
        }

        .article-splash img {
          height: 30rem;
          object-fit: cover;
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
