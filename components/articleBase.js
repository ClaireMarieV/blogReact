import React from "react";

import ArticleBaseTitle from "./articleBaseTitle";
import Picture from "./picture";

const ArticleBase = ({ title, children, date, className, id }) => (
  <>
    <div className={"article-base" + (className || "")} id={id}>
      <ArticleBaseTitle title={title} date={date} />
      <div>{children}</div>
      <style jsx global>{`
        .article-base {
          margin: 7rem auto;
          max-width: 70rem;
        }
        .article-base img {
          width: 100%;
          object-fit: cover;
          margin: 5rem 0 0;
        }
      `}</style>
    </div>
  </>
);

export default ArticleBase;
