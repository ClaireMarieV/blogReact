import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ArticleSplash from "../components/articleSplash";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <ArticleSplash
        className="grid-full"
        category="STYLE"
        title="L'ACCEPTATION PAR LA DOUCEUR"
        date="06.04.2019"
        picture="/images/style/kimono1.jpg"
      />
      <ArticleSplash
        className="row-index"
        category="STYLE"
        title="ACID"
        date="22.03.2020"
        picture="/images/style/acid.jpg"
      />
      <ArticleSplash
        className="row-index"
        category="SHOES"
        title="RETOUR AUX ANNEES 90'"
        date="05.05.2020"
        picture="/images/shoes/plateforme.jpg"
      />
      <ArticleSplash
        className="row-index"
        category="LIFE"
        title="UNE NOUVELLE ARRIVÉE"
        date="06.04.2019"
        picture="/images/ariane12.png"
      />
      <ArticleSplash
        className="row-index"
        category="STYLE"
        title="BOHEME"
        date="06.04.2019"
        picture="/images/style/photoInsta.jpg"
      />
      <ArticleSplash
        className="grid-full"
        category="SHOES"
        title="CELLES TANT DESIREES"
        date="12.03.2020"
        picture="/images/shoes/doc.jpg"
      />
      <ArticleSplash
        className="row-index"
        category="SHOES"
        title="SANDALES BOHEME"
        date="06.04.2019"
        picture="/images/shoes/sandaleBoh.jpg"
      />
      <ArticleSplash
        className="row-index"
        category="STYLE"
        title="DENIM"
        date="06.04.2019"
        picture="/images/style/denim1.jpg"
      />
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
      .grid > a:nth-child(0n + 1) {
        grid-column: 1/5;
        max-width: 100%;
      }
      .grid > a:nth-child(0n + 6) {
        grid-column: 1/4;
      }
      .grid > a:nth-child(0n + 12) {
        grid-column: 1/4;
      }
    a .grid-full .article-splash-title {
        margin: 0;
        background-color: black;
        color: whitesmoke;
        padding: 1em;
      }
      a .grid-full .article-splash-title .article-title h3:hover {
        color: whitesmoke;
      }

      }
    `}</style>
  </Layout>
);

export default IndexPage;
