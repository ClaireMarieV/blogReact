import React from "react";

import ArticleBaseTitle from "./articleBaseTitle";
import Picture from "./picture";

const ArticleBase = ({ title, children, date, className, id }) => (
  <div className={"article-base" + (className || "")} id={id}>
    <ArticleBaseTitle title={title} date={date} />
    <div>{children}</div>
    <style jsx global>{`
      .article-base {
        margin: auto;
      }
      .article-base-title {
        margin: 2rem;
      }
      .article-base .article-base-title .article-title h1 {
        font-family: freight-big-pro, serif;
        font-weight: 500;
        font-style: italic;
        letter-spacing: -0.03rem;
      }
      .article-base img {
        max-width: 50rem;
        width: 100%;
        object-fit: cover;
        margin: 5rem 0 0;
      }
    `}</style>
  </div>
);

export default ArticleBase;
