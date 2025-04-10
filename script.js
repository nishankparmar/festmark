// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (to be implemented)
const mobileMenuToggle = () => {
    // This will be implemented when we add the mobile menu
    console.log('Mobile menu toggle clicked');
};

// Form validation for signup
const validateSignupForm = (form) => {
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;
    
    if (!email || !password) {
        alert('Please fill in all fields');
        return false;
    }
    
    return true;
};

// Initialize any necessary components when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
    console.log('Festmark landing page loaded');
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            fullName: document.getElementById('fullName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            business: document.getElementById('business').value
        };

        // Show submission feedback
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        try {
            // Here you would typically send the data to your server
            // For now, we'll just simulate a submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Clear form
            contactForm.reset();
            
            // Show success message
            alert('Thank you for your interest! We will contact you soon.');
        } catch (error) {
            alert('Something went wrong. Please try again.');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Phone number validation
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // Allow only numbers and common phone number characters
        e.target.value = e.target.value.replace(/[^\d+\-() ]/g, '');
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.client-card, .contact-form, .mission');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 