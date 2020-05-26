import React from "react";
import Picture from "./picture";

import VerticalTitle from "./verticalTitle";
import Link from "next/link";
import { fromArticle } from "../lib/link";

const VerticalIndex = ({ category, title, date, picture, className, id }) => (
  <div className={"vertical-index " + (className || "")} id={id}>
    <div className="content">
      <Link href={fromArticle({ category, title })}>
        <a>
          <Picture picture={picture} />
          <VerticalTitle category={category} title={title} date={date} />
        </a>
      </Link>
    </div>
    <style jsx>{`
        .vertical-index {
          display: flex;
          overflow: hidden;
          text-decoration: none;
          max-width: 43vw;
          max-height: 51.75vw;
          transform: translate3d(0px, 0px, 0px);
          height: 100%;
          margin: 3rem;
        }

        .vertical-index:nth-child(odd) {
          transform: translate3d(-15.5vw, 0, 0);
        }

        .vertical-index .content{
          height: 100%
          width: 100%;
        }
        .vertical-index a  {
          display: flex;
          overflow: hidden;
          text-decoration: none;
          height: 100%;
          }

        @media (max-width:720px){
          .vertical-index {
            min-width: 100% !important;
            display: flex;
            margin: 2.5rem;
          }
        }
        @media (max-width:750px){
          .vertical-index:nth-child(odd) {
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
  </div>
);

export default VerticalIndex;
