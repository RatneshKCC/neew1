const container = document.getElementById("news-container")

async function fetchNews(topic = "popular") {

    const url = `https://hn.algolia.com/api/v1/search?query=${topic}`

    try {
        const res = await fetch(url)
        const data = await res.json()

        showNews(data.hits)

    } catch (error) {
        container.innerHTML = "Error loading news"
    }
}

function showNews(articles) {

    container.innerHTML = ""

    articles.forEach(function(article) {

        const div = document.createElement("div")

        div.innerHTML = `
            <h3>${article.title}</h3>
            <p>Author: ${article.author}</p>
            <a href="${article.url}" target="_blank">Read</a>
            <hr>
        `

        container.appendChild(div)

    })
}

function getNews(){
    const topic = document.getElementById("topic").value
    fetchNews(topic)
}

fetchNews()