import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ArticleSplash from "../components/articleSplash"
import Grid from "../components/grid"
import Aside from "../components/aside"
import Timeline from "../components/timeline"
import LinkInstagram from "../components/linkInstagram"
import doc from "../images/shoes/doc.jpg"

import articles from '../lib/articleShoes'

const StylePage = () => (
    <Layout>
      <SEO title="Home" />
      <Grid>
        {articles.shoes.map(article =><ArticleSplash className="article-group" id="article-shoes" category={article.category} title={article.title} date={article.date} picture={article.picture}/>
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
          picture={doc}
          title='VERT CLAIRE'
          text=' Vous pouvez me suivre > ' />
      </Aside>
    </Layout>
  )
  
  export default StylePage