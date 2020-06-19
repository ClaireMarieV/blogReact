import React from "react";

const HorizontalScrolling = ({ children, id, className }) => (
  <div className={"horizontal-scrolling" + (className || "")} id={id}>
    {children}
    <style jsx global>{`
      .horizontal-scrolling {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        overflow-x: scroll;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
      }

      .horizontal-scrolling > div {
        pointer-events: none;
        flex: 0 0 auto;
        width: 50vw;
        height: 87vh;
        margin: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </div>
);

export default HorizontalScrolling;
