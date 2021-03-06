import React from "react";
import Picture from "./picture";

import CardTitle from "./cardTitle";
import Link from "next/link";
import { fromArticle } from "../lib/link";

const ArticleCard = ({ category, title, date, picture, className, id }) => (
  <Link href={fromArticle({ category, title })}>
    <a>
      <div className={"article-card " + (className || "")} id={id}>
        <Picture picture={picture} />
        <CardTitle title={title} />
      </div>
      <style jsx global>{`
        .article-card {
          display: flex;
        }
        .article-card img {
          height: 100%;
          width: 100%;
          max-height: 28rem;
        }
        .article-card .card-title .article-title h3 {
          font-size: 1.1em;
        }
        .article-card .card-title {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 401px) and (max-width: 600px) {
         .article-card {
            margin-bottom: 1rem;
            margin: 1rem;
          }
        }
        @media (max-width: 400px) {
          .article-card {
            margin: 1em;
            margin: 1rem;
          }
      `}</style>
    </a>
  </Link>
);

export default ArticleCard;
