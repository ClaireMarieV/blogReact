import React from "react";

const Tiles = ({ children }) => (
  <div className="tiles">
    {children}
    <style jsx global>{`
      /* Grille basique à 4 colonnes */
      .tiles {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-gap: 1rem;
        width: calc(85% - 1.875rem);
      }

      /* Classe .grid-full permettant à un élément de la grille de prendre toute la largeur */
      .tiles > * {
        overflow: hidden;
      }

      @media (max-width: 990px) {
       
      }

      @media (max-width: 860px) {
      
      }

      @media (max-width: 400px) {
      
      }
    `}</style>
  </div>
);
export default Tiles;
