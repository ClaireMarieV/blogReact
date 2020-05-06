import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Grid from "../components/grid";
import Aside from "../components/aside";
import Timeline from "../components/timeline";
import LinkInstagram from "../components/linkInstagram";

const ProposPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <div className="intro">
        <h2>Parenthèse à propos</h2>
        <p>
          Dans cette catégorie, les photos ne redirigent pas vers un article. Je
          ne peux pas mettre mon ressenti sur ces tableaux étant donné qu'ils ne
          sont pas de moi mais de ma mère. Ce ne serait qu'une vision
          spectatrice de chacun d'eux, par conséquent je ne prèfère pas mais
          vous pouvez bien sûr partager la vôtre! Je voulais vous les faire
          découvrir parce qu'elle a du talent mais a du mal a les partager.
        </p>
      </div>
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
      .intro h2 {
        font-family: arboria, sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 1.4rem;
        margin: 1em;
        text-align: justify;
      }
      /*spécifique*/

      /*image specifique*/
      .grid > a:nth-child(0n + 3) img,
      .grid > a:nth-child(0n + 6) img,
      .grid > a:nth-child(0n + 8) img {
        height: 100% !important;
        width: 100% !important;
      }
    `}</style>
  </Layout>
);

export default ProposPage;
