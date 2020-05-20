import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Grid from "../components/grid";
import ArticleCard from "../components/articleCard";
import articles from "../data/articleShoes";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {articles.map((article) => (
        <ArticleCard
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>

    <style jsx global>{`
      a:nth-child(1) .article-card,
      a:nth-child(6) .article-card,
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

export default StylePage;
