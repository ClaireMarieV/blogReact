import React from "react";

import ArticleTitle from "./articleTitle";
import Picture from "./picture";

const Card = ({ category, title, children, picture, className, id }) => (
  <div className={"card " + (className || "")} id={id}>
    {children}
    <style jsx>{`
      /* Grille basique à 4 colonnes */
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1.5vw 3vw;
        padding-top: 0;
      }
      .card > * {
        overflow: hidden;
      }
      .card > .article-card {
        margin-bottom: 1em;
      }
      @media (max-width: 500px) {
        .card {
          margin: 1.5vw 7vw;
        }
      }
    `}</style>
  </div>
);

export default Card;
