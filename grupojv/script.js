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
    
    // Hero slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dots .dot');
    const prevSlide = document.querySelector('.prev-slide');
    const nextSlide = document.querySelector('.next-slide');
    let currentSlide = 0;
    let slideInterval;
    
    function goToSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        // Reset animation classes and re-add them
        const animatedElements = slides[index].querySelectorAll('.animate-in');
        animatedElements.forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = null;
        });
        
        currentSlide = index;
    }
    
    function nextSlideFunc() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) {
            nextIndex = 0;
        }
        goToSlide(nextIndex);
    }
    
    function prevSlideFunc() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) {
            prevIndex = slides.length - 1;
        }
        goToSlide(prevIndex);
    }
    
    // Start automatic slideshow
    function startSlideshow() {
        slideInterval = setInterval(nextSlideFunc, 5000);
    }
    
    // Stop automatic slideshow
    function stopSlideshow() {
        clearInterval(slideInterval);
    }
    
    // Event listeners for slider controls
    prevSlide.addEventListener('click', function() {
        prevSlideFunc();
        stopSlideshow();
        startSlideshow();
    });
    
    nextSlide.addEventListener('click', function() {
        nextSlideFunc();
        stopSlideshow();
        startSlideshow();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToSlide(index);
            stopSlideshow();
            startSlideshow();
        });
    });
    
    // Start slideshow
    startSlideshow();
    
    // Testimonial slider
    const testimonials = document.querySelectorAll('.testimonial');
    const testimonialDots = document.querySelectorAll('.testimonial-dots .dot');
    const prevTestimonial = document.querySelector('.prev-testimonial');
    const nextTestimonial = document.querySelector('.next-testimonial');
    let currentTestimonial = 0;
    
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
    
    // Event listeners for testimonial controls
    prevTestimonial.addEventListener('click', prevTestimonialFunc);
    nextTestimonial.addEventListener('click', nextTestimonialFunc);
    
    testimonialDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            goToTestimonial(index);
        });
    });
    
    // Animate stats counter
    const stats = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count'));
            const duration = 2000; // 2 seconds
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    stat.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    stat.textContent = target;
                }
            };
            
            updateCounter();
        });
    }
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats-container')) {
                    animateStats();
                }
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.stats-container, .service-card, .about-image, .about-text').forEach(el => {
        observer.observe(el);
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
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
                    <h3>¡Mensaje Enviado!</h3>
                    <p>Gracias por contactarnos. Nos pondremos en contacto con usted a la brevedad.</p>
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
                }, 5000);
            }, 2000);
        });
    }
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const input = this.querySelector('input');
            const button = this.querySelector('button');
            const originalHTML = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            button.disabled = true;
            input.disabled = true;
            
            setTimeout(() => {
                // Show success message
                this.innerHTML = `
                    <div class="success-message">
                        <i class="fas fa-check-circle"></i>
                        <p>¡Gracias por suscribirse!</p>
                    </div>
                `;
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    this.innerHTML = `
                        <input type="email" placeholder="Su correo electrónico" required>
                        <button type="submit">${originalHTML}</button>
                    `;
                }, 3000);
            }, 1500);
        });
    }
    
    // Cookie consent
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptCookiesBtn = document.querySelector('.accept-cookies');
    
    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(() => {
            cookieConsent.classList.add('active');
        }, 2000);
    }
    
    if (acceptCookiesBtn) {
        acceptCookiesBtn.addEventListener('click', function() {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieConsent.classList.remove('active');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
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