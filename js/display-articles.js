// js/display-articles.js
document.addEventListener('DOMContentLoaded', function() {
    const articlesList = document.getElementById('articles-list');
    let articles = localStorage.getItem('articles');

    if (articles) {
        articles = JSON.parse(articles);
        articles.forEach(article => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'col-md-4';
            articleDiv.innerHTML = `
                <div class="course-box">
                    <div class="course-details">
                        <h4>
                            <a href="#" title="">${article.title}</a>
                        </h4>
                        <p>${article.content}</p>
                        <small>Published on ${article.date}</small>
                    </div>
                </div>
            `;
            articlesList.appendChild(articleDiv);
        });
    } else {
        articlesList.innerHTML = '<p>No articles found.</p>';
    }
});