document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle (reusing from main script)
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Gallery Modal Functionality
    const modal = document.getElementById('gallery-modal');
    const vehicleCards = document.querySelectorAll('.vehicle-card');
    const closeModal = document.querySelector('.close-modal');
    const currentGalleryImage = document.getElementById('current-gallery-image');
    const modalVehicleTitle = document.getElementById('modal-vehicle-title');
    const modalVehicleDetails = document.getElementById('modal-vehicle-details');
    const galleryThumbnails = document.getElementById('gallery-thumbnails');
    const prevButton = document.getElementById('prev-image');
    const nextButton = document.getElementById('next-image');
    
    let currentImageIndex = 0;
    let galleryImages = [];
    
    // Open gallery modal when clicking on a vehicle image
    vehicleCards.forEach(card => {
        const imageOverlay = card.querySelector('.image-overlay');
        
        imageOverlay.addEventListener('click', function() {
            // Get vehicle info
            const vehicleTitle = card.querySelector('.vehicle-info h3').textContent;
            const vehicleDetails = [];
            
            card.querySelectorAll('.vehicle-details span').forEach(detail => {
                vehicleDetails.push(detail.textContent.trim());
            });
            
            // Set modal info
            modalVehicleTitle.textContent = vehicleTitle;
            modalVehicleDetails.textContent = vehicleDetails.join(' | ');
            
            // Get gallery images
            galleryImages = [];
            card.querySelectorAll('.gallery-images img').forEach(img => {
                galleryImages.push({
                    src: img.src,
                    alt: img.alt
                });
            });
            
            // Reset current image index
            currentImageIndex = 0;
            
            // Load first image
            if (galleryImages.length > 0) {
                currentGalleryImage.src = galleryImages[0].src;
                currentGalleryImage.alt = galleryImages[0].alt;
            }
            
            // Create thumbnails
            createThumbnails();
            
            // Show modal
            modal.style.display = 'block';
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        });
    });
    
    // Close modal when clicking on close button or outside the modal
    closeModal.addEventListener('click', closeGalleryModal);
    
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeGalleryModal();
        }
    });
    
    // Close modal with ESC key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeGalleryModal();
        }
    });
    
    // Navigate through gallery images
    prevButton.addEventListener('click', showPreviousImage);
    nextButton.addEventListener('click', showNextImage);
    
    // Navigate with arrow keys
    document.addEventListener('keydown', function(event) {
        if (modal.style.display === 'block') {
            if (event.key === 'ArrowLeft') {
                showPreviousImage();
            } else if (event.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
    
    // Function to create thumbnails
    function createThumbnails() {
        galleryThumbnails.innerHTML = '';
        
        galleryImages.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
            
            const thumbnailImg = document.createElement('img');
            thumbnailImg.src = image.src;
            thumbnailImg.alt = `Thumbnail ${index + 1}`;
            
            thumbnail.appendChild(thumbnailImg);
            galleryThumbnails.appendChild(thumbnail);
            
            // Add click event to thumbnail
            thumbnail.addEventListener('click', function() {
                currentImageIndex = index;
                updateGalleryImage();
            });
        });
    }
    
    // Function to show previous image
    function showPreviousImage() {
        if (galleryImages.length > 1) {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            updateGalleryImage();
        }
    }
    
    // Function to show next image
    function showNextImage() {
        if (galleryImages.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            updateGalleryImage();
        }
    }
    
    // Function to update gallery image
    function updateGalleryImage() {
        // Update main image
        currentGalleryImage.src = galleryImages[currentImageIndex].src;
        currentGalleryImage.alt = galleryImages[currentImageIndex].alt;
        
        // Update active thumbnail
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach((thumbnail, index) => {
            if (index === currentImageIndex) {
                thumbnail.classList.add('active');
            } else {
                thumbnail.classList.remove('active');
            }
        });
    }
    
    // Function to close gallery modal
    function closeGalleryModal() {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
    
    // Vehicle Filtering
    const applyFiltersBtn = document.getElementById('apply-filters');
    const brandFilter = document.getElementById('brand-filter');
    const yearFilter = document.getElementById('year-filter');
    const typeFilter = document.getElementById('type-filter');
    
    applyFiltersBtn.addEventListener('click', filterVehicles);
    
    function filterVehicles() {
        const selectedBrand = brandFilter.value;
        const selectedYear = yearFilter.value;
        const selectedType = typeFilter.value;
        
        vehicleCards.forEach(card => {
            const cardBrand = card.getAttribute('data-brand');
            const cardYear = card.getAttribute('data-year');
            const cardType = card.getAttribute('data-type');
            
            let showCard = true;
            
            if (selectedBrand !== 'all' && cardBrand !== selectedBrand) {
                showCard = false;
            }
            
            if (selectedYear !== 'all') {
                if (selectedYear === 'older') {
                    if (parseInt(cardYear) >= 2020) {
                        showCard = false;
                    }
                } else if (cardYear !== selectedYear) {
                    showCard = false;
                }
            }
            
            if (selectedType !== 'all' && cardType !== selectedType) {
                showCard = false;
            }
            
            card.style.display = showCard ? 'block' : 'none';
        });
    }
    
    // Animation on scroll
    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        
        vehicleCards.forEach((card, index) => {
            const cardTop = card.getBoundingClientRect().top;
            
            if (cardTop < windowHeight - 100) {
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }
    
    // Set initial styles for vehicle cards
    vehicleCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Listen for scroll events
    window.addEventListener('scroll', revealOnScroll);
    
    // Call once on load
    revealOnScroll();
});