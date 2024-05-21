// script.js
document.addEventListener('DOMContentLoaded', function() {
    const githubLink = document.getElementById('github-link');
    
    githubLink.addEventListener('click', function(event) {
        alert('Você está sendo redirecionado para o repositório no GitHub!');
    });
});
