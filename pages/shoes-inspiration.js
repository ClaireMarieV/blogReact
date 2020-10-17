import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleBase from "../components/articleBase";
import ArticleBaseTitle from "../components/articleBaseTitle";
import article from "../data/shoes/mangoBottega";

const MangoPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase>
      <ArticleBaseTitle title={article.title} date={article.date} />
      {article.content}
    </ArticleBase>

    <style jsx global>{``}</style>
  </Layout>
);

export default MangoPage;
