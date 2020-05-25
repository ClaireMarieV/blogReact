import React from "react";

import ArticleTitle from "./articleTitle";
import Picture from "./picture";

const ArticleBase = ({ category, title, children, date, className, id }) => (
  <div className={"article-base" + (className || "")} id={id}>
    <div className="article-base-title">
      <ArticleTitle title={title} date={date} />
    </div>
    <div>{children}</div>
    <style jsx global>{`
      .article-base .article-base-title {
        margin-top: 1rem;
      }
      .article-base img {
        max-height: 43rem;
        width: 100%;
        object-fit: cover;
      }
    `}</style>
  </div>
);

export default ArticleBase;
