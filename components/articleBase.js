import React from "react";

import ArticleTitle from "./articleTitle";
import Picture from "./picture";

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
    <Picture picture={picture} />
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
    `}</style>
  </div>
);

export default ArticleBase;
