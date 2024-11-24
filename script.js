// Exemplo de funcionalidade simples de scroll nas seções de filmes/séries
document.querySelectorAll('.movie-row').forEach(row => {
    row.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            row.scrollBy(300, 0);
        } else {
            row.scrollBy(-300, 0);
        }
    });
});
 
