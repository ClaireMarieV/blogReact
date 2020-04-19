import React from "react"

import articles from '../data/articles'
import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticleSplash from "../components/articleSplash"
import Aside from "../components/aside"
import Timeline from "../components/timeline"
import LinkInstagram from "../components/linkInstagram"


import Grid from "../components/grid"

const StylePage = () => (
    <Layout>
      <SEO title="Home" />
      <Grid>
            {articles.style.map(article =><ArticleSplash className="article-group" category={article.category} title={article.title} date={article.date} picture={article.picture}/>
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
      <style jsx>{`
        .article-group:nth-child(0n+6),
        .article-group:nth-child(0n+16){
            grid-column: 2/5;
        }
        .article-group:nth-child(0n+11){
            grid-column: 1/4;
        }
    `}</style>
    </Layout>
  )
  
  export default StylePage
  