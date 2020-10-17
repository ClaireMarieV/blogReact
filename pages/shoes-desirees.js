import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleBase from "../components/articleBase";
import article from "../data/shoes/desir";

const DesirPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture="/images/shoes/doc.jpg"
    >
      {article.content}
    </ArticleBase>

    <style jsx global>{`
      .article-base img {
        grid-column: 1/5;
        width: 100%;
        height: 40rem;
        object-fit: cover;
      }
    `}</style>
  </Layout>
);

export default DesirPage;
