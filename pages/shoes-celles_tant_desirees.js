import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import ArticleBase from "../components/articleBase";
import article from "../data/shoes/desir";

const DesirPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture="/images/shoes/doc.jpg"
    >
      {article.content}
    </ArticleBase>

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
      .article-base img {
        grid-column: 1/5;
        width: 100%;
        height: 20rem;
        object-fit: cover;
      }
      .imgRow {
        width: 100%;
        height: 20rem;
        display: flex;
      }
      .article-base .text {
        display: flex;
        max-width: 30rem;
        margin: auto;
      }
    `}</style>
  </Layout>
);

export default DesirPage;
