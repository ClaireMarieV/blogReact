import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ArticleSplash from "../components/articleSplash"
import Grid from "../components/grid"
import gianvito from '../images/gianvito.png'
import tie from '../images/tie.jpg'
import denim from '../images/denim1.jpg'
import ariane from '../images/ariane12.png'
import insta from '../images/photoInsta.jpg'
import studio from '../images/Studio_2.jpg'
import boh from '../images/sandaleBoh.jpg'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Grid>
      <ArticleSplash className='grid-full'
        category='shoes'
        title='LES CHAUSSURES DU MOIS : DU ROUGE, DU ROUGE, DU ROUGE'
        date='06.04.2019'
        picture={gianvito} />

      <ArticleSplash className='row-index'
        category='style'
        title='DU DENIM'
        date='06.04.2019'
        picture={denim} />
      <ArticleSplash className='row-index'
        category='life'
        title='UNE NOUVELLE ARRIVÉE'
        date='06.04.2019'
        picture={ariane} />

      <ArticleSplash className='row-index'
        category='style'
        title='ENTRE OMBRE ET LUMIERE'
        date='06.04.2019'
        picture={insta} />


      <ArticleSplash className='grid-full'
        category='style'
        title='ENTRE OMBRE ET LUMIÈRE'
        date='06.04.2019'
        picture={tie} />

      <ArticleSplash className='row-index'
        category='style'
        title='DU DENIM'
        date='06.04.2019'
        picture={denim} />
      <ArticleSplash className='row-index'
        category='life'
        title='UNE NOUVELLE ARRIVÉE'
        date='06.04.2019'
        picture={boh} />
      <ArticleSplash className='row-index'
        category='shoes'
        title='UN BASIQUE'
        date='06.04.2019'
        picture={studio} />

    </Grid>
  </Layout>
)

export default IndexPage
