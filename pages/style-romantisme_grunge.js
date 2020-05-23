import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import ArticleTitle from "../components/articleTitle";
import ArticleBase from "../components/articleBase";

import article from "../data/style/romantisme";

const RomantismePage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture="/images/style/romantisme.jpg"
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
        title="IL ÉTAIT UNE FOIS"
        text=" Vous pouvez me suivre > "
      />
    </Aside>
    <style jsx global>{`
      article-base img {
        max-height: 100%;
      }
    `}</style>
  </Layout>
);

export default RomantismePage;
