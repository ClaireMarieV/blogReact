import React from "react";

import articles from "../data/articleStyle";
import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleCard from "../components/articleCard";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";

import Grid from "../components/grid";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {articles.map((article) => (
        <ArticleCard
          className=""
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>

    <style jsx global>{`
      .grid > a:nth-child(0n + 1) .article-splash-title .article-title h3:hover,
      .grid
        > a:nth-child(0n + 11)
        .article-splash-title
        .article-title
        h3:hover {
        color: whitesmoke;
      }
      a:nth-child(2) .article-card,
      a:nth-child(5) .article-card,
      a:nth-child(9) .article-card {
        background-color: #d6a095;
      }
      a:nth-child(3) .article-card,
      a:nth-child(7) .article-card {
        background-color: black;
        color: white;
      }
    `}</style>
  </Layout>
);

export default StylePage;
