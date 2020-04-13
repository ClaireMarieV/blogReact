import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"


const Article = ({data}) => {
    const article = data.allArticle.edges[0].node
    const picture = data.allFile.edges[0].node.childImageSharp
    return (
        <Layout>
            {article.title}
            <Img fixed={picture.fixed} />
        </Layout>
    )
}
export default Article

export const pageQuery = graphql`
  query ($id: String) {
    allArticle(filter: {id: {eq: $id}}) {
      edges {
        node {
          title
          category
          date
          picture
        }
      }
    }
    allFile(filter: {relativePath: {eq: "style/kimono1.jpg"}}) {
      edges {
        node {
          childImageSharp {
            fixed(width: 400, height: 400) {
              ...GatsbyImageSharpFixed
            }
          }   
        }
      }
    }
  }
`
