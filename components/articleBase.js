import React from "react";

import ArticleTitle from "./articleTitle";

const ArticleBase = ({
  category,
  title,
  children,
  date,
  picture,
  className,
  id,
}) => (
  <div className={"article-base" + (className || "")} id={id}>
    <img src={picture} />
    <div className="article-base-title">
      <ArticleTitle title={title} date={date} />
    </div>
    <div className="paragraphe">
      <p>{children}</p>
    </div>
    <style jsx global>{`
      .article-base .article-base-title {
        margin-top: 1rem;
      }
      .article-base {
        margin: 1em;
      }
    `}</style>
  </div>
);

export default ArticleBase;
