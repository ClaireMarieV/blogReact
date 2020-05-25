import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import VerticalIndex from "../components/verticalIndex";
import articles from "../data/articleShoes";

const ShoesPage = () => (
  <Layout>
    <SEO title="Home" />
    <Card>
      {articles.map((article) => (
        <VerticalIndex
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Card>

    <style jsx global>{`
      a:nth-child(1) .article-card,
      a:nth-child(6) .article-card,
      a:nth-child(9) .article-card {
        background-color: #f7d9be;
      }
      a:nth-child(3) .article-card,
      a:nth-child(7) .article-card {
        background-color: black;
        color: white;
      }
    `}</style>
  </Layout>
);

export default ShoesPage;
