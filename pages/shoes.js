import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import ArticleCard from "../components/articleCard";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import articles from "../data/articleShoes";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {articles.map((article) => (
        <ArticleCard
          className="article-group"
          id="article-shoes"
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>

    <style jsx global>{``}</style>
  </Layout>
);

export default StylePage;
