// Simple script to log when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("Business website loaded successfully.");
    
    // Example: Add a shadow to header on scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });
});
