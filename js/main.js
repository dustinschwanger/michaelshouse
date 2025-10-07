// Michael's House - Main JavaScript
// Trauma-informed, accessible interactions

// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('active');

            // Update icon
            this.textContent = isExpanded ? '☰' : '✕';
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.main-nav') && !event.target.closest('.menu-toggle')) {
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            }
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
                menuToggle.focus();
            }
        });
    }

    // ===== Sticky Header on Scroll =====
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===== Active Navigation Link =====
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage ||
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ===== Current Year in Footer =====
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===== Newsletter Form Handling =====
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('button[type="submit"]');

            if (nameInput.value && emailInput.value) {
                // Show success message
                submitBtn.textContent = 'Thank you!';
                submitBtn.style.backgroundColor = 'var(--soft-sage)';

                // Reset form after 2 seconds
                setTimeout(() => {
                    this.reset();
                    submitBtn.textContent = 'Submit';
                    submitBtn.style.backgroundColor = '';
                }, 2000);
            }
        });
    });

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#main-content') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Focus on target for accessibility
                    target.focus();
                }
            }
        });
    });

    // ===== Fade In on Scroll Animation =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.card, .goals-content, .mission-statement').forEach(el => {
        fadeObserver.observe(el);
    });

    // ===== Image Gallery Lightbox (for About page) =====
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    if (galleryImages.length > 0) {
        // Create lightbox
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
            <img src="" alt="" class="lightbox-image">
            <button class="lightbox-prev" aria-label="Previous image">&#8249;</button>
            <button class="lightbox-next" aria-label="Next image">&#8250;</button>
        `;
        document.body.appendChild(lightbox);

        let currentImageIndex = 0;
        const images = Array.from(galleryImages);

        // Show lightbox
        function showLightbox(index) {
            currentImageIndex = index;
            const img = images[currentImageIndex];
            lightbox.querySelector('.lightbox-image').src = img.src;
            lightbox.querySelector('.lightbox-image').alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Navigate images
        function navigateLightbox(direction) {
            currentImageIndex += direction;
            if (currentImageIndex < 0) currentImageIndex = images.length - 1;
            if (currentImageIndex >= images.length) currentImageIndex = 0;

            const img = images[currentImageIndex];
            lightbox.querySelector('.lightbox-image').src = img.src;
            lightbox.querySelector('.lightbox-image').alt = img.alt;
        }

        // Event listeners
        galleryImages.forEach((img, index) => {
            img.addEventListener('click', () => showLightbox(index));
            img.style.cursor = 'pointer';
            img.setAttribute('tabindex', '0');
            img.setAttribute('role', 'button');
            img.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    showLightbox(index);
                }
            });
        });

        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        lightbox.querySelector('.lightbox-prev').addEventListener('click', () => navigateLightbox(-1));
        lightbox.querySelector('.lightbox-next').addEventListener('click', () => navigateLightbox(1));

        // Close on overlay click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') navigateLightbox(-1);
                if (e.key === 'ArrowRight') navigateLightbox(1);
            }
        });
    }

    // ===== Form Validation Enhancement =====
    const forms = document.querySelectorAll('form:not(.newsletter-form)');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');

        inputs.forEach(input => {
            // Show validation on blur
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.classList.add('error');
                    showFieldError(this, 'This field is required');
                } else {
                    this.classList.remove('error');
                    removeFieldError(this);
                }
            });

            // Clear error on input
            input.addEventListener('input', function() {
                this.classList.remove('error');
                removeFieldError(this);
            });
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            let hasErrors = false;

            inputs.forEach(input => {
                if (input.hasAttribute('required') && !input.value.trim()) {
                    input.classList.add('error');
                    showFieldError(input, 'This field is required');
                    hasErrors = true;
                }
            });

            if (hasErrors) {
                e.preventDefault();
                const firstError = form.querySelector('.error');
                if (firstError) firstError.focus();
            }
        });
    });

    function showFieldError(field, message) {
        removeFieldError(field);
        const error = document.createElement('span');
        error.className = 'field-error';
        error.textContent = message;
        error.setAttribute('role', 'alert');
        field.parentNode.insertBefore(error, field.nextSibling);
    }

    function removeFieldError(field) {
        const error = field.parentNode.querySelector('.field-error');
        if (error) error.remove();
    }

    // ===== Accessible Focus Management =====
    // Make focus visible only when using keyboard
    let isUsingMouse = false;

    document.addEventListener('mousedown', () => {
        isUsingMouse = true;
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            isUsingMouse = false;
        }
    });

    // ===== Print Friendly =====
    window.addEventListener('beforeprint', () => {
        // Expand all collapsed content before printing
        document.querySelectorAll('.main-nav').forEach(nav => {
            nav.style.display = 'none';
        });
    });

    window.addEventListener('afterprint', () => {
        document.querySelectorAll('.main-nav').forEach(nav => {
            nav.style.display = '';
        });
    });
});

// ===== Accessibility: Announce dynamic content changes =====
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    document.body.appendChild(announcement);

    setTimeout(() => {
        announcement.remove();
    }, 1000);
}

// Screen reader only class
const style = document.createElement('style');
style.textContent = `
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    /* Lightbox Styles */
    .lightbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 10000;
        align-items: center;
        justify-content: center;
    }

    .lightbox.active {
        display: flex;
    }

    .lightbox-image {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    }

    .lightbox-close,
    .lightbox-prev,
    .lightbox-next {
        position: absolute;
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        padding: 1rem;
        transition: background-color 0.3s;
        backdrop-filter: blur(10px);
    }

    .lightbox-close:hover,
    .lightbox-prev:hover,
    .lightbox-next:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    .lightbox-close {
        top: 1rem;
        right: 1rem;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }

    .lightbox-prev {
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 8px;
    }

    .lightbox-next {
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 8px;
    }

    /* Form Error Styles */
    .field-error {
        color: #d32f2f;
        font-size: 0.875rem;
        display: block;
        margin-top: 0.25rem;
    }

    input.error,
    textarea.error {
        border-color: #d32f2f;
    }
`;
document.head.appendChild(style);
