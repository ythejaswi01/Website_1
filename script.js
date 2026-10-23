// JavaScript functionality for the header
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for hash links (same page navigation)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                console.log('Navigating to:', targetId);
            }
            // Allow normal navigation for actual HTML files
        });
    });
});
