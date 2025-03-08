// Función que revisa cuando las fotos deben aparecer
window.addEventListener('scroll', function() {
    const fotos = document.querySelectorAll('.foto-container');
    const fotoFinal = document.querySelector('.foto-final');
    
    fotos.forEach(foto => {
        const rect = foto.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.8) {
            foto.style.opacity = 1;
            foto.style.transform = 'translateY(0)';
            foto.querySelector('.texto').style.opacity = 1;
        }
    });

    // Foto final más grande al llegar al final
    const rectFinal = fotoFinal.getBoundingClientRect();
    if (rectFinal.top <= window.innerHeight * 0.8) {
        fotoFinal.style.opacity = 1;
        fotoFinal.style.transform = 'scale(1)';
        fotoFinal.querySelector('.texto').style.opacity = 1;
    }
});
