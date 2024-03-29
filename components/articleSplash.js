import React from "react";
import Picture from "./picture";
import Move from "./move";
import Link from "next/link";
import { fromArticle } from "../lib/link";

const ArticleSplash = ({ category, title, picture, className, id }) => (
  <div className="article-splash">
    <Link href={fromArticle({ category, title })}>
      <a>
        <div className="title">
          <Move>
            <h2>{title}</h2>
          </Move>
        </div>
        <div className="container">
          <Move>
            <span>{category}</span>
            <Picture className="picture" picture={picture} />
          </Move>
        </div>
      </a>
    </Link>
    <style jsx>{`
      .article-splash {
        display: flex;
        justify-content: center;
        align-items: center;
        align-self: auto;
        margin-bottom: 4rem;
      }

      .container {
        display: flex;
        justify-content: center;
        max-width: 67vw;
        width: 100%;
        transition: all 1s;
        opacity: 0.7;
      }
      .container:hover {
        transform: scale(0.85);
        transition: 1s;
        opacity: 1;
      }

      .title {
        position: absolute;
        margin-top: 65px;
        left: 25px;
        z-index: 1;
      }
      .title h2 {
        font-size: 5.5rem;
      }

      span {
        font-family: astoria-sans-condensed, sans-serif;
        font-weight: 100;
        font-size: 1.5rem;
        text-align: justify;
        color: #ffff;
      }

      //SMARTPHONE & TABLETTE

      @media (max-width: 800px) {
        .container {
          max-width: 67vw;
          width: 100%;
          margin: auto;
        }
        .title h2 {
          font-size: 3.5rem;
        }
      }
      @media (max-width: 400px) {
        .title h2 {
          font-size: 2.5rem;
        }
      }
    `}</style>
  </div>
);

export default ArticleSplash;
