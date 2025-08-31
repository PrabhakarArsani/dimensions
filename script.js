// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Product Tabs (Products Page)
const tabButtons = document.querySelectorAll('.tab-btn');
const productSections = document.querySelectorAll('.product-section');

if (tabButtons.length > 0) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            
            // Remove active class from all buttons and sections
            tabButtons.forEach(btn => btn.classList.remove('active'));
            productSections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked button and target section
            button.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
}

// Series Buttons (Hero Products Section)
const seriesButtons = document.querySelectorAll('.series-btn');
const seriesContents = document.querySelectorAll('.series-content');

if (seriesButtons.length > 0) {
    seriesButtons.forEach(button => {
        button.addEventListener('click', () => {
            const series = button.getAttribute('data-series');
            
            // Remove active class from all buttons and content sections
            seriesButtons.forEach(btn => btn.classList.remove('active'));
            seriesContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and target content section
            button.classList.add('active');
            document.getElementById(`${series}-series-content`).classList.add('active');
            
            // Smooth scroll to the content section
            document.getElementById(`${series}-series-content`).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
}

// Product Type Tabs (ECO Series)
const typeTabs = document.querySelectorAll('.type-tab');
const productTypeContents = document.querySelectorAll('.product-type-content');

if (typeTabs.length > 0) {
    typeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and content sections
            typeTabs.forEach(t => t.classList.remove('active'));
            productTypeContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content section
            const type = tab.getAttribute('data-type');
            const targetContent = document.querySelector(`.${type}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
                console.log(`Showing content for: ${type}`);
            } else {
                console.log(`Content not found for: ${type}`);
            }
            
            console.log(`Selected type: ${type}`);
        });
    });
}

// Debug: Check if images are loading
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.window-image');
    images.forEach((img, index) => {
        img.addEventListener('load', function() {
            console.log(`Image ${index + 1} loaded successfully:`, img.src);
        });
        img.addEventListener('error', function() {
            console.error(`Image ${index + 1} failed to load:`, img.src);
        });
    });
});

// Filter Buttons (ECO Series and Prima Series)
const filterButtons = document.querySelectorAll('.filter-btn');

if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all filter buttons with the same data-filter value
            const filterValue = button.getAttribute('data-filter');
            document.querySelectorAll(`.filter-btn[data-filter="${filterValue}"]`).forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Add active class to clicked button and all buttons with same filter value
            document.querySelectorAll(`.filter-btn[data-filter="${filterValue}"]`).forEach(btn => {
                btn.classList.add('active');
            });
            
            // Get the filter value
            const filter = button.getAttribute('data-filter');
            
            // Find the product grid - handle both mobile and desktop scenarios
            let productGrid;
            const seriesContentWrapper = button.closest('.series-content-wrapper');
            if (seriesContentWrapper) {
                // Desktop scenario
                productGrid = seriesContentWrapper.querySelector('.product-grid');
            } else {
                // Mobile scenario - find the product grid in the same sliding content section
                // Check for all possible sliding content classes
                const slidingContent = button.closest('.sliding-content, .prima-sliding-content, .royal-sliding-content');
                if (slidingContent) {
                    productGrid = slidingContent.querySelector('.product-grid');
                }
            }
            
            if (!productGrid) {
                console.error('Product grid not found');
                return;
            }
            
            const allProductCards = productGrid.querySelectorAll('.product-card');
            
            // Hide all product cards first
            allProductCards.forEach(card => {
                card.classList.remove('active');
            });
            
            // Show products based on selected filter
            if (filter.startsWith('prima-')) {
                // Prima Series filtering
                switch(filter) {
                    case 'prima-2-track-60':
                        const primaTrack60Cards = productGrid.querySelectorAll('.product-card.prima-track-60mm');
                        primaTrack60Cards.forEach(card => {
                            card.classList.add('active');
                        });
                        break;
                    case 'prima-2-5-track-93':
                        const primaTrack93Cards = productGrid.querySelectorAll('.product-card.prima-track-93mm');
                        primaTrack93Cards.forEach(card => {
                            card.classList.add('active');
                        });
                        break;
                    case 'prima-3-track-107':
                        const primaTrack107Cards = productGrid.querySelectorAll('.product-card.prima-track-107mm');
                        primaTrack107Cards.forEach(card => {
                            card.classList.add('active');
                        });
                        break;
                }
            } else if (filter.startsWith('royal-')) {
                // Royal Series filtering
                switch(filter) {
                    case 'royal-2-track-65':
                        const royalTrack65Cards = productGrid.querySelectorAll('.product-card.royal-track-65mm');
                        royalTrack65Cards.forEach(card => {
                            card.classList.add('active');
                        });
                        break;
                    case 'royal-3-track-117':
                        const royalTrack117Cards = productGrid.querySelectorAll('.product-card.royal-track-117mm');
                        royalTrack117Cards.forEach(card => {
                            card.classList.add('active');
                        });
                        break;
                }
            } else {
                // ECO Series filtering
                switch(filter) {
                    case '2-track-60':
                        const track60Cards = productGrid.querySelectorAll('.product-card.track-60mm');
                        track60Cards.forEach(card => {
                            card.classList.add('active');
                        });
                        break;
                    case '2-5-track-93':
                        const track93Cards = productGrid.querySelectorAll('.product-card.track-93mm');
                        track93Cards.forEach(card => {
                            card.classList.add('active');
                        });
                        break;
                    case '3-track-107':
                        const track107Cards = productGrid.querySelectorAll('.product-card.track-107mm');
                        track107Cards.forEach(card => {
                            card.classList.add('active');
                        });
                        break;
                }
            }
            
            console.log(`Showing products for: ${filter}`);
        });
    });
}



// FAQ Accordion (Contact Page)
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems.length > 0) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// WhatsApp Contact Form Function
function sendToWhatsApp(event) {
    event.preventDefault();
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const company = document.getElementById('company').value;
    const projectType = document.getElementById('project-type').value;
    const productInterest = document.getElementById('product-interest').value;
    const message = document.getElementById('message').value;
    
    // Create WhatsApp message
    let whatsappMessage = `*New Contact Form Submission*\n\n`;
    whatsappMessage += `*Name:* ${name}\n`;
    whatsappMessage += `*Email:* ${email}\n`;
    whatsappMessage += `*Phone:* ${phone}\n`;
    
    if (company) {
        whatsappMessage += `*Company:* ${company}\n`;
    }
    
    if (projectType) {
        whatsappMessage += `*Project Type:* ${projectType}\n`;
    }
    
    if (productInterest) {
        whatsappMessage += `*Product Interest:* ${productInterest}\n`;
    }
    
    whatsappMessage += `*Message:* ${message}\n\n`;
    whatsappMessage += `*Submitted from:* Dimensions Website`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number (replace with your actual WhatsApp number)
    const whatsappNumber = '919390115722'; // +91 9390115722
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    showNotification('Redirecting to WhatsApp... Please send the message to complete your inquiry.', 'success');
    
    // Reset form
    document.getElementById('contactForm').reset();
}

// Contact Form Handling (Legacy - keeping for other forms if needed)
const contactForm = document.getElementById('contactForm');

if (contactForm && !contactForm.hasAttribute('onsubmit')) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const formObject = {};
        
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Show success message (in real implementation, you would send this to a server)
        showNotification('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Newsletter Form Handling
const newsletterForms = document.querySelectorAll('.newsletter-form');

newsletterForms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('Thank you for subscribing to our newsletter!', 'success');
            this.reset();
        }
    });
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    font-size: 20px;
    display: none;
    z-index: 1000;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 6px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = '#10b981';
            break;
        case 'error':
            notification.style.background = '#ef4444';
            break;
        case 'warning':
            notification.style.background = '#f59e0b';
            break;
        default:
            notification.style.background = '#3b82f6';
    }
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Lazy Loading for Images (if you add real images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
if ('IntersectionObserver' in window) {
    lazyLoadImages();
}

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card, .product-card, .portfolio-item, .testimonial-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Initialize scroll animations
animateOnScroll();

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .scroll-to-top:hover {
        background: #1e40af !important;
        transform: translateY(-2px);
    }
    
    .notification {
        animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);

// Form Validation
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#ef4444';
            
            // Remove error styling after user starts typing
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        }
    });
    
    // Email validation
    const emailInputs = form.querySelectorAll('input[type="email"]');
    emailInputs.forEach(input => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value && !emailRegex.test(input.value)) {
            isValid = false;
            input.style.borderColor = '#ef4444';
            showNotification('Please enter a valid email address', 'error');
        }
    });
    
    return isValid;
}

// Enhanced form submission with validation
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm(this)) {
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                showNotification('Thank you! Your message has been sent successfully. We will get back to you soon.', 'success');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        } else {
            showNotification('Please fill in all required fields correctly', 'error');
        }
    });
}

// Counter Animation for Statistics (if you add them later)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Initialize counter animation when elements come into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// Logo flip animation - automatic every 2 seconds
const logoContainers = document.querySelectorAll('.logo-container');

logoContainers.forEach(container => {
    const logoFlip = container.querySelector('.logo-flip');
    let isFlipped = false;
    
    // Auto flip every 2 seconds
    setInterval(() => {
        if (isFlipped) {
            logoFlip.style.transform = 'rotateY(0deg)';
            isFlipped = false;
        } else {
            logoFlip.style.transform = 'rotateY(180deg)';
            isFlipped = true;
        }
    }, 2000);
    
    // Also allow manual flip on hover (optional - you can remove this if you want only auto-flip)
    container.addEventListener('mouseenter', function() {
        this.querySelector('.logo-flip').style.transform = 'rotateY(180deg)';
        isFlipped = true;
    });
    
    container.addEventListener('mouseleave', function() {
        this.querySelector('.logo-flip').style.transform = 'rotateY(0deg)';
        isFlipped = false;
    });
});

// Preloader (optional - for better UX)
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Console welcome message
console.log(`
🚪 Welcome to Dimensions Doors and Windows Systems! 🪟

Thank you for visiting our website. We specialize in premium uPVC and Aluminium profile systems.

For any inquiries, please contact us:
📞 +91 9390115722
📞 +91 9390115723
📧 upender@dimensionsdoorsandwindowsystems.in

Website developed with ❤️ for quality door and window solutions.
`); 