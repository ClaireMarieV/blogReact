import React from "react";
import Picture from "./picture";

import ArticleBaseTitle from "./articleBaseTitle";
import Link from "next/link";
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
          transform: scale(0.9);
          transition: all 2s;
        }
        a:hover {
          transform: scale(1.1);
          transition: all 2s;
          color: white;
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
          color: #ffd500;
        }
        .article-splash {
          opacity: 0.85;
        }
        .article-splash:hover {
          opacity: 1;
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
