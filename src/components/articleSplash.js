import React from "react"
import { Link } from "gatsby"
import ArticleTitle from './articleTitle'
import './articleSplash.css'

const ArticleSplash = ({category, title, date, picture, className}) => (
    <div className = {"article-splash " + (className || '')}>
        <img src={picture}/>
        <div className='article-splash-title'>
            <ArticleTitle category={category} title={title} date={date}/>
        </div>
    </div>
  )
  
  export default ArticleSplash
  