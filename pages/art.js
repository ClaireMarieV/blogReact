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
            qu'ils ne sont pas de moi mais de ma mère. Ce ne serait qu'une
            vision spectatrice de chacun d'eux, par conséquent je ne prèfère pas
            mais vous pouvez bien sûr partager la vôtre! Je voulais vous les
            faire découvrir parce qu'elle a du talent mais a du mal a les
            partager.
          </p>
        </div>
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
    <style jsx>{`
      .intro {
        padding: 1rem;
      }
      .intro p {
        grid-column: 1/5;
      }
    `}</style>
    <style jsx global>{`
      @media (max-width: 700px) {
        .vertical-index {
          max-height: 100vw !important;
        }
      }
    `}</style>
  </Layout>
);

export default ArtPage;
