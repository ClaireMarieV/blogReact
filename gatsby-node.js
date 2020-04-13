const articles = require('./src/lib/articles')
const path = require(`path`)

exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    articles.forEach(article => {
      const node = {
        ...article,
        id: createNodeId(`Article-${article.title}`),
        internal: {
          type: "Article",
          contentDigest: createContentDigest(article),
        },
      }
      actions.createNode(node)
    })
  }

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const result = await graphql(`
       {
           allArticle {
               edges {
                   node {
                       id
                       category
                       title
                       template
                       picture
                    }
                }
            }
        }
    `)
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allArticle.edges.forEach(({ node }) => {
    createPage({
      path: node.category + '/' + node.title,
      component: path.resolve(node.template),
      context: {
          id: node.id,
          picture: node.picture
        }
    })
  })
}
