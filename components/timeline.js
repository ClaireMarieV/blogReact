import React from "react";

const Timeline = ({ text, category, title, date, picture, className, id }) => (
  <div className={"timeline " + (className || "")} id={id}>
    <div className="text">
      <h5>{text}</h5>
    </div>
    <div className="title">
      <a>
        <h4>{title}</h4>
      </a>
      <h5>{category}</h5>
    </div>
    <style jsx>{`
      .timeline {
        text-align: center;
      }
      .timeline > h4,
      h5 {
        margin: 0;
      }
      .timeline h4 {
        color: black;
      }
      .timeline h5 {
        margin: 0.5em;
        font-family: astoria-sans-condensed, sans-serif;
        font-weight: 100;
        font-size: 1.2rem;
        margin-bottom: 0.5em;
      }
    `}</style>
  </div>
);

export default Timeline;
