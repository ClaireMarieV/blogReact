import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleBase from "../components/articleBase";
import article from "../data/style/ombre";

const OmbrePage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture="/images/style/tie.jpg"
    >
      {article.content}
    </ArticleBase>

    <style jsx global>{`
      .article-base img {
        grid-column: 1/5;
        width: 100%;
        height: 20rem;
        object-fit: cover;
      }
      .imgRow {
        width: 100%;
        height: 20rem;
        display: flex;
      }
      .text {
        display: flex;
      }
    `}</style>
  </Layout>
);

export default OmbrePage;
