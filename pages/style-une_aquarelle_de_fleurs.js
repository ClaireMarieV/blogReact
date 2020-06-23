import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleBase from "../components/articleBase";
import article from "../data/style/aquarelle";

const AquarellePage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture="/images/style/boheme.jpg"
    >
      {article.content}
    </ArticleBase>

    <style jsx global>{`
      .gridPlateform {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 0.5rem;
      }
      .gridPlateform > *:nth-child(1) {
        grid-column: 1/2;
        grid-row: 1/3;
        width: 100%;
        object-fit: cover;
      }
      .gridPlateform > *:nth-child(4) {
        grid-column: 1/3;
        display: flex;
        overflow: hidden;
      }
      .gridPlateform > *:nth-child(4) > * {
        object-fit: cover;
        width: calc(50% - 0.25rem);
      }
      .gridPlateform > *:nth-child(4) > *:nth-child(2) {
        margin-left: 0.5rem;
      }
      .article-base .text {
        display: flex;
      }
    `}</style>
  </Layout>
);

export default AquarellePage;
