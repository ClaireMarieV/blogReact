import React from "react";

import articles from "../data/articleStyle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";

import Grid from "../components/grid";

const StylePage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      {articles.map((article) => (
        <ArticleSplash
          className="article-group"
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
        grid-column: 1/4;
      }
      .grid > a:nth-child(0n + 11) {
        grid-column: 1/5;
      }
     }
      .grid > a:nth-child(0n + 16) {
        grid-column: 1/4;
      }
      a:nth-child(0n + 1) .article-splash-title,
      a:nth-child(0n + 11) .article-splash-title {
        margin: 0;
        background-color: black;
        color: whitesmoke;
        padding: 1em;
      }
      a:nth-child(0n + 1) .article-splash-title .article-title h3:hover,
      a:nth-child(0n + 11) .article-splash-title .article-title h3:hover {
        color: whitesmoke;
      }
    `}</style>
  </Layout>
);

export default StylePage;
