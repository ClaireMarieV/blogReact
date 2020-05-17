import React from "react";
import Picture from "../components/picture";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import acid from "../data/style/acid";
import acceptation from "../data/style/acceptation";
import desir from "../data/shoes/desir";
import vesteAcid from "../data/style/vesteAcid";
import plateforme from "../data/shoes/plateforme";
import boheme from "../data/shoes/boheme";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <div className="parallax-horizontal">
        <ArticleSplash
          className="grid-full"
          category={acceptation.category}
          title={acceptation.title}
          date={acceptation.date}
          picture={acceptation.picture}
        />
      </div>
      <div className="parallax-horizontal">
        <ArticleSplash
          className="grid-full"
          category={acid.category}
          title={acid.title}
          date={acid.date}
          picture={acid.picture}
        />
      </div>
      <div className="parallax-horizontal">
        <ArticleSplash
          className="grid-full"
          category={desir.category}
          title={desir.title}
          date={acid.date}
          picture={desir.picture}
        />
      </div>
      <div className="parallax-horizontal">
        <ArticleSplash
          className="grid-full"
          category={plateforme.category}
          title={plateforme.title}
          date={plateforme.date}
          picture={plateforme.picture}
        />
      </div>

      <ArticleSplash
        category={vesteAcid.category}
        title={vesteAcid.title}
        date={vesteAcid.date}
        picture={vesteAcid.picture}
      />
      <ArticleSplash
        category={acid.category}
        title={acid.title}
        date={acid.date}
        picture={acid.picture}
      />
      <ArticleSplash
        category={boheme.category}
        title={boheme.title}
        date={boheme.date}
        picture={boheme.picture}
      />
    </Grid>
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
      div {
        width: 100%;
        align-content: center;
        place-content: center;
      }
      .parallax-horizontal {
        grid-column: 1/6;
        background-color: #f7d9cf;
      }
      .parallax-horizontal .grid-full {
        display: flex;
        flex-direction: initial;
      }
      .parallax-horizontal:nth-child(2) .grid-full,
      .parallax-horizontal:nth-child(4) .grid-full {
        display: flex;
        flex-direction: row-reverse !important;
        background-color: #edc0bd;
      }
      .parallax-horizontal:nth-child(2) .article-splash img {
        height: 42rem !important;
      }
      .parallax-horizontal:nth-child(4) .article-splash img {
        height: 33rem !important;
      }

      .horizontal-article {
        display: flex;
        flex-direction: row;
      }
      .article-splash img {
        width: 100%;
      }
      a .grid-full .article-splash-title {
        margin: 0;
        padding: 1em;
        color: #40363e;
        padding-top: 1rem;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
