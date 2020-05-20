import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import ArticleCard from "../components/articleCard";
import articles from "../data/articleArt";

const StylePage = () => (
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
          className="article-art"
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>

    <style jsx>{`
      /*general*/
      .grid > .intro {
        grid-column: 1/5;
      }
      .grid > a card-title {
        color: white;
        background-color: #141414;
        height: 17rem;
        margin-top: 0 !important;
      }
      .grid > a .article-title {
        padding-top: 3em;
      }

      /*spécifique*/
      a:nth-child(3) > .article-card .card-title,
      a:nth-child(6) > .article-card .card-title,
      a:nth-child(8) > .article-card .card-title {
        color: black;
        background-color: white;
        height: 7em;
      }
      a:nth-child(3) .card-title,
      a:nth-child(6) .card-title,
      a:nth-child(8) .card-title {
        padding-top: 1em !important;
      }

      .article-card img {
        max-height: 19rem;
      }
      @media (min-width: 401px) and (max-width: 600px) {
        .grid > a .article-title {
        .grid > a .article-title {
          padding: 0.5em;
        }
        .grid > a .article-splash-title {
        .grid > a .article-splash-title {
          height: 7em;
        }
      }
      @media (max-width: 400px) {
        .grid > a .card-title {
        .grid > a .card-title {
          padding: 0.5em;
        }
        .grid > a .article-card {
          height: 7em;
        }
      }
    `}</style>
  </Layout>
);

export default StylePage;
