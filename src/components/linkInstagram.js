import React from "react"
import { Link } from "gatsby"
import ArticleTitle from './articleTitle'
import './articleSplash.css'

const LinkInstagram = ({title, text, picture, className}) => (
    <div className = {"link-instagram " + (className || '')}>
        <img src={picture}/>
        <div className='article-splash-title'>
            <ArticleTitle title={title} text={text} />
        </div>
    </div>
  )
  
  export default LinkInstagram