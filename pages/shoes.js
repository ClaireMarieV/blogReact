import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import articles from "../data/articleShoes";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {articles.map((article) => (
        <ArticleSplash
          className="article-group"
          id="article-shoes"
          category={article.category}
          title={article.title}
          date={article.date}
          picture={article.picture}
        />
      ))}
    </Grid>
    <Aside>
      <Timeline text="TIMELINE" category="STYLE" title="ACID" date="12.12.12" />
      <Timeline
        category="SHOES"
        title="DU ROUGE, DU ROUGE, DU ROUGE"
        date="12.12.12"
      />
      <Timeline category="STYLE" title="ACID" date="12.12.12" />
      <Timeline category="STYLE" title="ACID" date="12.12.12" />
      <Timeline category="STYLE" title="ACID" date="12.12.12" />

      <LinkInstagram
        picture="/images/shoes/doc.jpg"
        title="VERT CLAIRE"
        text=" Vous pouvez me suivre > "
      />
    </Aside>
    <style jsx global>{`
      .grid > a:nth-child(0n + 1) {
        grid-column: 1/3 !important;
      }
      .grid > a:nth-child(0n + 9) {
        grid-column: 2/5 !important;
      }

      .grid > a:nth-child(0n + 1) .article-splash-title,
      .grid > a:nth-child(0n + 9) .article-splash-title {
        margin: 0;
        background-color: black;
        color: whitesmoke;
        padding: 1em;
      }
      .grid > a:nth-child(0n + 1) .article-splash-title .article-title h3:hover,
      .grid
        > a:nth-child(0n + 9)
        .article-splash-title
        .article-title
        h3:hover {
        color: whitesmoke;
      }
    `}</style>
  </Layout>
);

export default StylePage;
