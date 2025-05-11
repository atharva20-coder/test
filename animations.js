// InnovateX Landing Page Animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .testimonial-card, .about-image, .about-text, .contact-form, .contact-info');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
        
        // Add staggered animations for grid items
        const featureCards = document.querySelectorAll('.feature-card');
        featureCards.forEach((card, index) => {
            if (card.getBoundingClientRect().top < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add('animate-stagger');
                }, 150 * index);
            }
        });
        
        // Add staggered animations for testimonials
        const testimonialCards = document.querySelectorAll('.testimonial-card');
        testimonialCards.forEach((card, index) => {
            if (card.getBoundingClientRect().top < windowHeight - 100) {
                setTimeout(() => {
                    card.classList.add('animate-stagger');
                }, 200 * index);
            }
        });
    };
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Hero section animations with enhanced effects
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    setTimeout(() => {
        heroTitle.classList.add('animate', 'animate-slide-up');
    }, 300);
    
    setTimeout(() => {
        heroSubtitle.classList.add('animate', 'animate-slide-up');
    }, 600);
    
    setTimeout(() => {
        heroButtons.classList.add('animate', 'animate-slide-up');
    }, 900);
    
    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const hero = document.querySelector('.hero');
        
        if (scrollPosition < window.innerHeight) {
            hero.style.backgroundPosition = `center ${scrollPosition * 0.4}px`;
        }
    });
    
    // Mobile menu toggle with animation
    const createMobileMenu = function() {
        const nav = document.querySelector('nav');
        const mobileMenuButton = document.createElement('div');
        mobileMenuButton.className = 'mobile-menu-button';
        mobileMenuButton.innerHTML = '<span></span><span></span><span></span>';
        
        nav.appendChild(mobileMenuButton);
        
        mobileMenuButton.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate menu items when menu opens
            if (navLinks.classList.contains('active')) {
                const menuItems = navLinks.querySelectorAll('li');
                menuItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100 * index);
                });
            }
        });
    };
    
    // Feature cards hover effect with enhanced animations
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
            
            // Animate icon on hover
            const icon = this.querySelector('.feature-icon');
            icon.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            icon.style.transform = 'scale(1.2) translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
            
            // Reset icon animation
            const icon = this.querySelector('.feature-icon');
            icon.style.transform = 'scale(1) translateY(0)';
        });
    });
    
    // Add counter animation to numbers in text
    const animateCounters = function() {
        const counters = document.querySelectorAll('.counter');
        
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const duration = 2000; // ms
            const step = target / (duration / 16); // 60fps
            let current = 0;
            
            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            
            updateCounter();
        });
    };
    
    // Add typing effect to section titles
    const addTypingEffect = function() {
        const titles = document.querySelectorAll('.section-title');
        
        titles.forEach(title => {
            const text = title.textContent;
            title.textContent = '';
            title.style.opacity = '1';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            // Only start typing when title is in view
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(typeWriter, 300);
                        observer.unobserve(title);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(title);
        });
    };
    
    // Add smooth reveal for images
    const animateImages = function() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 1s ease, transform 1s ease';
            img.style.transform = 'scale(0.95)';
            
            img.addEventListener('load', function() {
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 300);
            });
            
            // If image is already loaded
            if (img.complete) {
                setTimeout(() => {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 300);
            }
        });
    };
    
    // Add CSS for new animations
    const addAnimationStyles = function() {
        const styleSheet = document.createElement('style');
        styleSheet.textContent = `
            .animate-slide-up {
                animation: slideUp 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
            }
            
            .animate-stagger {
                animation: fadeInUp 0.6s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .feature-card, .testimonial-card {
                transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                            box-shadow 0.5s ease;
            }
            
            .nav-links li {
                transition: transform 0.3s ease, opacity 0.3s ease;
            }
            
            .section-title {
                opacity: 0;
                transition: opacity 0.3s ease;
            }
        `;
        document.head.appendChild(styleSheet);
    };
    
    // Initialize all animations
    window.addEventListener('scroll', animateOnScroll);
    createMobileMenu();
    animateOnScroll(); // Run once on page load
    addAnimationStyles();
    animateImages();
    
    // Use Intersection Observer for better performance
    const observeElements = function() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        document.querySelectorAll('.feature-card, .testimonial-card, .about-image, .about-text, .contact-form, .contact-info')
            .forEach(element => {
                observer.observe(element);
            });
    };
    
    observeElements();
    
    // Add animation to form inputs when focused
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('input-focused');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('input-focused');
            }
        });
    });
});