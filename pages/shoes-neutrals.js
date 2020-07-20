import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleBase from "../components/articleBase";
import article from "../data/shoes/neutrals";

const NeutralsPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture="/images/shoes/giuseppe8.jpg"
    >
      {article.content}
    </ArticleBase>

    <style jsx global>{`
      .article-base .text {
        display: flex;
        max-width: 30rem;
        margin: auto;
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

export default NeutralsPage;
