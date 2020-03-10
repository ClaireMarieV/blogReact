import React from "react"
import { Link } from "gatsby"
import './articleTitle.css'

const ArticleTitle = ({category, title, date}) => (
    <div className = "article-title">
        <h4>{category}</h4>
        <h3>{title}</h3>
        <h5>{date}</h5>
    </div>
  )
  
  export default ArticleTitle
  