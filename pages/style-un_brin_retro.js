import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleBase from "../components/articleBase";
import article from "../data/style/vesteAcid";

const RetroPage = () => (
  <Layout>
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture="/images/style/.jpg"
    >
      {article.content}
    </ArticleBase>

    <style jsx global>{`
      .article-base .text {
        display: flex;
      }
    `}</style>
  </Layout>
);

export default RetroPage;
