import React from "react";

import articles from "../data/articleStyle";
import Layout from "../components/layout";
import Index from "../components/index";
import SEO from "../components/seo";
import VerticalIndex from "../components/verticalIndex";
import Card from "../components/card";

const StylePage = () => (
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
    <style jsx>{``}</style>
  </Layout>
);

export default StylePage;
