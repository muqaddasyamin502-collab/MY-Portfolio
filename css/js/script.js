// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const backToTopBtn = document.getElementById('back-to-top');
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const skillProgressBars = document.querySelectorAll('.skill-progress');
const typingTextElement = document.getElementById('typing-text');

// Typing animation for hero section
const typingTexts = [
    "Artificial Intelligence Student",
    "Future AI Engineer",
    "Machine Learning Enthusiast",
    "Technology Innovator"
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = typingTexts[textIndex];

    if (isDeleting) {
        // Deleting text
        typingTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Typing text
        typingTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    // If text is fully typed
    if (!isDeleting && charIndex === currentText.length) {
        // Pause at the end of typing
        typingSpeed = 1500;
        isDeleting = true;
    }
    // If text is fully deleted
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex++;

        // Reset to first text if at the end
        if (textIndex === typingTexts.length) {
            textIndex = 0;
        }

        typingSpeed = 500;
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation when page loads
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);

    // Animate skill bars on page load
    animateSkillBars();
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.querySelector('i').classList.toggle('fa-bars');
    menuToggle.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.remove('fa-times');
        menuToggle.querySelector('i').classList.add('fa-bars');

        // Update active nav link
        navLinks.forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scrolling for navigation links
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

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 100;

    // Update active nav link
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });

    // Show/hide back to top button
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

// Back to top button functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate skill bars when they come into view
function animateSkillBars() {
    skillProgressBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        bar.style.width = `${level}%`;
    });
}

// Form submission handling
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (!name || !email || !subject || !message) {
        showFormMessage('Please fill in all fields.', 'error');
        return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Show success message (in a real application, you would send this to a server)
    showFormMessage('Thank you for your message! I\'ll get back to you soon.', 'success');

    // Reset form
    contactForm.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.className = 'form-message';
    }, 5000);
});

// Show form message
function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
}

// Add floating animation to elements with class 'floating'
const floatingElements = document.querySelectorAll('.floating-element');
floatingElements.forEach(el => {
    // Add random animation delay for variety
    const randomDelay = Math.random() * 5;
    el.style.animationDelay = `${randomDelay}s`;
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 15px 40px rgba(0, 217, 255, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 10px 30px rgba(0, 217, 255, 0.1)';
    });
});

// Add scroll event listener
window.addEventListener('scroll', updateActiveNavLink);

// Initialize when page loads
updateActiveNavLink();

// Theme toggle functionality (for future enhancement)
const themeToggle = document.querySelector('.toggle-switch');
themeToggle.addEventListener('click', () => {
    const toggleCircle = document.querySelector('.toggle-circle');
    const isDark = toggleCircle.style.left === '3px';

    if (isDark) {
        // Switch to light mode
        toggleCircle.style.left = '27px';
        toggleCircle.style.background = 'linear-gradient(90deg, #ffcc00, #ff9900)';
        document.documentElement.style.setProperty('--primary-bg', '#f5f5f7');
        document.documentElement.style.setProperty('--secondary-bg', '#ffffff');
        document.documentElement.style.setProperty('--card-bg', '#f0f0f5');
        document.documentElement.style.setProperty('--text-primary', '#333333');
        document.documentElement.style.setProperty('--text-secondary', '#666666');
    } else {
        // Switch back to dark mode
        toggleCircle.style.left = '3px';
        toggleCircle.style.background = 'linear-gradient(90deg, #00d9ff, #9d00ff)';
        document.documentElement.style.setProperty('--primary-bg', '#0a0a0f');
        document.documentElement.style.setProperty('--secondary-bg', '#12121a');
        document.documentElement.style.setProperty('--card-bg', '#1a1a24');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#b0b0c0');
    }
});