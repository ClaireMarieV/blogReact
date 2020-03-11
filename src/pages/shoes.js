import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ArticleSplash from "../components/articleSplash"
import Grid from "../components/grid"
import articles from '../lib/articleShoes'

const StylePage = () => (
    <Layout>
      <SEO title="Home" />
      <Grid>
        {articles.shoes.map(article =><ArticleSplash className="article-group" category={article.category} title={article.title} date={article.date} picture={article.picture}/>
        )}
      </Grid>
    </Layout>
  )
  
  export default StylePage