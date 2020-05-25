import React from "react";

import ArticleTitle from "./articleTitle";
import Picture from "./picture";

const Card = ({ category, title, children, date, picture, className, id }) => (
  <div className={"card " + (className || "")} id={id}>
    {children}
    <style jsx>{`
      /* Grille basique à 4 colonnes */
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1.5vw auto auto;
        padding-top: 0;
      }

      /* Classe .grid-full permettant à un élément de la grille de prendre toute la largeur */
      .card > * {
        overflow: hidden;
      }

      @media (min-width: 501px) and (max-width: 860px) {
        .card {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 500px) {
        .card {
          grid-template-columns: minmax(0, 1fr);
        }
        .card > .article-card {
          margin-bottom: 1em;
        }
      }
        .card > .article-card {
          margin-bottom: 1em;
        }
      }
    `}</style>
  </div>
);

export default Card;
