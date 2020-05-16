import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import articles from "../data/articleLife";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {articles.map((article) => (
        <ArticleSplash
          className="article-group"
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>
  </Layout>
);

export default StylePage;
