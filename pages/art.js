import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
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
        <ArticleSplash
          className="article-art"
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>
    <Aside>
      <Timeline
        text="TIMELINE"
        category="STYLE"
        title="ACID"
        date="13.04.2020"
      />
      <Timeline
        category="SHOES"
        title="RETOUR AUX ANNEES 90'"
        date="05.05.2020"
      />

      <Timeline
        category="STYLE"
        title="L'ACCEPTATION PAR LA DOUCEUR"
        date="13.04.2020"
      />
      <Timeline
        category="STYLE"
        title="UNE AQUARELLE DE FLEURS"
        date="09.04.2020"
      />
      <Timeline category="SHOES" title="CELLE TANT DESIREE" date="12.03.2020" />

      <LinkInstagram
        picture="/images/shoes/doc.jpg"
        title="VERT CLAIRE"
        text=" Vous pouvez me suivre > "
      />
    </Aside>
    <style jsx global>{`
      /*general*/
      .grid > .intro {
        grid-column: 1/5;
      }
      .grid > a .article-splash-title {
        color: white;
        background-color: #141414;
        height: 17rem;
        margin-top: 0 !important;
      }
      .grid > a .article-title {
        padding-top: 3em;
      }

      /*spécifique*/
      .grid > a:nth-child(0n + 3) {
        grid-column: 1/3;
        grid-row: 2/2;
      }
      .grid > a:nth-child(0n + 3) .article-splash-title,
      .grid > a:nth-child(0n + 6) .article-splash-title,
      .grid > a:nth-child(0n + 8) .article-splash-title {
        color: black !important;
        background-color: white !important;
        height: 7em;
      }
      .grid > a:nth-child(0n + 3) .article-title,
      .grid > a:nth-child(0n + 6) .article-title,
      .grid > a:nth-child(0n + 8) .article-title {
        padding-top: 1em !important;
      }
      .grid > a:nth-child(0n + 6) {
        grid-column: 1/3;
        grid-row: 4/4;
      }
      .grid > a:nth-child(0n + 8) {
        grid-column: 3/5;
        grid-row: 3/3;
      }

      /*image specifique*/
      .grid > a:nth-child(0n + 3) img,
      .grid > a:nth-child(0n + 6) img,
      .grid > a:nth-child(0n + 8) img {
        height: 100% !important;
        width: 100% !important;
      }
      @media (min-width: 401px) and (max-width: 600px) {

        .grid > a .article-title {
          padding: 0.5em;
        }
        .grid > a .article-splash-title {
          height: 7em        }
      }
      @media (max-width: 400px) {
        .grid > a .article-title {
          padding: 0.5em;
        }
        .grid > a .article-splash-title {
          height: 7em;        }
    `}</style>
  </Layout>
);

export default StylePage;
