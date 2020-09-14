import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleBase from "../components/articleBase";
import ArticleBaseTitle from "../components/articleBaseTitle";

import article from "../data/style/romantisme";

const RomantismePage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture=""
    >
      {article.content}
    </ArticleBase>

    <style jsx global>{`
      article-base img {
        max-width: 100%;
      }
    `}</style>
  </Layout>
);

export default RomantismePage;
