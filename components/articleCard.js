import React from "react";
import Picture from "./picture";

import CardTitle from "./CardTitle";
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
          /*display: flex;*/
          flex-direction: column;
          background-color: #fff8f7;
        }
        .article-card img {
          height: 28rem;
          width: 100%;
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
