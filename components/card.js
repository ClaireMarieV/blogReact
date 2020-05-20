import React from "react";

import ArticleTitle from "./articleTitle";
import Picture from "./picture";

const Card = ({ category, title, children, date, picture, className, id }) => (
  <div className={"card" + (className || "")} id={id}>
    {children}
    <style jsx>{`
      /* Grille basique à 4 colonnes */
      .card {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        place-content: center;
        grid-gap: 1rem;
      }

      /* Classe .grid-full permettant à un élément de la grille de prendre toute la largeur */
      .card > * {
        overflow: hidden;
      }

      @media (max-width: 990px) {
        .card {
          width: 100%;
        }
      }

      @media (min-width: 601px) and (max-width: 860px) {
        .card {
          grid-template-columns: 1fr 1fr;
        }
      }

      @media (min-width: 401px) and (max-width: 600px) {
        .card {
          display: inline;
        }
        .card > .article-card {
          margin-bottom: 1em;
        }
      }
      @media (max-width: 400px) {
        .card {
          display: inline;
        }
        .card > .article-card {
          margin-bottom: 1em;
        }
      }
    `}</style>
  </div>
);

export default Card;
