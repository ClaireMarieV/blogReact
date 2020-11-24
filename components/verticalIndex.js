import React from "react";
import Picture from "./picture";

import VerticalTitle from "./verticalTitle";
import Link from "next/link";
import FramerArticles from "./framerArticles";
import { fromArticle } from "../lib/link";

const VerticalIndex = ({
  category,
  title,
  date,
  picture,
  className,
  id,
  autoLink = true,
}) => {
  const a = (
    <a style={{ display: "flex" }}>
      <FramerArticles>
        <Picture picture={picture} />
      </FramerArticles>
      <VerticalTitle category={category} title={title} date={date} />
    </a>
  );
  const link = autoLink ? (
    <Link href={fromArticle({ category, title })}>{a}</Link>
  ) : (
    a
  );

  return (
    <div className={"vertical-index " + (className || "")} id={id}>
      <div className="content">{link}</div>
      <style jsx>{`
          .vertical-index {
            display: flex;
            overflow: hidden;
            text-decoration: none;
            transform: scaleX(1);
            cursor: pointer;
            width: 53vw;
            transform: translate3d(0px, 0px, 0px);
            height: 100%;
          }
          .vertical-index:nth-child(odd) {
            transform: translate3d(-15.5vw, 0, 0);
            animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
          }
           .vertical-index .content{
            height: 100%
            transition: transform .5s cubic-bezier(.455,.03,.515,.955);
            transition: transform .5s cubic-bezier(.455,.03,.515,.955);
            position: relative;
            width: 100%;
            margin: 3rem;
            display:flex;
          }
          a {

          }
          .vertical-index  a  {
            overflow: hidden;
            text-decoration: none;
            transform: scaleX(1);
            cursor: pointer;
            transition: transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
            cursor: pointer;
            height: 100%;
          }
          @media (max-width: 700px) {
            .vertical-index {
            display: contents;
            }
          }

        `}</style>
    </div>
  );
};

export default VerticalIndex;
