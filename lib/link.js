export const fromArticle= (article) =>
    article.category.toLowerCase() + "-" + article.title.toLowerCase()

export const toArticle = (articles, url) => {
    const [category, title] = url.split('-')
    return articles[category].find(article => article.title.toLowerCase()=== title)
}
