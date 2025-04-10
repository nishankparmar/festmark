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