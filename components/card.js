import React from "react";

import ArticleTitle from "./articleTitle";
import Picture from "./picture";

const Card = ({ category, title, children, date, picture, className, id }) => (
  <div className={"card" + (className || "")} id={id}>
    {children}
    <style jsx>{`
      .card {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        margin: 1em;
        place-content: center;
        grid-gap: 1rem;
      }

      @media (min-width: 800px) and (max-width: 1000px) {
        .card {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
      }

      @media (min-width: 461px) and (max-width: 799px) {
        .card {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .grid > .article-splash {
          margin-bottom: 1em;
        }
      }
      @media (max-width: 460px) {
        .card {
          grid-template-columns: repeat(1, minmax(0, 1fr));
        }
        .card > .article-splash {
          margin-bottom: 1em;
        }
      }
    `}</style>
  </div>
);

export default Card;
