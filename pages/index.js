import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <div className="parallax-horizontal">
        <ArticleSplash
          className="grid-full"
          category="STYLE"
          title="ACID"
          date="13.04.2020"
          picture="/images/style/acid.jpg"
        />
      </div>
      <ArticleSplash
        className="grid-full"
        category="STYLE"
        title="L'ACCEPTATION PAR LA DOUCEUR"
        date="06.04.2019"
        picture="/images/style/kimono1.jpg"
      />
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
        box-sizing: border-box;
        font-family: monospace;
        overflow-x: hidden;
      }
      div {
        width: 100%;
        align-content: center;
        place-content: center;
      }
      .grid > a .grid-full {
        grid-column: 1/6;
      }

      a .grid-full .article-splash-title {
        margin: 0;
        /*background-color: black;
        color: whitesmoke;*/
        padding: 1em;
      }
      a .grid-full .article-splash-title .article-title h3:hover {
        color: whitesmoke;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
