import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HorizontalScrolling from "../components/horizontalScrolling";
import ArticleBase from "../components/articleBase";
import ArticleBaseTitle from "../components/articleBaseTitle";

import article from "../data/style/acceptation";

const AcceptationPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase>
      <ArticleBaseTitle
        category={article.category}
        title={article.title}
        date={article.date}
      />
      {article.content}
    </ArticleBase>

    <style jsx global>{``}</style>
  </Layout>
);

export default AcceptationPage;
