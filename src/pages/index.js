import React from "react"
import { Link } from "gatsby"
import "./index.css"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ArticleSplash from "../components/articleSplash"
import Grid from "../components/grid"
import Aside from "../components/aside"
import Timeline from "../components/timeline"
import LinkInstagram from "../components/linkInstagram"
import gianvito from '../images/shoes/gianvito.png'
import tie from '../images/style/tie.jpg'
import denim from '../images/style/denim1.jpg'
import ariane from '../images/ariane12.png'
import insta from '../images/style/photoInsta.jpg'
import studio from '../images/shoes/Studio_2.jpg'
import boh from '../images/shoes/sandaleBoh.jpg'
import doc from "../images/shoes/doc.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" /> 
      <Grid>
      <ArticleSplash className='grid-full'
        category='STYLE'
        title='ENTRE OMBRE ET LUMIÈRE'
        date='06.04.2019'
        picture={tie} />
      <ArticleSplash className='row-index'
        category='STYLE'
        title='DU DENIM'
        date='06.04.2019'
        picture={denim} />
      <ArticleSplash className='row-index'
        category='LIFE'
        title='UNE NOUVELLE ARRIVÉE'
        date='06.04.2019'
        picture={ariane} />
      <ArticleSplash className='row-index'
        category='STYLE'
        title='BOHEME'
        date='06.04.2019'
        picture={insta} />
        <ArticleSplash className='row-index'
        category='STYLE'
        title='BOHEME'
        date='06.04.2019'
        picture={insta} />
      <ArticleSplash className='grid-full'
        category='SHOES'
        title='LES CHAUSSURES DU MOIS : DU ROUGE, DU ROUGE, DU ROUGE'
        date='06.04.2019'
        picture={gianvito} />
      
      <ArticleSplash className = 'row-index'
        category='SHOES'
        title='SANDALES BOHEME'
        date='06.04.2019'
        picture={boh}
        />
      <ArticleSplash className = 'row-index'
        category='SHOES'
        title='UN BASIQUE'
        date='06.04.2019'
        picture={studio} />
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

export default IndexPage
