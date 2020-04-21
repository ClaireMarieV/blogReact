import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSplash from "../components/articleSplash"
import Grid from "../components/grid"
import Aside from "../components/aside"
import Timeline from "../components/timeline"
import LinkInstagram from "../components/linkInstagram"

import articles from '../data/articleArt'

const StylePage = () => (
    <Layout>
      <SEO title="Home" />
      <Grid>
        {articles.art.map(article =><ArticleSplash className="article-art" category={article.category} title={article.title} date={article.date} picture={article.picture}/>
        )} 
      </Grid>
      <Aside>
        <Timeline
            text= 'TIMELINE'
            category= 'STYLE'
            title= 'ACID'
            date= '12.12.12'/>
        <Timeline
            category= 'SHOES'
            title= 'DU ROUGE, DU ROUGE, DU ROUGE'
            date= '12.12.12'/>
        <Timeline 
            category= 'STYLE'
            title= 'ACID'
            date= '12.12.12'/>
        <Timeline
            category= 'STYLE'
            title= 'ACID'
            date= '12.12.12'/>
        <Timeline
            category= 'STYLE'
            title= 'ACID'
            date= '12.12.12'/>

        <LinkInstagram
          picture="/images/shoes/doc.jpg"          
          title='VERT CLAIRE'
          text=' Vous pouvez me suivre > ' />
      </Aside>
      <style jsx global>{`
      .grid > a:nth-child(0n+9){
          grid-column: 3/5;
          grid-row: 2/4;
        }
        .grid > a:nth-child(0n+9) img {
          height: 100% !important;
          width: 100% !important;
        }
      `}</style>
    </Layout>
  )
  
  export default StylePage