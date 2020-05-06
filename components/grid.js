import React from "react";

const Grid = ({ children }) => (
  <div className="grid">
    {children}
    <style jsx global>{`
      /* Grille basique à 4 colonnes */
      .grid {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-gap: 1rem;
        width: calc(85% - 1.875rem);
      }

      /* Classe .grid-full permettant à un élément de la grille de prendre toute la largeur */
      .grid > * {
        overflow: hidden;
      }

      @media (max-width: 990px) {
        .grid {
          width: 100%;
        }
      }

      @media (min-width: 601px) and (max-width: 860px) {
        .grid {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }
        .grid > a:nth-child(0n + 1) {
          grid-column: 1/4;
        }
      }

      @media (min-width: 401px) and (max-width: 600px) {
        .grid {
          display: inline;
        }
        .grid > .article-splash {
          margin-bottom: 1em;
        }
      }
      @media (max-width: 400px) {
        .grid {
          display: inline;
        }
        .grid > .article-splash {
          margin-bottom: 1em;
        }
      }
    `}</style>
  </div>
);
export default Grid;
