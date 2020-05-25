import React from "react";

import articles from "../data/articleStyle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import VerticalIndex from "../components/verticalIndex";
import Card from "../components/card";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Card>
      {articles.map((article) => (
        <VerticalIndex
          className=""
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Card>

    <style jsx global>{`
      .card > a:nth-child(0n + 1) .article-card .card-title h3:hover,
      .card > a:nth-child(0n + 11) .article-card .card-title h3:hover {
        color: whitesmoke;
      }
      a:nth-child(2) .article-card,
      a:nth-child(5) .article-card,
      a:nth-child(9) .article-card {
        background-color: #d6a095;
      }
      a:nth-child(3) .article-card,
      a:nth-child(7) .article-card {
        background-color: black;
        color: white;
      }
    `}</style>
  </Layout>
);

export default StylePage;
