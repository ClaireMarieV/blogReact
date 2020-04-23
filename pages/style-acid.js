import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";
import ArticleBase from "../components/articleBase";
import article from "../data/style/acid";

const AcidPage = () => (
  <Layout>
    <SEO title="Home" />
    <ArticleBase
      category={article.category}
      title={article.title}
      date={article.date}
      picture="/images/style/acid.jpg"
    >
      {article.content}
    </ArticleBase>

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
    <style jsx>{`
      .imgRow {
        margin-left: 1em;
        width: 45%;
        height: 20rem;
        object-fit: cover;
        margin-right: 1em;
      }
    `}</style>
  </Layout>
);

export default AcidPage;
