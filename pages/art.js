import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import Card from "../components/card";
import ArticleCard from "../components/articleCard";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";

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

    <style jsx global>{`
      /*general*/
        .grid > .intro {
        grid-column: 1/5;
      }
      .card > a .article-card-title {
        color: white;
        background-color: #141414;
        height: 17rem;
        margin-top: 0 !important;
      }
      .card > a .article-title {
        padding-top: 3em;
      }

      /*spécifique*/
      .card > a:nth-child(0n + 3) {
        grid-column: 1/3;
        grid-row: 2/2;
      }
      .card > a:nth-child(0n + 3) .article-splash-title,
      .card > a:nth-child(0n + 6) .article-splash-title,
      .card > a:nth-child(0n + 8) .article-splash-title {
        color: black !important;
        background-color: white !important;
        height: 7em;
      }
      .card > a:nth-child(0n + 3) .article-title,
      .card > a:nth-child(0n + 6) .article-title,
      .card > a:nth-child(0n + 8) .article-title {
        padding-top: 1em !important;
      }
      .card > a:nth-child(0n + 6) {
        card-column: 1/3;
        card-row: 4/4;
      }
      .card > a:nth-child(0n + 8) {
        card-column: 3/5;
        card-row: 3/3;
      }

      /*image specifique*/
      .card > a:nth-child(0n + 3) img,
      .card > a:nth-child(0n + 6) img,
      .card > a:nth-child(0n + 8) img {
        height: 100% !important;
        width: 100% !important;
      }
      @media (min-width: 401px) and (max-width: 600px) {

        .card > a .article-title {
          padding: 0.5em;
        }
        .card > a .article-splash-title {
          height: 7em        }
      }
      @media (max-width: 400px) {
        .card > a .article-title {
          padding: 0.5em;
        }
        .card > a .article-splash-title {
          height: 7em;        }
    `}</style>
  </Layout>
);

export default StylePage;
