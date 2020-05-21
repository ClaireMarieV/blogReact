import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleCard from "../components/articleCard";
import Grid from "../components/grid";
import articles from "../data/articleLife";

const LifePage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {articles.map((article) => (
        <ArticleCard
          className="article-group"
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>
    <style jsx>{`
      a:nth-child(2) .article-card,
      a:nth-child(5) .article-card,
      a:nth-child(9) .article-card {
        background-color: #f7d9be;
      }
      a:nth-child(3) .article-card,
      a:nth-child(7) .article-card {
        background-color: black;
        color: white;
      }
    `}</style>
  </Layout>
);

export default LifePage;
