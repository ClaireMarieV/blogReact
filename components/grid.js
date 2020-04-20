import React from "react"

const Grid = ({children}) => (
    <div className = 'grid'>
        {children}
        <style jsx global>{`
            /* Grille basique à 4 colonnes */
            .grid {
                display: grid;
                grid-template-columns: repeat(4, minmax(0, 1fr));
                grid-gap: 1rem;
                width: calc(85% - 1.875rem);}

            /* Classe .grid-full permettant à un élément de la grille de prendre toute la largeur */
            .grid > * {
                overflow: hidden;
            }

            @media (max-width: 990px) {
                .grid {
                    width: 100%;
                }
            }

            @media (max-width: 860px) {
                .grid {
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    
                }

                .grid > .grid-full {
                    grid-column: 1/3;
                }
            }

            @media (max-width: 400px) {
                .grid {
                    grid-template-columns: repeat(1, minmax(0, 1fr));
                }

                .grid > .grid-full {
                    grid-column: 1/2;
                }
            }
        `}</style>
    </div>
)
export default Grid