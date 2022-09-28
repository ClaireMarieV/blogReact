import React from "react";

import Layout from "../components/layout";
import Index from "../components/index";
import SEO from "../components/seo";
import Card from "../components/card";
import VerticalIndex from "../components/verticalIndex";
import articles from "../data/articleArt";

const ArtPage = () => (
  <Layout>
    <SEO title="Home" />
    <Index>
      <Card>
        <div className="intro">
          <p>
            Dans cette catégorie, les photos ne redirigent pas vers un article.
            Je ne peux pas mettre mon ressenti sur ces tableaux étant donné
            qu'ils ne sont pas de moi, par conséquent je ne prèfère pas mais
            vous pouvez bien sûr partager la vôtre.
          </p>
        </div>
        {articles.map((article, index) => (
          <VerticalIndex
            key={index}
            category={article.category}
            title={article.title}
            date={article.date}
            picture={article.picture}
            autoLink={false}
          />
        ))}
      </Card>
    </Index>
    <style jsx global>{`
      .intro {
        padding: 1rem;
      }
      .intro p {
        grid-column: 1/5;
      }
    `}</style>
  </Layout>
);

export default ArtPage;
