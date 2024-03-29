import React from "react";

import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Picture from "./picture";
const ArticleBase = ({ children, title, className, id }) => (
  <>
    <div className={"article-base" + (className || "")} id={id}>
      <div>{children}</div>

      <style jsx global>{`
        .article-base {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          grid-template-columns: auto;
          margin: auto;
          width: 60vw;
          padding-top: 10rem;
        }
        .article-base img {
          width: 100%;
          object-fit: cover;
          margin: 5rem 0 0;
        }
        @media (max-width: 700px) {
          .article-base {
            width: auto;
          }
        }
      `}</style>
    </div>
  </>
);

export default ArticleBase;
