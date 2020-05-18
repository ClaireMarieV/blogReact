import React from "react";
import Picture from "../components/picture";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleSplash from "../components/articleSplash";
import Card from "../components/card";
import ArticleCard from "../components/articleCard";

import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import acid from "../data/style/acid";
import acceptation from "../data/style/acceptation";
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
        <ArticleCard
          className="article-card"
          category={vesteAcid.category}
          title={vesteAcid.title}
          date={vesteAcid.date}
          picture={vesteAcid.picture}
        />
        <ArticleCard
          className="article-card"
          category={acid.category}
          title={acid.title}
          date={acid.date}
          picture={acid.picture}
        />
        <ArticleCard
          className="article-card"
          category={mango.category}
          title={mango.title}
          date={mango.date}
          picture={mango.picture}
        />
        <ArticleCard
          className="article-card"
          category={boheme.category}
          title={boheme.title}
          date={boheme.date}
          picture={boheme.picture}
        />
      </Card>
      <div className="twice">
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
      </div>
      <Card>
        <ArticleCard
          className="article-card"
          category={vesteAcid.category}
          title={vesteAcid.title}
          date={vesteAcid.date}
          picture={vesteAcid.picture}
        />
        <ArticleCard
          className="article-card"
          category={acid.category}
          title={acid.title}
          date={acid.date}
          picture={acid.picture}
        />
        <ArticleCard
          className="article-card"
          category={mango.category}
          title={mango.title}
          date={mango.date}
          picture={mango.picture}
        />
        <ArticleCard
          className="article-card"
          category={boheme.category}
          title={boheme.title}
          date={boheme.date}
          picture={boheme.picture}
        />
      </Card>
    </div>
    <style jsx global>{`
      main {
        overflow-x: hidden;
        overflow-y: auto;
        perspective: 2px;
      }
      html,
      body {
        margin: 0;
        padding: 0;
        border: 0;
        font-family: monospace;
        overflow-x: hidden;
      }
      .index {
        display: flex;
        flex-direction: column;
      }

      /*  div {

      }*/
      /**************/
      /*Parallax*/
      /**************/

      .parallax {
        background-color: #fff8f7;
        width: 100%;
      }
      .parallax .grid-full {
        display: flex;
        flex-direction: initial;
      }

      .parallax a:nth-child(2) .grid-full,
      .parallax a:nth-child(4) .grid-full {
        display: flex;
        flex-direction: row-reverse !important;
        background-color: #d6a095;
      }

      /**************/
      /*Card*/
      /**************/

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
      /**Twice**/
      /*********/
      .twice {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 1rem;
        margin: 1rem;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
