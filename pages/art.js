import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Grid from "../components/grid";
import ArticleCard from "../components/articleCard";
import articles from "../data/articleArt";

const ArtPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <div className="intro">
        <p>
          Dans cette catégorie, les photos ne redirigent pas vers un article. Je
          ne peux pas mettre mon ressenti sur ces tableaux étant donné qu'ils ne
          sont pas de moi mais de ma mère. Ce ne serait qu'une vision
          spectatrice de chacun d'eux, par conséquent je ne prèfère pas mais
          vous pouvez bien sûr partager la vôtre! Je voulais vous les faire
          découvrir parce qu'elle a du talent mais a du mal a les partager.
        </p>
      </div>
      {articles.map((article) => (
        <ArticleCard
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>
    <style jsx>{`
      .intro p {
        grid-column: 1/5;
      }
      @media (min-width: 481px) and (max-width: 640px) {
        .grid {
          grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
        }
      }
      @media (max-width: 480px) {
        .grid {
          grid-template-columns: minmax(0, 1fr) !important;
        }
      }
    `}</style>
  </Layout>
);

export default ArtPage;
