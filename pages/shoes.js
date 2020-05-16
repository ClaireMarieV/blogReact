import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import articles from "../data/articleShoes";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {articles.map((article) => (
        <ArticleSplash
          className="article-group"
          id="article-shoes"
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>

    <style jsx global>{`
      .grid > a:nth-child(0n + 3) {
        grid-column: 3/5 !important;
      }
      .grid > a:nth-child(0n + 9) {
        grid-column: 2/5 !important;
      }

      .grid > a:nth-child(0n + 1) .article-splash-title,
      .grid > a:nth-child(0n + 9) .article-splash-title,
      .grid > a:nth-child(0n + 10) .article-splash-title {
        margin: 0;
        background-color: black;
        color: whitesmoke;
        padding: 1em;
      }
      .grid > a:nth-child(0n + 1) .article-splash-title .article-title h3:hover,
      .grid
        > a:nth-child(0n + 9)
        .article-splash-title
        .article-title
        h3:hover {
        color: whitesmoke;
      }
    `}</style>
  </Layout>
);

export default StylePage;
