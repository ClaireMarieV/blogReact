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
    `}</style>
  </div>
);

export default Card;
