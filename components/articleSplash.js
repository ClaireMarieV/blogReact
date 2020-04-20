import React from "react"
import ArticleTitle from './articleTitle'
import Link from 'next/link'
import {fromArticle} from '../lib/link'

const ArticleSplash = ({category, title, date, picture, className, id}) => (
        <Link href = {fromArticle({category, title})}>
        <a>
            <div className = {"article-splash " + (className || '')} id= {id}>
                <img src={picture}/>
                <div className='article-splash-title'>
                    <ArticleTitle category={category} title={title} date={date}/>
                </div>
            </div>
            <style jsx>{`
                .article-splash {
                    display: flex;
                    flex-direction: column;
                }

                .article-splash .article-splash-title {
                    margin-top: 1rem;
                }

                .article-splash img {
                    height: 20rem;
                    object-fit: cover;
                }
            `}</style>
        </a>
    </Link>
  )
  
  export default ArticleSplash
  