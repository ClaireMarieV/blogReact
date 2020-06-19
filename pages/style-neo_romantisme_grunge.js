import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleBase from "../components/articleBase";
import HorizontalScrolling from "../components/horizontalScrolling";
import article from "../data/style/romantisme";

const RomantismePage = () => (
  <Layout>
    <SEO title="Home" />
    <HorizontalScrolling>
      <ArticleBase
        category={article.category}
        title={article.title}
        date={article.date}
        picture="/images/style/romantisme3.jpg"
      />
      {article.content}
    </HorizontalScrolling>

    <style jsx global>{`
      article-base img {
        max-width: 100%;
      }
    `}</style>
  </Layout>
);

export default RomantismePage;
