import React from "react";
import Picture from "../components/picture";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleSplash from "../components/articleSplash";
import VerticalIndex from "../components/verticalIndex";
import Card from "../components/card";
import ArticleCard from "../components/articleCard";

import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import acid from "../data/style/acid";
import acceptation from "../data/style/acceptation";
import romantisme from "../data/style/romantisme";
import desir from "../data/shoes/desir";
import vesteAcid from "../data/style/vesteAcid";
import plateforme from "../data/shoes/plateforme";
import boheme from "../data/shoes/boheme";
import mango from "../data/shoes/mangoBottega";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <div className="parallax">
        <ArticleSplash
          className="grid-full"
          category={romantisme.category}
          title={romantisme.title}
          date={romantisme.date}
          picture={romantisme.picture}
        />
        <ArticleSplash
          className="grid-full"
          category={acceptation.category}
          title={acceptation.title}
          date={acceptation.date}
          picture={acceptation.picture}
        />
        <ArticleSplash
          className="grid-full"
          category={acid.category}
          title={acid.title}
          date={acid.date}
          picture={acid.picture}
        />
        <ArticleSplash
          className="grid-full"
          category={desir.category}
          title={desir.title}
          date={acid.date}
          picture={desir.picture}
        />
      </div>
      <Card>
        <VerticalIndex
          category={acid.category}
          title={acid.title}
          date={acid.date}
          picture={acid.picture}
        />
        <VerticalIndex
          category={mango.category}
          title={mango.title}
          date={mango.date}
          picture={mango.picture}
        />
      </Card>
      <div className="once">
        <ArticleCard
          className="grid-full"
          category={acceptation.category}
          title={acceptation.title}
          date={acceptation.date}
          picture={acceptation.picture}
        />
      </div>
      <Card>
        <VerticalIndex
          category={acid.category}
          title={acid.title}
          date={acid.date}
          picture={acid.picture}
        />
        <VerticalIndex
          category={mango.category}
          title={mango.title}
          date={mango.date}
          picture={mango.picture}
        />
        <VerticalIndex
          category={boheme.category}
          title={boheme.title}
          date={boheme.date}
          picture={boheme.picture}
        />
      </Card>
    </div>
    <style jsx global>{`
      /**************/
      /*Parallax*/
      /**************/

      .parallax {
        width: 100%;
      }
      .parallax .grid-full {
        display: flex;
        flex-direction: initial;
        padding-top: 1rem;
        background-color: #fcf9f5;
      }

      .parallax a:nth-child(even) .grid-full {
        display: flex;
        flex-direction: row-reverse !important;
      }
      @media (min-width: 300px) and (max-width: 623px) {
        .parallax .grid-full {
          margin-bottom: 1em;
          display: inherit;
          flex-direction: inherit;
        }
        .parallax a:nth-child(even) .grid-full {
          margin-bottom: 1em;
          display: inherit;
          flex-direction: inherit;
        }
      }
      /**************/
      /*Article-splash img*/
      /**************/

      .article-splash img {
        width: 100%;
        max-width: 47rem;
      }
      .parallax a:nth-child(2) .article-splash img {
        height: 42rem !important;
      }
      .parallax a:nth-child(4) .article-splash img {
        height: 33rem !important;
      }

      /**************/
      /*Article-splash title*/
      /**************/
      .card-title .article-title {
        padding: 1em;
        line-height: normal;
        writing-mode: inherit;
        writing-mode: tb-rl;
        transform: rotate(0deg);
        transform: rotate(0deg);
        display: -webkit-inline-box;
        text-align: inherit;
        text-align: center !important;
        display: flex !important;
      }

      @media {
        .parallax a:nth-child(even) .article-splash-title,
        .parallax a:nth-child(odd) .article-splash-title {
          height: auto;
          width: auto;
          margin: auto;
        }
      }
      /*********/
      /**Once**/
      /*********/
      .once > a > .grid-full {
        padding: 1rem;
      }
      .once > a > .article-card {
        display: inherit;
      }
      .once > img {
        max-width: 60vw;
      }
      .once a:nth-child(1) .article-splash-title {
        color: white;
        background-color: black;
      }

      @media (max-width: 720px) {
        .vertical-index {
          transform: translate3d(0, 0, 0);
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
