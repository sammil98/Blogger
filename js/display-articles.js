// js/display-articles.js
document.addEventListener('DOMContentLoaded', function() {
    const articlesList = document.getElementById('articles-list');
    let articles = localStorage.getItem('articles');

    if (articles) {
        articles = JSON.parse(articles);
        articles.forEach((article, index) => {
            const articleDiv = document.createElement('div');
            articleDiv.className = 'col-md-4';
            articleDiv.innerHTML = `
                <div class="course-box">
                    ${article.thumbnailUrl ? `<div class="image-wrap entry"><img src="${article.thumbnailUrl}" alt="${article.imageAlt}" class="img-responsive"></div>` : ''}
                    <div class="course-details">
                        <h4>
                            <a href="blog-single.html?article=${index}" title="${article.metaTitle}">${article.title}</a>
                        </h4>
                        <meta name="description" content="${article.metaDescription}">
                        <p>${article.content.substring(0, 100)}...</p>
                        <p><strong>Category:</strong> ${article.category}</p>
                        ${article.imageUrl ? `<img src="${article.imageUrl}" alt="${article.imageAlt}" class="img-responsive">` : ''}
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