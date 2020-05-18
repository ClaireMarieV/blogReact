import React from "react";

import articles from "../data/articleStyle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import ArticleCard from "../components/articleCard";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";

import Grid from "../components/grid";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Card>
      {articles.map((article) => (
        <ArticleCard
          className=""
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Card>

    <style jsx global>{`
      .grid > a:nth-child(0n + 1) .article-splash-title .article-title h3:hover,
      .grid
        > a:nth-child(0n + 11)
        .article-splash-title
        .article-title
        h3:hover {
        color: whitesmoke;
      }
    `}</style>
  </Layout>
);

export default StylePage;
