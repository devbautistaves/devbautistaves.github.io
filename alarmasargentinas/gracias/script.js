document.addEventListener('DOMContentLoaded', function() {
    // Cerrar banner superior
    const closeBanner = document.querySelector('.close-btn');
    const topBanner = document.querySelector('.top-banner');
    
    if (closeBanner && topBanner) {
        closeBanner.addEventListener('click', function() {
            topBanner.style.display = 'none';
        });
    }
    
    // Animación de entrada para los elementos
    const animateElements = () => {
        const elements = document.querySelectorAll('.step-item');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100 * index);
            }, 500);
        });
    };
    
    // Ejecutar animación después de que la página se cargue
    setTimeout(animateElements, 1000);
    
    // Contador regresivo para la llamada (48 horas)
    const startCountdown = () => {
        // Establecer la fecha objetivo (48 horas desde ahora)
        const targetDate = new Date();
        targetDate.setHours(targetDate.getHours() + 48);
        
        // Actualizar el contador cada segundo
        const countdownInterval = setInterval(() => {
            // Obtener la fecha y hora actual
            const now = new Date().getTime();
            
            // Calcular la diferencia entre la fecha objetivo y ahora
            const distance = targetDate.getTime() - now;
            
            // Calcular horas, minutos y segundos
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Mostrar el resultado en el elemento con id="countdown"
            const countdownElement = document.getElementById('countdown');
            if (countdownElement) {
                countdownElement.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
            }
            
            // Si el contador llega a cero, detener el intervalo
            if (distance < 0) {
                clearInterval(countdownInterval);
                if (countdownElement) {
                    countdownElement.innerHTML = "¡Es hora de la llamada!";
                }
            }
        }, 1000);
    };
    
    // Iniciar el contador si existe el elemento
    if (document.getElementById('countdown')) {
        startCountdown();
    }
});