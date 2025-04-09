// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            backToTop.classList.add('active');
        } else {
            header.classList.remove('scrolled');
            backToTop.classList.remove('active');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Toggle hamburger animation
        const spans = this.querySelectorAll('span');
        spans[0].classList.toggle('rotate-45');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-neg-45');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            
            // Reset hamburger
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].classList.remove('rotate-45');
            spans[1].classList.remove('opacity-0');
            spans[2].classList.remove('rotate-neg-45');
        });
    });
    
    // Tabs functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and panes
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Modal functionality
    const modal = document.getElementById('quoteModal');
    const quoteButtons = document.querySelectorAll('.btn-quote');
    const closeModal = document.querySelector('.close-modal');
    const quoteType = document.getElementById('quoteType');
    const insuranceType = document.getElementById('insuranceType');
    const dynamicFields = document.querySelector('.dynamic-fields');
    
    // Open modal when clicking on quote buttons
    quoteButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            const type = this.getAttribute('data-type');
            quoteType.textContent = type;
            insuranceType.value = type;
            
            // Add dynamic fields based on insurance type
            dynamicFields.innerHTML = '';
            
            switch(type) {
                case 'auto':
                    dynamicFields.innerHTML = `
                        <div class="form-group">
                            <label for="carBrand">Marca del vehículo</label>
                            <input type="text" id="carBrand" name="carBrand" required>
                        </div>
                        <div class="form-group">
                            <label for="carModel">Modelo</label>
                            <input type="text" id="carModel" name="carModel" required>
                        </div>
                        <div class="form-group">
                            <label for="carYear">Año</label>
                            <input type="number" id="carYear" name="carYear" min="1900" max="2025" required>
                        </div>
                    `;
                    break;
                case 'moto':
                    dynamicFields.innerHTML = `
                        <div class="form-group">
                            <label for="motoBrand">Marca de la moto</label>
                            <input type="text" id="motoBrand" name="motoBrand" required>
                        </div>
                        <div class="form-group">
                            <label for="motoModel">Modelo</label>
                            <input type="text" id="motoModel" name="motoModel" required>
                        </div>
                        <div class="form-group">
                            <label for="motoYear">Año</label>
                            <input type="number" id="motoYear" name="motoYear" min="1900" max="2025" required>
                        </div>
                        <div class="form-group">
                            <label for="motoCC">Cilindrada</label>
                            <input type="number" id="motoCC" name="motoCC" required>
                        </div>
                    `;
                    break;
                case 'hogar':
                    dynamicFields.innerHTML = `
                        <div class="form-group">
                            <label for="homeType">Tipo de vivienda</label>
                            <select id="homeType" name="homeType" required>
                                <option value="">Seleccionar...</option>
                                <option value="casa">Casa</option>
                                <option value="departamento">Departamento</option>
                                <option value="ph">PH</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="homeAddress">Dirección</label>
                            <input type="text" id="homeAddress" name="homeAddress" required>
                        </div>
                        <div class="form-group">
                            <label for="homeSize">Metros cuadrados</label>
                            <input type="number" id="homeSize" name="homeSize" required>
                        </div>
                    `;
                    break;
                case 'comercio':
                    dynamicFields.innerHTML = `
                        <div class="form-group">
                            <label for="businessType">Tipo de comercio</label>
                            <select id="businessType" name="businessType" required>
                                <option value="">Seleccionar...</option>
                                <option value="local">Local comercial</option>
                                <option value="oficina">Oficina</option>
                                <option value="deposito">Depósito</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="businessAddress">Dirección</label>
                            <input type="text" id="businessAddress" name="businessAddress" required>
                        </div>
                        <div class="form-group">
                            <label for="businessActivity">Actividad</label>
                            <input type="text" id="businessActivity" name="businessActivity" required>
                        </div>
                    `;
                    break;
                default:
                    dynamicFields.innerHTML = `
                        <div class="form-group">
                            <label for="details">Detalles adicionales</label>
                            <textarea id="details" name="details" rows="3" required></textarea>
                        </div>
                    `;
            }
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal when clicking on close button or outside the modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Form submission
    const quoteForm = document.getElementById('quoteForm');
    
    if (quoteForm) {
        quoteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Show success message
                const formGroups = this.querySelectorAll('.form-group');
                formGroups.forEach(group => {
                    group.style.display = 'none';
                });
                
                submitBtn.style.display = 'none';
                
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <h3>¡Solicitud Enviada!</h3>
                    <p>Gracias por contactarnos. Recibirás tu cotización en breve.</p>
                `;
                
                this.appendChild(successMessage);
                
                // Reset form after 5 seconds
                setTimeout(() => {
                    this.reset();
                    successMessage.remove();
                    formGroups.forEach(group => {
                        group.style.display = 'block';
                    });
                    submitBtn.style.display = 'inline-block';
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    
                    // Close modal
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 3000);
            }, 1500);
        });
    }
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const prevTestimonial = document.querySelector('.prev-testimonial');
    const nextTestimonial = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    let testimonialInterval;
    
    function goToTestimonial(index) {
        // Remove active class from all testimonials and dots
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        testimonialDots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current testimonial and dot
        testimonials[index].classList.add('active');
        testimonialDots[index].classList.add('active');
        
        currentTestimonial = index;
    }
    
    function nextTestimonialFunc() {
        let nextIndex = currentTestimonial + 1;
        if (nextIndex >= testimonials.length) {
            nextIndex = 0;
        }
        goToTestimonial(nextIndex);
    }
    
    function prevTestimonialFunc() {
        let prevIndex = currentTestimonial - 1;
        if (prevIndex < 0) {
            prevIndex = testimonials.length - 1;
        }
        goToTestimonial(prevIndex);
    }
    
    // Start automatic testimonial slider
    function startTestimonialSlider() {
        testimonialInterval = setInterval(nextTestimonialFunc, 6000);
    }
    
    // Stop automatic testimonial slider
    function stopTestimonialSlider() {
        clearInterval(testimonialInterval);
    }
    
    // Event listeners for testimonial controls
    if (prevTestimonial && nextTestimonial) {
        prevTestimonial.addEventListener('click', function() {
            prevTestimonialFunc();
            stopTestimonialSlider();
            startTestimonialSlider();
        });
        
        nextTestimonial.addEventListener('click', function() {
            nextTestimonialFunc();
            stopTestimonialSlider();
            startTestimonialSlider();
        });
        
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                goToTestimonial(index);
                stopTestimonialSlider();
                startTestimonialSlider();
            });
        });
        
        // Start testimonial slider
        startTestimonialSlider();
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});