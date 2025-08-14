// This file can be used for any future interactive features.
// For now, it can remain empty or contain a simple log.

console.log("RD Innovation website loaded successfully.");

// Optional: Smooth scrolling for navigation links if you have a multi-section single page.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Find the target element
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            // Smoothly scroll to the target element
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
