import React from "react";
import Picture from "./picture";

import ArticleBaseTitle from "./articleBaseTitle";
import Link from "next/link";
import Move from "./move";
import { fromArticle } from "../lib/link";

const ArticleSplash = ({ category, title, date, picture, className, id }) => (
  <Link href={fromArticle({ category, title })}>
    <a>
      <div className={"article-splash " + (className || "")} id={id}>
        <div className="title">
          <ArticleBaseTitle title={title} />
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
          transform: scale(0.95);
          transition: all 1.5s;
        }
        a:hover {
          transform: scale(1.05);
          transition: all 1s;
        }
        a:hover .title {
          color: white;
        }
        .container {
          margin: 1rem;
          flex-direction: column;
          width: 41vw;
        }

        .title {
          position: absolute;
          z-index: 3;
          font-size: 2rem;
        }
        .article-splash:hover {
          opacity: 0.9;
        }
        .article-splash .title {
          transition: 1s;
        }
        .article-splash:hover .title {
          transform: translate(-280px, 0);
          transition: 1s;
          opacity: 0;
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
