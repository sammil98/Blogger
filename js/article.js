// js/article.js
document.getElementById('article-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const metaTitle = document.getElementById('meta-title').value;
    const metaDescription = document.getElementById('meta-description').value;
    const content = document.getElementById('content').value;
    const category = document.getElementById('category').value;
    const link = document.getElementById('link').value;
    const imageAlt = document.getElementById('image-alt').value;

    // Handle image upload
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];
    const imageUrl = imageFile ? URL.createObjectURL(imageFile) : '';

    // Handle thumbnail upload
    const thumbnailInput = document.getElementById('thumbnail');
    const thumbnailFile = thumbnailInput.files[0];
    const thumbnailUrl = thumbnailFile ? URL.createObjectURL(thumbnailFile) : '';

    const article = {
        title: title,
        metaTitle: metaTitle,
        metaDescription: metaDescription,
        content: content,
        category: category,
        link: link,
        imageUrl: imageUrl,
        imageAlt: imageAlt,
        thumbnailUrl: thumbnailUrl,
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