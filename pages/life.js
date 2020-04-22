import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSplash from "../components/articleSplash"
import Grid from "../components/grid"
import Aside from "../components/aside"
import Timeline from "../components/timeline"
import LinkInstagram from "../components/linkInstagram"
import articles from '../data/articleLife'

const StylePage = () => (
    <Layout>
      <SEO title="Home" />
      <Grid>
        {articles.life.map(article =><ArticleSplash className="article-group" category={article.category} title={article.title} date={article.date} picture={article.picture}/>
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
          picture= "/images/shoes/doc.jpg"
          title='VERT CLAIRE'
          text=' Vous pouvez me suivre > ' />
      </Aside>
    </Layout>
  )
  
  export default StylePage