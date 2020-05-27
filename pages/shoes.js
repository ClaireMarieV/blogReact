import React from "react";

import Layout from "../components/layout";
import Index from "../components/index";
import SEO from "../components/seo";
import Card from "../components/card";
import VerticalIndex from "../components/verticalIndex";
import articles from "../data/articleShoes";

const ShoesPage = () => (
  <Layout>
    <SEO title="Home" />
    <Index>
      <Card>
        {articles.map((article, index) => (
          <VerticalIndex
            key={index}
            category={article.category}
            title={article.title}
            date={article.date}
            picture={article.picture}
          />
        ))}
      </Card>
    </Index>

    <style jsx global>{`
      a:nth-child(3) .article-card,
      a:nth-child(7) .article-card {
        background-color: black;
        color: white;
      }
    `}</style>
  </Layout>
);

export default ShoesPage;
