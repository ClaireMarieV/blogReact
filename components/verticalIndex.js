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
        </a>
      </Link>
      <VerticalTitle title={title} />
    </div>
    <style jsx>{`
      .vertical-index {
        display: flex;
        text-decoration: none;
        width: 27vw;
        height: 75vh;
        transform: translate3d(0px, 0px, 0px);
        max-height: 100%;
        max-width: 100%;
        margin: 3rem;
      }
      .vertical-index:nth-child(odd) {
        transform: translate3d(-15.5vw, 0, 0);
      }

      /****Content*****/

      .vertical-index .content {
        overflow: hidden;
        margin: 0.5rem;
      }
      .vertical-index .content a {
        transition: all 0.2s ease-in;
      }
      .vertical-index .content a:hover {
        padding: 1.5em;
      }

      .content .vertical-title {
        display: flex;
      }
      .vertical-index a {
        display: flex;
        overflow: hidden;
        text-decoration: none;
        height: 100%;
        transform: scaleX(1);
        cursor: pointer;
      }
      .vertical-index a::before {
        content: "";
        z-index: -1;
        background: #121212;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        visibility: hidden;
      }

      @media (max-width: 800px) {
        .vertical-index {
          display: flex;
          margin: 2.5rem;
        }
        .vertical-index:nth-child(odd) {
          transform: translate3d(0, 0, 0);
        }
        .vertical-index .content {
          padding: 1.3rem;
          margin: -0.5rem;
        }
      }
    `}</style>
  </div>
);

export default VerticalIndex;
