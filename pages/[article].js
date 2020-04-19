import React, {useEffect, useState} from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useRouter } from 'next/router'
import articles from '../data/articleArt'
import { toArticle } from '../lib/link'

const ArticlePage = () => {
    const router = useRouter()
    const [article, setArticle] = useState(null)

    useEffect(() => {
      if (router.query.article) {
        setArticle(toArticle(articles, router.query.article))
      }
    }, [router])

    return (
        <Layout>
            <SEO title="Home" />
            
            <style jsx>{`
            `}</style>
        </Layout>
    )
}
  
export default ArticlePage