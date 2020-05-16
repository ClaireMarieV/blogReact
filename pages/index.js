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
      <div className="horizontal-article">
        <ArticleSplash
          className="grid-full"
          category={acid.category}
          title={acid.title}
          date={acid.date}
          picture={acid.picture}
        />
      </div>
    </Grid>
    <style jsx global>{`
      main {
        height: 100vh;
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
        background-color: #fff7f4;
      }
      .parallax-horizontal .grid-full {
        display: flex;
        flex-direction: initial;
      }
      .article-splash img {
        height: 27rem;
        width: 100%;
        max-width: 27em;
      }

      a .grid-full .article-splash-title {
        margin: 0;
        padding: 1em;
        color: #a03d61;
        padding-top: 6rem;
      }
      a .grid-full .article-splash-title .article-title h3:hover {
        color: whitesmoke;
      }
      .horizontal-article > a .article-splash-title {
        color: #40363e;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
