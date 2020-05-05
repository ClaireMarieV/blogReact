import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import articles from "../data/articleLife";

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
  </Layout>
);

export default StylePage;
