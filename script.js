// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const eventSliderContainer = document.querySelector('.event-slider-container');
const eventsLayout = document.querySelector('.events-layout');
const servicesAccordion = document.querySelector('.services-accordion');
const galleryContainer = document.querySelector('.gallery-container');
const featuresGrid = document.querySelector('.features-grid');
const testimonialsSlider = document.querySelector('.testimonials-slider');
const sliderDots = document.querySelector('.slider-dots');
const contactForm = document.getElementById('contactForm');
const popupForm = document.getElementById('popupForm');
const popupOverlay = document.getElementById('popupOverlay');
const popupClose = document.querySelector('.popup-close');
const lightbox = document.getElementById('lightbox');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxPrev = document.querySelector('.lightbox-nav.prev');
const lightboxNext = document.querySelector('.lightbox-nav.next');
const currentYear = document.getElementById('currentYear');
const eventTypeSelect = document.getElementById('eventType');
const popupEventTypeSelect = document.getElementById('popupEventType');
const statNumbers = document.querySelectorAll('.stat-number');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

// Data Arrays
const eventTitlesData = [
    { title: "Birthday Parties", icon: "fa-birthday-cake" },
    { title: "Wedding & Reception", icon: "fa-ring" },
    { title: "Corporate Events", icon: "fa-briefcase" },
    { title: "Baby Shower", icon: "fa-baby" },
    { title: "Anniversary Decor", icon: "fa-glass-cheers" },
    { title: "Engagement", icon: "fa-heart" },
    { title: "House Warming", icon: "fa-home" }
];

const eventsData = [
    { 
        name: "Birthday Parties", 
        icon: "fa-birthday-cake",
        description: "Make every birthday unforgettable with our creative themes and decorations."
    },
    { 
        name: "Baby Shower", 
        icon: "fa-baby",
        description: "Welcome the little one with a beautiful and memorable baby shower celebration."
    },
    { 
        name: "Naming Ceremony", 
        icon: "fa-file-signature",
        description: "Traditional or modern naming ceremonies with cultural significance."
    },
    { 
        name: "Anna Prashan", 
        icon: "fa-utensils",
        description: "First rice eating ceremony with traditional rituals and decorations."
    },
    { 
        name: "Engagement", 
        icon: "fa-heart",
        description: "Romantic engagement celebrations that mark the beginning of a beautiful journey."
    },
    { 
        name: "Mehendi", 
        icon: "fa-paint-brush",
        description: "Vibrant Mehendi functions with traditional music, dance, and decorations."
    },
    { 
        name: "Wedding & Reception", 
        icon: "fa-ring",
        description: "Grand weddings and elegant receptions that create lifelong memories."
    },
    { 
        name: "House Warming", 
        icon: "fa-home",
        description: "Auspicious house warming ceremonies with traditional rituals."
    },
    { 
        name: "Surprise Decor", 
        icon: "fa-gift",
        description: "Beautiful surprise decorations for your loved ones on special occasions."
    },
    { 
        name: "Simple Home Decor", 
        icon: "fa-couch",
        description: "Elegant home decorations for any occasion with personalized touches."
    },
    { 
        name: "Anniversary Decor", 
        icon: "fa-glass-cheers",
        description: "Romantic anniversary celebrations that rekindle the love and memories."
    },
    { 
        name: "Corporate Events", 
        icon: "fa-briefcase",
        description: "Professional corporate events, conferences, and team building activities."
    }
];

const servicesData = [
    {
        category: "Decoration",
        icon: "fa-palette",
        items: [
            { name: "Balloons", icon: "🎈" },
            { name: "Flowers", icon: "🌹" }
        ]
    },
    {
        category: "Food & Catering",
        icon: "fa-utensils",
        items: [
            { name: "Catering", icon: "🫕" },
            { name: "Cakes", icon: "🎂" }
        ]
    },
    {
        category: "Media",
        icon: "fa-camera",
        items: [
            { name: "Photography", icon: "📸" },
            { name: "Videography", icon: "🎥" }
        ]
    },
    {
        category: "Entertainment",
        icon: "fa-magic",
        items: [
            { name: "Magic Show", icon: "🪄" },
            { name: "MC / Anchor", icon: "🎤" },
            { name: "Tattoo", icon: "💉" },
            { name: "Caricature", icon: "👨‍🎨" },
            { name: "Balloon Shooting", icon: "🎯" },
            { name: "Balloon Modelling", icon: "🎈" }
        ]
    },
    {
        category: "Creative Activities",
        icon: "fa-paint-brush",
        items: [
            { name: "Pebble Painting", icon: "🪨" },
            { name: "Keychain Making", icon: "🔑" },
            { name: "Mug Art", icon: "☕" },
            { name: "Paper Craft", icon: "📄" },
            { name: "Clay Modelling", icon: "🧱" },
            { name: "Nail Art", icon: "💅" }
        ]
    },
    {
        category: "Games & Attractions",
        icon: "fa-gamepad",
        items: [
            { name: "Feed the Pig", icon: "🐷" },
            { name: "Archery", icon: "🏹" },
            { name: "Bouncy Castle", icon: "🏰" }
        ]
    },
    {
        category: "Food Stalls",
        icon: "fa-hotdog",
        items: [
            { name: "Popcorn", icon: "🍿" },
            { name: "Cotton Candy", icon: "🍭" },
            { name: "Sweet Corn", icon: "🌽" },
            { name: "Potato Swirl", icon: "🥔" },
            { name: "Pizza", icon: "🍕" },
            { name: "Burger", icon: "🍔" }
        ]
    }
];

const featuresData = [
    {
        title: "End-to-end event planning",
        description: "From concept to execution, we handle every detail so you can focus on celebrating.",
        icon: "fa-tasks"
    },
    {
        title: "Creative & unique concepts",
        description: "We design personalized experiences that reflect your style and vision.",
        icon: "fa-lightbulb"
    },
    {
        title: "Professional friendly team",
        description: "Our experienced planners work with you to bring your dream event to life.",
        icon: "fa-users"
    },
    {
        title: "Transparent pricing",
        description: "No hidden costs. Clear packages tailored to your budget and requirements.",
        icon: "fa-indian-rupee-sign"
    },
    {
        title: "On-time execution",
        description: "Punctuality and precision in every setup, ensuring seamless event flow.",
        icon: "fa-clock"
    },
    {
        title: "Happy customers across Bangalore",
        description: "Join our family of satisfied clients who've experienced the Butterflies magic.",
        icon: "fa-heart"
    }
];

// FIXED: Now showing 3 testimonials correctly
const testimonialsData = [
    {
        content: "Butterflies transformed our wedding into a fairy tale! Every detail was perfect, and their team was so professional. We couldn't have asked for a better experience.",
        author: "Priya & Raj",
        rating: 5
    },
    {
        content: "Our corporate event was a huge success thanks to Butterflies. Their attention to detail and creative concepts impressed all our clients. Highly recommended!",
        author: "Arun Kumar",
        rating: 5
    },
    {
        content: "The surprise birthday party they planned for my husband was magical! The decorations, food stalls, and entertainment were all spot on. Worth every penny!",
        author: "Anjali Sharma",
        rating: 5
    }
];

// Gallery Images (using local images p1.jpg to p10.jpg)
const galleryImages = [];
for (let i = 1; i <= 10; i++) {
    galleryImages.push(`p${i}.png`);
}

// Slider Variables
let currentEventSlide = 0;
let eventSliderInterval;
let currentTestimonialSlide = 0;
let testimonialInterval;
let currentImageIndex = 0;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Initialize event titles slider
    initEventTitlesSlider();
    
    // Animate statistics numbers
    animateStats();
    
    // Populate events section
    renderEventsLayout();
    
    // Populate services section
    renderServices();
    
    // Populate gallery
    renderGallery();
    
    // Populate features section
    renderFeatures();
    
    // Populate testimonials - FIXED
    renderTestimonials();
    
    // Populate event type dropdowns
    populateEventTypeDropdowns();
    
    // Set min date for event date fields to today
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('eventDate').min = today;
    document.getElementById('popupEventDate').min = today;
    
    // Initialize event listeners
    initEventListeners();
    
    // Show popup after 10 seconds
    setTimeout(showPopup, 10000);
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Event Titles Slider Functions
function initEventTitlesSlider() {
    if (!eventSliderContainer) return;
    
    // Create slides
    eventTitlesData.forEach((event, index) => {
        const slide = document.createElement('div');
        slide.className = `event-slide ${index === 0 ? 'active' : ''}`;
        slide.setAttribute('data-index', index);
        
        slide.innerHTML = `
            <div class="event-slide-content">
                <i class="fas ${event.icon} event-slide-icon"></i>
                <span class="event-slide-text">${event.title}</span>
            </div>
        `;
        
        // Add click event to scroll to events section
        slide.addEventListener('click', () => {
            document.querySelector('#events').scrollIntoView({
                behavior: 'smooth'
            });
        });
        
        eventSliderContainer.appendChild(slide);
    });
    
    // Start auto-slide
    startEventSlider();
    
    // Pause on hover
    eventSliderContainer.addEventListener('mouseenter', () => {
        clearInterval(eventSliderInterval);
    });
    
    eventSliderContainer.addEventListener('mouseleave', () => {
        startEventSlider();
    });
    
    // Touch support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    eventSliderContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        clearInterval(eventSliderInterval);
    });
    
    eventSliderContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startEventSlider();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next slide
            goToEventSlide(currentEventSlide + 1);
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right - previous slide
            goToEventSlide(currentEventSlide - 1);
        }
    }
}

function goToEventSlide(index) {
    const slides = document.querySelectorAll('.event-slide');
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Add active class to current slide
    slides[index].classList.add('active');
    
    currentEventSlide = index;
}

function startEventSlider() {
    eventSliderInterval = setInterval(() => {
        goToEventSlide(currentEventSlide + 1);
    }, 3000); // Change slide every 3 seconds
}

// Animate Statistics Numbers
function animateStats() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
}

// Render Events Layout
function renderEventsLayout() {
    if (!eventsLayout) return;
    
    eventsLayout.innerHTML = '';
    
    eventsData.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-layout-card';
        eventCard.setAttribute('data-aos', 'fade-up');
        eventCard.setAttribute('data-aos-delay', `${index * 100}`);
        eventCard.setAttribute('data-event', event.name);
        
        eventCard.innerHTML = `
            <div class="event-layout-icon">
                <i class="fas ${event.icon}"></i>
            </div>
            <h3>${event.name}</h3>
            <p class="event-layout-description">${event.description}</p>
            <div class="event-whatsapp-btn">
                <i class="fab fa-whatsapp"></i> Plan This Event
            </div>
        `;
        
        eventsLayout.appendChild(eventCard);
        
        // Add click event to open WhatsApp with event prefilled
        eventCard.addEventListener('click', () => {
            openEventWhatsApp(event.name);
        });
    });
}

// Open WhatsApp for specific event
function openEventWhatsApp(eventName) {
    const message = `Hello Butterflies Event Management 🦋✨

I would like to enquire about ${eventName}.

🎉 Event Type: ${eventName}

Please share the details and package options for ${eventName}.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919176707070?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Render Services Section
function renderServices() {
    if (!servicesAccordion) return;
    
    servicesAccordion.innerHTML = '';
    
    servicesData.forEach((service, index) => {
        const serviceCategory = document.createElement('div');
        serviceCategory.className = 'service-category';
        serviceCategory.setAttribute('data-aos', 'fade-up');
        
        const itemsHtml = service.items.map(item => `
            <div class="service-item">
                <span>${item.icon}</span>
                <span>${item.name}</span>
            </div>
        `).join('');
        
        serviceCategory.innerHTML = `
            <div class="service-header">
                <h3><i class="fas ${service.icon}"></i> ${service.category}</h3>
                <span class="service-toggle"><i class="fas fa-chevron-down"></i></span>
            </div>
            <div class="service-content">
                <div class="service-items">
                    ${itemsHtml}
                </div>
            </div>
        `;
        
        // Open first service by default
        if (index === 0) {
            serviceCategory.classList.add('active');
        }
        
        servicesAccordion.appendChild(serviceCategory);
        
        // Add click event to service header
        const serviceHeader = serviceCategory.querySelector('.service-header');
        serviceHeader.addEventListener('click', () => {
            serviceCategory.classList.toggle('active');
        });
    });
}

// Render Gallery Section
function renderGallery() {
    if (!galleryContainer) return;
    
    galleryContainer.innerHTML = '';
    
    galleryImages.forEach((imageSrc, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-aos', 'zoom-in');
        galleryItem.setAttribute('data-index', index);
        
        galleryItem.innerHTML = `
            <img src="${imageSrc}" alt="Event ${index + 1}" loading="lazy" onerror="this.src='https://placehold.co/600x400/0a2463/ffffff?text=Event+${index + 1}'">
        `;
        
        galleryContainer.appendChild(galleryItem);
        
        // Add click event to open lightbox
        galleryItem.addEventListener('click', () => openLightbox(index));
    });
}

// Render Features Section
function renderFeatures() {
    if (!featuresGrid) return;
    
    featuresGrid.innerHTML = '';
    
    featuresData.forEach((feature, index) => {
        const featureCard = document.createElement('div');
        featureCard.className = 'feature-card';
        featureCard.setAttribute('data-aos', 'fade-up');
        featureCard.setAttribute('data-aos-delay', (index * 100).toString());
        
        featureCard.innerHTML = `
            <div class="feature-icon">
                <i class="fas ${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        
        featuresGrid.appendChild(featureCard);
    });
}

// FIXED: Render Testimonials Section
function renderTestimonials() {
    if (!testimonialsSlider || !sliderDots) return;
    
    // Clear existing content
    testimonialsSlider.innerHTML = '';
    sliderDots.innerHTML = '';
    
    // Create testimonial slides
    testimonialsData.forEach((testimonial, index) => {
        // Create testimonial slide
        const testimonialSlide = document.createElement('div');
        testimonialSlide.className = 'testimonial-slide';
        testimonialSlide.setAttribute('data-index', index);
        
        // Create star rating
        let stars = '';
        for (let i = 0; i < testimonial.rating; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        testimonialSlide.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-content">
                    ${testimonial.content}
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>Satisfied Client</p>
                        <div class="rating">
                            ${stars}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        testimonialsSlider.appendChild(testimonialSlide);
        
        // Create slider dot
        const sliderDot = document.createElement('div');
        sliderDot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        sliderDot.setAttribute('data-index', index);
        sliderDots.appendChild(sliderDot);
        
        // Add click event to dot
        sliderDot.addEventListener('click', () => goToTestimonialSlide(index));
    });
    
    // Initialize testimonial slider
    updateTestimonialSliderPosition();
    
    // Start auto-slide for testimonials
    startTestimonialSlider();
}

// FIXED: Testimonial Slider Functions
function updateTestimonialSliderPosition() {
    if (!testimonialsSlider) return;
    
    testimonialsSlider.style.transform = `translateX(-${currentTestimonialSlide * 100}%)`;
    
    // Update active dot
    document.querySelectorAll('.slider-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonialSlide);
    });
}

function goToTestimonialSlide(index) {
    if (index < 0) index = testimonialsData.length - 1;
    if (index >= testimonialsData.length) index = 0;
    
    currentTestimonialSlide = index;
    updateTestimonialSliderPosition();
    
    // Reset auto-slide interval
    clearInterval(testimonialInterval);
    startTestimonialSlider();
}

function startTestimonialSlider() {
    testimonialInterval = setInterval(() => {
        goToTestimonialSlide(currentTestimonialSlide + 1);
    }, 5000); // Change slide every 5 seconds
}

// Populate Event Type Dropdowns
function populateEventTypeDropdowns() {
    eventsData.forEach(event => {
        // For contact form
        const option = document.createElement('option');
        option.value = event.name;
        option.textContent = event.name;
        eventTypeSelect.appendChild(option.cloneNode(true));
        
        // For popup form
        popupEventTypeSelect.appendChild(option);
    });
}

// Initialize Event Listeners
function initEventListeners() {
    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // WhatsApp triggers
    document.querySelectorAll('.whatsapp-trigger, .whatsapp-link, .whatsapp-btn').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            showPopup();
        });
    });
    
    // Form submissions
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (popupForm) {
        popupForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Popup close
    if (popupClose) {
        popupClose.addEventListener('click', () => {
            popupOverlay.classList.remove('active');
        });
    }
    
    // Close popup when clicking outside
    if (popupOverlay) {
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('active');
            }
        });
    }
    
    // Lightbox controls
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }
    
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', showPrevImage);
    }
    
    if (lightboxNext) {
        lightboxNext.addEventListener('click', showNextImage);
    }
    
    // Close lightbox when clicking outside image
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation for lightbox
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') showPrevImage();
            if (e.key === 'ArrowRight') showNextImage();
        }
    });
    
    // Testimonial slider controls
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            goToTestimonialSlide(currentTestimonialSlide - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            goToTestimonialSlide(currentTestimonialSlide + 1);
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Submission Handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = {
        name: form.querySelector('input[name="name"]').value,
        mobile: form.querySelector('input[name="mobile"]').value,
        eventType: form.querySelector('select[name="eventType"]').value,
        eventDate: form.querySelector('input[name="eventDate"]').value,
        location: form.querySelector('input[name="location"]').value,
        budget: form.querySelector('select[name="budget"]').value || 'Not specified'
    };
    
    // Validate mobile number (Indian format)
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(formData.mobile)) {
        alert('Please enter a valid 10-digit Indian mobile number.');
        return;
    }
    
    // Open WhatsApp with prefilled message
    openWhatsApp(formData);
    
    // Reset form
    form.reset();
    
    // Close popup if it's open
    if (form.id === 'popupForm') {
        popupOverlay.classList.remove('active');
    }
}

// Open WhatsApp with Prefilled Message
function openWhatsApp(formData) {
    const message = `Hello Butterflies Event Management 🦋✨

I would like to enquire about an event.

👤 Name: ${formData.name}
📞 Mobile: ${formData.mobile}
🎉 Event Type: ${formData.eventType}
📅 Event Date: ${formData.eventDate}
📍 Location: ${formData.location}
💰 Budget Range: ${formData.budget}

Please share the details.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919176707070?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

// Show Popup Form
function showPopup() {
    // Check if popup has been shown in this session
    if (sessionStorage.getItem('popupShown')) return;
    
    if (popupOverlay) {
        popupOverlay.classList.add('active');
        sessionStorage.setItem('popupShown', 'true');
    }
}

// Lightbox Functions
function openLightbox(index) {
    currentImageIndex = index;
    lightboxImg.src = galleryImages[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex];
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[currentImageIndex];
}

// Initialize Scroll Animations
function initScrollAnimations() {
    // Simple scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observe elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
    
    // Add scroll effect to header
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.12)';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });
}