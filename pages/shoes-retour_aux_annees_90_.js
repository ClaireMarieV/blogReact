import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleBase from "../components/articleBase";
import ArticleBaseTitle from "../components/articleBaseTitle";
import article from "../data/shoes/plateforme";

const PlateformePage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase>
      <ArticleBaseTitle title={article.title} date={article.date} />
      {article.content}
    </ArticleBase>

    <style jsx global>{`
      .article-base img {
        width: 100%;
      }
      .imgText {
        display: flex;
      }

      @media (max-width: 600px) {
        .imgText {
          display: block;
        }
      }
      .article-base .text {
        display: flex;
      }
    `}</style>
  </Layout>
);

export default PlateformePage;
