import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HorizontalScrolling from "../components/horizontalScrolling";
import ArticleBase from "../components/articleBase";
import article from "../data/style/acceptation";

const AcceptationPage = () => (
  <Layout>
    <SEO title="Home" />
    <HorizontalScrolling>
      <ArticleBase
        category={article.category}
        title={article.title}
        date={article.date}
      />
      {article.content}
    </HorizontalScrolling>

    <style jsx global>{``}</style>
  </Layout>
);

export default AcceptationPage;
