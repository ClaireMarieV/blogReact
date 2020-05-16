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

      <ArticleSplash
        className="grid-full"
        category={acid.category}
        title={acid.title}
        date={acid.date}
        picture={acid.picture}
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
      <ArticleSplash
        className="grid-full"
        category={vesteAcid.category}
        title={vesteAcid.title}
        date={vesteAcid.date}
        picture={vesteAcid.picture}
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
        background-color: #fffbf9;
      }
      .parallax-horizontal .grid-full {
        display: flex;
        flex-direction: initial;
      }
      .horizontal-article {
        display: flex;
        flex-direction: row;
      }
      .article-splash img {
        width: 100%;
        max-width: 100%;
      }

      a .grid-full .article-splash-title {
        margin: 0;
        padding: 1em;
        color: #40363e;
        padding-top: 1rem;
      }

      a .grid-full .article-splash-title .article-title h3:hover {
        color: whitesmoke;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
