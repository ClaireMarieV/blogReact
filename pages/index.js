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
      <Card className="card-index">
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
        margin-top: 1rem;
      }

      .parallax a:nth-child(2) .grid-full,
      .parallax a:nth-child(4) .grid-full {
        display: flex;
        flex-direction: row-reverse !important;
      }

      /**************/
      /*Card*/
      /**************/
      .card-index {
        display: flex !important;
        flex-direction: column !important;
        align-items: center;
        margin: 12.5vw auto auto;
        margin-top: 0.5rem;
      }

      .card-index:nth-child(odd) {
        transform: translate3d(-12.5px, 0px, 0px);
        transition: transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955),
          height 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      }

      /**************/
      /*Article-splas img*/
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
      a .article-splash-title {
        margin: 0;
        padding: 1em;
        color: #40363e;
        padding-top: 1rem;
      }
      .parallax a:nth-child(odd) .article-splash-title {
        height: 12rem;
        width: 24rem;
        color: whitesmoke;
        padding: 3rem;
        position: relative;
        right: 4rem;
        background-color: #232021;
      }
      .parallax a:nth-child(even) .article-splash-title {
        height: 12rem;
        width: 24rem;
        color: black;
        position: relative !important;
        top: 1rem;
        left: 3rem !important;
        padding: 4rem;
        background-color: #fff8f7 !important;
        /*  background-color: #dbb6b6 !important; */
      }
      /*********/
      /**Once**/
      /*********/
      .once {
        display: flex;
        margin: 1rem;
      }
      .once a:nth-child(1) .article-splash-title {
        color: white;
        background-color: black;
      }

      @media (max-width: 720px) {
        .vertical-index {
          transform: translate3d(0, 0, 0);
        }
        .parallax
      }
    `}</style>
  </Layout>
);

export default IndexPage;
