import React from "react";

import Picture from "./picture";

const ArticleBase = ({ children, className, id }) => (
  <>
    <div className={"article-base" + (className || "")} id={id}>
      <div>{children}</div>

      <style jsx global>{`
        .article-base {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          margin: auto;
          width: 60vw;
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
