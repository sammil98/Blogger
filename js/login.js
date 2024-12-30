// js/login.js
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulasi validasi login (gunakan validasi yang lebih aman di aplikasi nyata)
    if (username === 'admin' && password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        alert('Login successful!');
        window.location.href = 'index.html';  // Redirect to index or desired page
    } else {
        alert('Invalid username or password');
    }
});