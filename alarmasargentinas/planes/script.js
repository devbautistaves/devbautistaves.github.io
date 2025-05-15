document.addEventListener('DOMContentLoaded', function() {
    // Cerrar banner superior
    const closeBanner = document.querySelector('.close-btn');
    const topBanner = document.querySelector('.top-banner');
    
    if (closeBanner && topBanner) {
        closeBanner.addEventListener('click', function() {
            topBanner.style.display = 'none';
        });
    }
    
    // Formulario de contacto
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener valores del formulario
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const plan = document.getElementById('plan').value;
            const message = document.getElementById('message').value;
            
            // Aquí normalmente enviarías los datos a un servidor
            // Por ahora, solo mostraremos un mensaje de éxito
            alert(`¡Gracias ${name}! Hemos recibido tu solicitud de cotización para el ${getPlanName(plan)}. Un asesor se pondrá en contacto contigo a la brevedad.`);
            
            // Resetear formulario
            quoteForm.reset();
        });
    }
    
    // Función para obtener el nombre del plan según su valor
    function getPlanName(planValue) {
        switch(planValue) {
            case 'view':
                return 'Sistema View 1.1';
            case 'climax':
                return 'Sistema Climax 1.1';
            case 'custom':
                return 'Plan Personalizado';
            default:
                return 'plan seleccionado';
        }
    }
           // Menú móvil
        const menuToggle = document.querySelector('.menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    // Botones de cotización
    const quoteButtons = document.querySelectorAll('.btn-quote');
    

    
    // Animación de scroll suave para todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});