import React from "react";

const Grid = ({ children }) => (
  <div className="grid">
    {children}
    <style jsx global>{`
      /* Grille basique à 4 colonnes */
      .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        place-content: center;
        grid-gap: 1rem;
      }

      /* Classe .grid-full permettant à un élément de la grille de prendre toute la largeur */
      .grid > * {
        overflow: hidden;
      }

      @media (min-width: 601px) and (max-width: 860px) {
        .grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
      }

      @media (max-width: 600px) {
        .grid {
          grid-template-columns: minmax(0, 1fr);
        }

        .grid > .article-splash {
          margin-bottom: 1em;
        }
      }

        .grid > .article-splash {
          margin-bottom: 1em;
        }
      }
    `}</style>
  </div>
);
export default Grid;
