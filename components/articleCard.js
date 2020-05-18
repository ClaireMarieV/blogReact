import React from "react";
import Picture from "./picture";

import ArticleTitle from "./articleTitle";
import Link from "next/link";
import { fromArticle } from "../lib/link";

const ArticleCard = ({ category, title, date, picture, className, id }) => (
  <Link href={fromArticle({ category, title })}>
    <a>
      <div className={"article-card " + (className || "")} id={id}>
        <Picture picture={picture} />
        <div className="card-title">
          <ArticleTitle category={category} title={title} date={date} />
        </div>
      </div>
      <style jsx global>{`
        .article-card {
          display: flex;
          flex-direction: column;
        }
        .article-card img {
          height: 28rem;
        }

        .article-card .card-title .article-title h3 {
          font-size: 1.1em;
        }
      `}</style>
      <style jsx>{`

        @media (min-width: 401px) and (max-width: 600px) {
         .article-card {
            margin-bottom: 1em;
          }
        }
        @media (max-width: 400px) {
          .article-card {
            margin-bottom: 1em;
          }
      `}</style>
    </a>
  </Link>
);

export default ArticleCard;
