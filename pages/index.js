import React from "react";
import Picture from "../components/picture";
import Layout from "../components/layout";
import SEO from "../components/seo";

import ArticleSplash from "../components/articleSplash";
import verticalIndex from "../components/verticalIndex";
import Card from "../components/card";
import ArticleCard from "../components/articleCard";

import acid from "../data/style/acid";
import acceptation from "../data/style/acceptation";
import rustique from "../data/style/rustique";
import desir from "../data/shoes/desir";
import romantisme from "../data/style/romantisme";
import plateforme from "../data/shoes/plateforme";
import boheme from "../data/shoes/boheme";
import mango from "../data/shoes/mangoBottega";
import neutrals from "../data/shoes/neutrals";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index">
      <ArticleSplash
        category={acceptation.category}
        title={acceptation.title}
        picture={acceptation.picture}
      />
      <ArticleSplash
        category={acid.category}
        title={acid.title}
        picture={acid.picture}
      />
      <ArticleSplash
        category={desir.category}
        title={desir.title}
        date={acid.date}
        picture={desir.picture}
      />
      <Card>
        <ArticleSplash
          category={rustique.category}
          title={rustique.title}
          picture={rustique.picture}
        />

        <ArticleSplash
          category={neutrals.category}
          title={neutrals.title}
          picture={neutrals.picture}
        />
      </Card>

      <Card>
        <ArticleSplash
          category={mango.category}
          title={mango.title}
          picture={mango.picture}
        />
        <ArticleSplash
          category={romantisme.category}
          title={romantisme.title}
          picture={romantisme.picture}
        />
      </Card>
    </div>
    <style jsx global>{`
      /**************/
      /*Parallax*/
      /**************/

      @media (min-width: 300px) and (max-width: 623px) {
        .parallax .grid-full {
          margin-bottom: 1em;
          display: inherit;
          flex-direction: inherit;
        }
        .parallax a:nth-child(even) .grid-full {
          margin-bottom: 1em;
          display: inherit;
          flex-direction: inherit;
        }
      }
      /**************/
      /*Article-splash img*/
      /**************/

      .parallax a:nth-child(2) .article-splash img {
        height: 42rem !important;
      }
      .parallax a:nth-child(4) .article-splash img {
        height: 33rem !important;
      }

      /**************/
      /*Article-splash title*/
      /**************/
      .card-title .article-title {
        padding: 1em;
        line-height: normal;
        writing-mode: inherit;
        writing-mode: tb-rl;
        transform: rotate(0deg);
        transform: rotate(0deg);
        display: -webkit-inline-box;
        text-align: inherit;
        text-align: center !important;
        display: flex !important;
      }

      @media {
        .parallax a:nth-child(even) .article-splash-title,
        .parallax a:nth-child(odd) .article-splash-title {
          height: auto;
          width: auto;
          margin: auto;
        }
      }
      /*********/
      /**Once**/
      /*********/
      .once {
        padding: 1rem;
      }
      .once > a > .article-card {
        display: inherit;
        margin: 0;
      }
      .once > img {
        max-width: 60vw;
      }
      .once a:nth-child(1) .article-splash-title {
        color: white;
        background-color: black;
      }

      @media (max-width: 720px) {
        .vertical-index {
          transform: translate3d(0, 0, 0);
        }
      }
    `}</style>
  </Layout>
);

export default IndexPage;
