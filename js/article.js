// js/article.js
document.getElementById('article-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const article = {
        title: title,
        content: content,
        date: new Date().toLocaleDateString()
    };

    let articles = localStorage.getItem('articles');
    if (articles) {
        articles = JSON.parse(articles);
    } else {
        articles = [];
    }

    articles.push(article);
    localStorage.setItem('articles', JSON.stringify(articles));

    alert('Article saved successfully!');
    window.location.href = 'blog.html';
});